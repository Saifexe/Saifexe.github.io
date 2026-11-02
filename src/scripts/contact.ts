/**
 * Contact dialog: opens from any [data-open-contact] trigger, rising from the button that
 * was clicked while the page behind blurs. Validates input, drops bot submissions, and
 * delivers by mailto (default) or a JSON POST to the configured endpoint.
 * No HTML is ever built from user input: everything is set with textContent or encoded.
 */
import { gsap } from 'gsap';

type Lenisish = { stop(): void; start(): void } | null;

export function initContact(getLenis: () => Lenisish, reduce: boolean) {
  const dlg = document.querySelector<HTMLDialogElement>('#contact-dialog');
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  if (!dlg || !form) return;

  const card = form;
  const items = Array.from(dlg.querySelectorAll<HTMLElement>('[data-cd-item]'));
  const steps = Array.from(dlg.querySelectorAll<HTMLLIElement>('#cd-steps li'));
  const send = dlg.querySelector<HTMLButtonElement>('#cd-send')!;
  const done = dlg.querySelector<HTMLElement>('#cd-done')!;
  const count = dlg.querySelector<HTMLElement>('#cd-count')!;
  const message = form.elements.namedItem('message') as HTMLTextAreaElement;
  const mode = dlg.dataset.mode as 'mailto' | 'post';
  const endpoint = dlg.dataset.endpoint || '';
  const to = dlg.dataset.to || '';
  let origin = { x: 0, y: 0 };
  let lastSent = 0;
  let closing = false;

  /* ---------- Open / close ---------- */
  function open(from?: Element | null) {
    if (dlg!.open) return;
    const r = from?.getBoundingClientRect();
    origin = r
      ? { x: r.left + r.width / 2 - innerWidth / 2, y: r.top + r.height / 2 - innerHeight / 2 }
      : { x: 0, y: 40 };
    resetForm();
    dlg!.showModal();
    getLenis()?.stop();
    document.documentElement.classList.add('cd-open');
    if (reduce) return;
    gsap.fromTo(
      card,
      { x: origin.x * 0.35, y: origin.y * 0.35 + 30, scale: 0.86, opacity: 0, rotate: -1.5 },
      { x: 0, y: 0, scale: 1, opacity: 1, rotate: 0, duration: 0.7, ease: 'expo.out' },
    );
    gsap.fromTo(
      items,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out', stagger: 0.06, delay: 0.12 },
    );
    setTimeout(() => (form!.elements.namedItem('name') as HTMLInputElement)?.focus({ preventScroll: true }), 260);
  }
  function close() {
    if (!dlg!.open || closing) return;
    closing = true;
    const finish = () => {
      dlg!.close();
      closing = false;
    };
    if (reduce) return finish();
    dlg!.classList.add('closing');
    gsap.to(card, {
      y: origin.y * 0.2 + 24,
      x: origin.x * 0.2,
      scale: 0.92,
      opacity: 0,
      duration: 0.32,
      ease: 'power2.in',
      onComplete: () => {
        dlg!.classList.remove('closing');
        finish();
      },
    });
  }
  dlg.addEventListener('close', () => {
    getLenis()?.start();
    document.documentElement.classList.remove('cd-open');
    gsap.set(card, { clearProps: 'all' });
  });
  dlg.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  }); // Esc: animate out
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) close();
  }); // click on the blurred backdrop
  dlg.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', close));
  document.addEventListener('click', (e) => {
    const t = (e.target as Element).closest('[data-open-contact]');
    if (!t) return;
    e.preventDefault();
    open(t);
  });

  /* ---------- Validation ---------- */
  const EMAIL = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
  const field = (n: string) => form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement;
  const setErr = (el: HTMLInputElement | HTMLTextAreaElement, msg: string) => {
    const box = el.closest('.field');
    box?.classList.toggle('bad', !!msg);
    el.setAttribute('aria-invalid', String(!!msg));
    const small = box?.querySelector('.err');
    if (small) small.textContent = msg;
  };
  function validate() {
    const topic = field('topic'),
      name = field('name'),
      email = field('email');
    const checks: [HTMLInputElement | HTMLTextAreaElement, string][] = [
      [topic, topic.value.trim().length < 2 ? 'What is it about? A few words is enough.' : ''],
      [name, name.value.trim().length < 2 ? 'Please tell me your name.' : ''],
      [email, !EMAIL.test(email.value.trim()) ? 'That email doesn’t look right.' : ''],
      [message, message.value.trim().length < 10 ? 'A few more words, please (10+ characters).' : ''],
    ];
    checks.forEach(([el, msg]) => setErr(el, msg));
    const first = checks.find(([, m]) => m);
    if (first) {
      first[0].focus();
      if (!reduce)
        gsap.fromTo(first[0].closest('.field'), { x: -6 }, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    }
    return !first;
  }
  ['topic', 'name', 'email', 'message'].forEach((n) =>
    field(n).addEventListener('input', (e) => {
      const el = e.target as HTMLInputElement;
      if (el.closest('.field')?.classList.contains('bad')) setErr(el, '');
    }),
  );
  message.addEventListener('input', () => {
    count.textContent = `${message.value.length} / 1500`;
  });

  /* ---------- Status steps (a tiny pipeline) ---------- */
  const setStep = (name: string, state: 'run' | 'ok' | 'bad' | '') => {
    const li = steps.find((s) => s.dataset.step === name);
    if (li) li.className = state;
  };
  const wait = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));

  function resetForm() {
    form!.reset();
    count.textContent = '0 / 1500';
    steps.forEach((s) => (s.className = ''));
    form!.querySelectorAll('.field').forEach((f) => f.classList.remove('bad'));
    form!.querySelectorAll('.err').forEach((e) => (e.textContent = ''));
    done.hidden = true;
    form!.classList.remove('sent');
    send.disabled = false;
  }

  async function deliver(data: { topic: string; name: string; email: string; message: string }) {
    if (mode === 'post') {
      const res = await fetch(endpoint, {
        method: 'POST',
        credentials: 'omit',
        // FormSubmit rejects requests with no Referer; send the origin only, never the path.
        referrerPolicy: 'strict-origin',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `[Portfolio] ${data.topic}: ${data.name}`,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      // Some services answer 200 with { success: false } (e.g. a form that is not activated yet).
      const json = (await res.json().catch(() => ({}))) as { success?: boolean | string };
      if (json.success === false || json.success === 'false') throw new Error('rejected');
      return;
    }
    const subject = `[Portfolio] ${data.topic}: ${data.name}`;
    const body = `${data.message}\n\n${data.name}\n${data.email}`;
    location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (send.disabled) return;
    steps.forEach((s) => (s.className = ''));
    setStep('check', 'run');
    await wait(350);
    if (!validate()) {
      setStep('check', 'bad');
      return;
    }
    setStep('check', 'ok');

    const fd = new FormData(form);
    if (String(fd.get('website') || '').trim()) {
      showDone();
      return;
    } // bot: pretend success, send nothing
    if (Date.now() - lastSent < 30_000) {
      setStep('send', 'bad');
      setErr(message, 'Just sent one, give it 30 seconds.');
      return;
    }

    send.disabled = true;
    setStep('send', 'run');
    // Strip control characters (keeps tab and newline) before the text goes into an email or a POST body.
    const clean = (k: string, max: number) =>
      String(fd.get(k) || '')
        // eslint-disable-next-line no-control-regex
        .replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '')
        .trim()
        .slice(0, max);
    try {
      await wait(500);
      await deliver({
        topic: clean('topic', 80),
        name: clean('name', 80),
        email: clean('email', 120),
        message: clean('message', 1500),
      });
      lastSent = Date.now();
      setStep('send', 'ok');
      setStep('done', 'ok');
      await wait(450);
      showDone();
    } catch {
      setStep('send', 'bad');
      setErr(message, `Couldn't send right now. Please email me at ${to}.`);
      send.disabled = false;
    }
  });

  function showDone() {
    form!.classList.add('sent');
    done.hidden = false;
    if (reduce) return;
    const path = done.querySelectorAll<SVGPathElement | SVGCircleElement>('svg path, svg circle');
    path.forEach((p) => {
      const len = (p as SVGGeometryElement).getTotalLength();
      gsap.fromTo(
        p,
        { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out', delay: p.tagName === 'path' ? 0.35 : 0 },
      );
    });
    gsap.from(done.querySelectorAll('h3, p, button'), {
      y: 14,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'expo.out',
      delay: 0.3,
    });
  }
}

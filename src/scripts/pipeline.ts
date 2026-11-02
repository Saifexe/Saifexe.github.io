/**
 * Live pipeline simulation for the Ktebna card. Same behaviour and timings as v1:
 * the dot stops on each stage, becomes a spinner, turns green (passed) or red (blocked),
 * then moves on. Pods wait, roll out, or show "Blocked". The 2nd run of every 3 is blocked
 * at the security stage. Runs only while visible and the tab is active.
 */
import { gsap } from 'gsap';

const X0 = 150, XEND = 888, XS = [220, 330, 440, 550, 660, 770];
const MSGS = ['test · 297 tests passed', 'sonarcloud · quality gate passed', 'gitleaks · no leaks · trivy · 0 HIGH/CRITICAL', 'build · images saved as artifacts', 'image scan · clean', 'publish · pushed :SHA'];

export function startPipeline(root: HTMLElement, reduce: boolean) {
  const q = <T extends Element>(s: string) => root.querySelector<T>(s)!;
  const trail = q<SVGLineElement>('#trail'), packet = q<SVGCircleElement>('#packet'), spin = q<SVGGElement>('#spin');
  const statusEl = q<HTMLElement>('#live-status'), shaEl = q<SVGTSpanElement>('#live-sha'), logEl = q<HTMLElement>('#log');
  const sts = XS.map((_, i) => q<SVGGElement>(`#s${i}`));
  const pods = [0, 1, 2].map((i) => ({ g: q<SVGGElement>(`#p${i}`), t: q<SVGTextElement>(`#p${i}s`) }));

  // Fit the label chips around each stage name.
  const sizeChips = () => sts.forEach((g) => {
    const t = g.querySelector<SVGTextElement>('.nm')!, r = g.querySelector<SVGRectElement>('.chip')!, bb = t.getBBox();
    r.setAttribute('x', String(bb.x - 10)); r.setAttribute('y', String(bb.y - 4));
    r.setAttribute('width', String(bb.width + 20)); r.setAttribute('height', String(bb.height + 8));
  });
  sizeChips(); document.fonts?.ready.then(sizeChips);
  if (reduce) return;

  // textContent only: log lines never parse HTML.
  const log = (cls: string, mark: string, text: string) => {
    const d = document.createElement('div'); d.className = cls;
    const b = document.createElement('b'); b.textContent = mark;
    d.append(b, ' ' + text); logEl.appendChild(d);
    while (logEl.children.length > 3) logEl.firstChild!.remove();
  };
  const hex = () => Array.from(crypto.getRandomValues(new Uint8Array(4)), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, 7);
  const setStatus = (s: string) => { statusEl.className = 'live-status ' + s; statusEl.textContent = s; };
  const sleep = (ms: number) => new Promise<void>((r) => gsap.delayedCall(ms / 1000, r));
  const tween = (target: object, vars: gsap.TweenVars, ms: number) =>
    new Promise<void>((r) => gsap.to(target, { ...vars, duration: ms / 1000, ease: 'power1.inOut', onComplete: r }));
  const moveTo = (to: number, ms: number) =>
    Promise.all([tween([packet], { attr: { cx: to } }, ms), tween([trail], { attr: { x2: to } }, ms)]).then(() => undefined);
  const radius = (to: number, ms: number) => tween([packet], { attr: { r: to } }, ms);
  const setPod = (p: (typeof pods)[number], cls: string, txt: string) => { p.g.setAttribute('class', 'pod ' + cls); p.t.textContent = txt; };
  const setPods = (cls: string, txt: string) => pods.forEach((p) => setPod(p, cls, txt));

  let run = 0;
  async function cycle() {
    run++;
    const sha = hex(), blocked = run % 3 === 2;
    shaEl.textContent = sha;
    sts.forEach((n) => n.setAttribute('class', 'st'));
    setPods('idle', 'Waiting');
    trail.setAttribute('class', 'trail'); gsap.set(trail, { attr: { x2: X0 } });
    packet.setAttribute('class', 'packet'); gsap.set(packet, { attr: { r: 6, cx: X0 } }); packet.setAttribute('opacity', '1');
    setStatus('running');
    log('info', '→', `push ${sha} to main`);
    for (let i = 0; i < 6; i++) {
      await moveTo(XS[i], 650);
      sts[i].setAttribute('class', 'st run');
      spin.setAttribute('transform', `translate(${XS[i]} 90)`);
      await radius(0, 160);
      spin.setAttribute('opacity', '1');
      await sleep(900);
      spin.setAttribute('opacity', '0');
      const fail = blocked && i === 2;
      packet.setAttribute('class', 'packet ' + (fail ? 'bad' : 'ok'));
      sts[i].setAttribute('class', 'st ' + (fail ? 'bad' : 'ok'));
      await radius(8, 220);
      if (fail) {
        trail.setAttribute('class', 'trail bad');
        setStatus('blocked');
        log('bad', '✗', 'trivy · 1 CRITICAL CVE in a dependency');
        await sleep(1000);
        for (const p of pods) { setPod(p, 'blk', 'Blocked'); await sleep(180); }
        log('bad', '✗', 'release blocked · nothing deployed');
        await sleep(2800);
        await radius(0, 250); packet.setAttribute('opacity', '0');
        return;
      }
      log('ok', '✓', MSGS[i].replace('SHA', sha));
      await sleep(350);
      packet.setAttribute('class', 'packet');
      await radius(6, 180);
    }
    await moveTo(XEND, 500); await radius(0, 200); packet.setAttribute('opacity', '0');
    for (const p of pods) { setPod(p, 'roll', 'Creating'); await sleep(160); }
    await sleep(700);
    for (const p of pods) { setPod(p, 'fresh', 'Running'); await sleep(260); }
    setStatus('passed');
    log('ok', '✓', 'rollout complete · 3/3 pods Running');
    await sleep(2600);
  }

  let visible = false;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.3 }).observe(root);
  (async function loop() {
    for (;;) {
      if (visible && !document.hidden) await cycle();
      else await new Promise((r) => setTimeout(r, 400));
    }
  })();
}

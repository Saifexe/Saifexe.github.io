/**
 * Site-wide behaviour: smooth scrolling (Lenis) synced with GSAP ScrollTrigger,
 * reveals, split-text headings, counters, navigation, and small interactions.
 * Heavy pieces (pipeline timeline, Three.js hero) are code-split and loaded on demand.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;
const isHome = !!$('#top.hero');
const EASE = 'expo.out';

root.classList.add('motion-ready');

/* ---------------- Start position ----------------
   Home always opens at the top (shared links with #section stay clean),
   unless the visitor came back from a case study, in which case it returns to Work. */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
let returnTo: string | null = null;
try { returnTo = sessionStorage.getItem('returnTo'); sessionStorage.removeItem('returnTo'); } catch { /* storage blocked */ }
if (isHome && location.hash) history.replaceState(null, '', location.pathname + location.search);
scrollTo(0, 0);

/* ---------------- Smooth scroll ---------------- */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), wheelMultiplier: 0.95, touchMultiplier: 1.2 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------------- Progress bar ---------------- */
const bar = $('#progress');
if (bar) {
  gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
}

/* ---------------- Navigation ---------------- */
const burger = $('#burger');
const setMenu = (open: boolean) => {
  document.body.classList.toggle('menu-open', open);
  burger?.setAttribute('aria-expanded', String(open));
  burger?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
burger?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
addEventListener('keydown', (e) => { if (e.key === 'Escape') { setMenu(false); const m = $<HTMLDetailsElement>('.cv-menu'); if (m) m.open = false; } });
document.addEventListener('click', (e) => {
  const m = $<HTMLDetailsElement>('.cv-menu');
  if (m?.open && !m.contains(e.target as Node)) m.open = false;
});

function arrive(el: Element) {
  document.body.classList.remove('traveling');
  const label = $('[data-rule]', el);
  if (label && !reduce) gsap.fromTo(label, { '--rule': '0px' }, { '--rule': '44px', duration: 0.8, ease: EASE });
  const h = $('.sec-title h2, h2', el);
  // Only transform: opacity is owned by the reveal (clearing it would re-hide the title).
  if (h && !reduce) gsap.fromTo(h, { y: 16 }, { y: 0, duration: 0.9, ease: EASE, clearProps: 'transform' });
}
function travelTo(el: Element | null, instant = false) {
  if (!el) return;
  const navH = 62;
  const target = el.id === 'top' ? 0 : Math.max(0, el.getBoundingClientRect().top + scrollY - navH + 1);
  const dist = Math.abs(target - scrollY);
  if (!lenis || instant || dist < 4) { lenis ? lenis.scrollTo(target, { immediate: true, force: true }) : scrollTo(0, target); arrive(el); return; }
  document.body.classList.add('traveling');
  lenis.scrollTo(target, {
    duration: Math.min(1.6, Math.max(0.9, dist / 2600)),
    easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    onComplete: () => arrive(el),
  });
}
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]');
  if (!a || a.closest('[data-open-contact]')) return; // dialog triggers are handled by contact.ts
  const url = new URL(a.href, location.href);
  // Leaving a case study back to a home section: remember where to land.
  if (!isHome && url.pathname === '/' && url.hash) { try { sessionStorage.setItem('returnTo', url.hash.slice(1)); } catch { /* ignore */ } return; }
  if (!isHome || url.pathname !== location.pathname || !url.hash) return;
  e.preventDefault();
  setMenu(false);
  travelTo(document.getElementById(url.hash.slice(1)));
});

// Active link follows the section in view.
if (isHome) {
  const links = $$<HTMLAnchorElement>('.navlinks a[data-nav]');
  ['about', 'work', 'experience', 'toolbox', 'education', 'now', 'contact'].forEach((id) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    ScrollTrigger.create({
      trigger: sec, start: 'top 50%', end: 'bottom 50%',
      onToggle: (st) => { if (st.isActive) links.forEach((l) => l.classList.toggle('active', l.dataset.nav === id)); },
    });
  });
}

/* ---------------- Animations ---------------- */
function counters(scope: ParentNode = document) {
  $$<HTMLElement>('[data-count]', scope).forEach((el) => {
    const to = parseFloat(el.dataset.count!), dec = +(el.dataset.dec || 0), suf = el.dataset.suf || '';
    if (reduce) return;
    const o = { v: 0 };
    gsap.to(o, {
      v: to, duration: 1.4, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => { el.textContent = o.v.toFixed(dec) + suf; },
    });
    el.textContent = (0).toFixed(dec) + suf;
  });
}

function heroIntro() {
  const name = $('#hero-name');
  const tl = gsap.timeline({ defaults: { ease: EASE }, delay: 0.1 });
  if (name) {
    gsap.set(name, { opacity: 1 });
    const split = SplitText.create(name, { type: 'chars', mask: 'chars', charsClass: 'ch' });
    tl.from(split.chars, { yPercent: 110, rotate: 6, duration: 1.2, stagger: 0.035 }, 0.15);
  }
  const items = $$('[data-hero]');
  tl.fromTo(items, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.09 }, 0);
  // The underline draws itself under the name, like a pen stroke.
  const scribble = $<SVGPathElement>('#scribble');
  if (scribble) {
    const len = scribble.getTotalLength();
    gsap.set(scribble, { strokeDasharray: len, strokeDashoffset: len });
    tl.to(scribble, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0.9);
  }
  const heroNote = $('.hero [data-note]');
  if (heroNote) tl.from(heroNote, { opacity: 0, clipPath: 'inset(0 100% 0 0)', duration: 0.9, ease: 'power2.out' }, 1.6);
  const photo = $('#hero-photo .frame');
  if (photo) tl.from(photo, { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut' }, 0.25);

  // Scroll-out: hero content drifts up and fades as the next section arrives.
  const inner = $('.hero > .wrap');
  if (inner) gsap.to(inner, { yPercent: -8, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

function reveals() {
  // Split headings: lines rise out of a mask.
  $$('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines,words', mask: 'lines', linesClass: 'split-line', autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, { yPercent: 105, duration: 1.1, stagger: 0.08, ease: EASE, scrollTrigger: { trigger: el, start: 'top 88%', once: true } }),
    });
    el.style.opacity = '1';
  });
  // Rule beside each section label.
  $$('[data-rule]').forEach((el) =>
    gsap.fromTo(el, { '--rule': '0px' }, { '--rule': '44px', duration: 1, ease: EASE, scrollTrigger: { trigger: el, start: 'top 90%', once: true } }),
  );
  // Blocks fade and rise.
  $$('[data-reveal]').forEach((el) =>
    gsap.fromTo(el, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 1.1, ease: EASE, scrollTrigger: { trigger: el, start: 'top 90%', once: true } }),
  );
  // Groups: children cascade in.
  $$('[data-stagger]').forEach((el) => {
    gsap.set(el, { opacity: 1 });
    gsap.from(el.children, { opacity: 0, y: 24, duration: 0.9, ease: EASE, stagger: 0.07, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
  });
  // Handwritten notes are "written" left to right when they come into view.
  $$('[data-note]').filter((n) => !n.closest('.hero')).forEach((n) =>
    gsap.from(n, { opacity: 0, clipPath: 'inset(0 100% 0 0)', duration: 1, ease: 'power2.out', scrollTrigger: { trigger: n, start: 'top 88%', once: true } }),
  );
  // LeaveDesk diagram: boxes pop in, then lines draw.
  const arch = $('.arch svg');
  if (arch) {
    const tl = gsap.timeline({ scrollTrigger: { trigger: arch, start: 'top 80%', once: true } });
    tl.from($$('[data-arch]', arch), { opacity: 0, y: 12, duration: 0.6, stagger: 0.06, ease: 'back.out(1.6)' })
      .from($$('[data-arch-lines] path', arch), { opacity: 0, duration: 0.5, stagger: 0.03 }, '-=0.2');
  }
}

function languages() {
  const wrap = $('#langs');
  if (!wrap) return;
  const langs = $$('.lang', wrap);
  const tl = gsap.timeline({ paused: true });
  langs.forEach((l, k) => {
    const lv = $('.lv', l)!;
    const segs = $$('.meter i.on', l);
    const start = 0.2 + k * 0.22;
    const dots = { d: 0 };
    tl.call(() => { lv.textContent = 'loading'; lv.classList.add('wait'); }, [], 0);
    tl.to(dots, { d: 12, duration: segs.length * 0.47, ease: 'none', onUpdate: () => { lv.textContent = 'loading' + '...'.slice(0, Math.floor(dots.d) % 4); } }, start);
    segs.forEach((sg, i) => {
      const at = start + i * 0.47;
      tl.call(() => { segs.forEach((x) => x.classList.remove('head')); sg.classList.add('head'); }, [], at);
      tl.fromTo($('b', sg)!, { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: 'none' }, at);
      tl.fromTo($('u', sg)!, { xPercent: -100, opacity: 1 }, { xPercent: 100, duration: 0.45, ease: 'none', repeat: 0 }, at).set($('u', sg)!, { opacity: 0 });
    });
    tl.call(() => { segs.forEach((x) => x.classList.remove('head')); lv.textContent = lv.dataset.level!; lv.classList.remove('wait'); }, [], start + segs.length * 0.47 + 0.06);
    tl.from(lv, { opacity: 0, y: 4, duration: 0.4, ease: 'power2.out' }, start + segs.length * 0.47 + 0.06);
  });
  const reset = () => {
    tl.pause(0);
    langs.forEach((l) => { const lv = $('.lv', l)!; lv.textContent = 'loading'; lv.classList.add('wait'); $$('.meter b', l).forEach((b) => gsap.set(b, { scaleX: 0 })); });
  };
  reset();
  // Replays every time the section comes into view.
  ScrollTrigger.create({ trigger: wrap, start: 'top 80%', end: 'bottom 15%', onEnter: () => tl.restart(), onEnterBack: () => tl.restart(), onLeave: reset, onLeaveBack: reset });
}

function interactions() {
  if (!finePointer || reduce) return;
  // Magnetic buttons.
  $$('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); xTo((e.clientX - r.left - r.width / 2) * 0.25); yTo((e.clientY - r.top - r.height / 2) * 0.35); });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
  // Card spotlight and a gentle 3D tilt.
  $$('[data-tilt]').forEach((el) => {
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3.out' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3.out' });
    gsap.set(el, { transformPerspective: 1100 });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', `${px * 100}%`); el.style.setProperty('--my', `${py * 100}%`);
      rx((0.5 - py) * 4); ry((px - 0.5) * 5);
    });
    el.addEventListener('pointerleave', () => { rx(0); ry(0); });
  });
}

/* ---------------- Lightbox ---------------- */
const dlg = $<HTMLDialogElement>('#lightbox');
if (dlg) {
  const img = $<HTMLImageElement>('#lb-img', dlg)!, cap = $('#lb-cap', dlg)!;
  $$<HTMLButtonElement>('.shot, .fig').forEach((s) =>
    s.addEventListener('click', () => {
      img.src = s.dataset.full!; img.alt = s.dataset.cap || ''; cap.textContent = s.dataset.cap || '';
      img.classList.toggle('dark', !!s.dataset.dark);
      lenis?.stop(); dlg.showModal();
    }),
  );
  $('#lb-close', dlg)?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => lenis?.start());
}

/* ---------------- Copy email ---------------- */
$$<HTMLButtonElement>('[data-copy]').forEach((b) =>
  b.addEventListener('click', async () => {
    const label = $('[data-copy-label]', b) ?? b; // keep the icon, change only the word
    try { await navigator.clipboard.writeText(b.dataset.copy!); label.textContent = 'Copied'; b.classList.add('done'); }
    catch { label.textContent = 'Select it'; }
    setTimeout(() => { label.textContent = 'Copy'; b.classList.remove('done'); }, 1600);
  }),
);

/* ---------------- Media: play only while visible ---------------- */
$$<HTMLVideoElement>('video[data-autoplay]').forEach((v) => {
  if (reduce) { v.removeAttribute('autoplay'); v.pause(); return; }
  new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.2 }).observe(v);
});

/* ---------------- Contact dialog ---------------- */
if ($('#contact-dialog')) import('./contact').then((m) => m.initContact(() => lenis, reduce));

/* ---------------- Boot ---------------- */
counters();
if (!reduce) {
  if (isHome) heroIntro();
  else {
    // Case-study heroes. Pages without one (404) skip it, so GSAP doesn't warn about missing targets.
    const intro = $$('[data-hero]');
    if (intro.length) gsap.fromTo(intro, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: EASE });
  }
  reveals();
  languages();
  interactions();
}

// Return to the section the visitor came from (after layout settles).
if (isHome && returnTo) {
  const el = document.getElementById(returnTo);
  requestAnimationFrame(() => travelTo(el, true));
}

// The pipeline timeline loads when its card is near.
const live = $('#live');
if (live) {
  ScrollTrigger.create({
    trigger: live, start: 'top bottom+=200', once: true,
    onEnter: () => import('./pipeline').then((m) => m.startPipeline(live, reduce)),
  });
}

// The Three.js hero loads after first paint, only where it will run well.
const canvas = $<HTMLCanvasElement>('#hero-canvas');
if (canvas && !reduce) {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const ok = !conn?.saveData && (() => { try { return !!document.createElement('canvas').getContext('webgl2'); } catch { return false; } })();
  if (ok) {
    const boot = () => import('./hero-scene').then((m) => m.startHeroScene(canvas, $('#hero-photo')));
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    if (document.readyState === 'complete') (idle ? idle(boot, { timeout: 1200 }) : setTimeout(boot, 200));
    else addEventListener('load', () => (idle ? idle(boot, { timeout: 1200 }) : setTimeout(boot, 200)), { once: true });
  }
}

// Fonts change line breaks; re-measure once they arrive.
document.fonts?.ready.then(() => ScrollTrigger.refresh());

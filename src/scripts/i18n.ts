/**
 * English ⇄ French switch. The HTML ships in English; French is applied in place from the
 * dictionary in i18n/fr.ts, text node by text node, so markup, links and listeners stay intact.
 * Each swap remembers its English original, which is how switching back restores it.
 * A MutationObserver translates text that scripts write later (pipeline log, form errors, labels).
 */
import { fr as frDict, frPatterns, frScoped } from '../i18n/fr';

export type Lang = 'en' | 'fr';

const KEY = 'lang';
const DICT = new Map(Object.entries(frDict));
const ATTRS = ['aria-label', 'title', 'alt', 'placeholder', 'data-cap', 'data-level'];
// Never touch code, user input or anything that manages its own wording.
const SKIP = 'script, style, noscript, textarea, code, pre, [data-i18n-skip]';

type Pair = { en: string; fr: string };
const textMem = new WeakMap<Text, Pair>();
const attrMem = new WeakMap<Element, Map<string, Pair>>();

let current: Lang = 'en';
let titleEn = '';

export const getLang = (): Lang => current;

export function storedLang(): Lang {
  try {
    return localStorage.getItem(KEY) === 'fr' ? 'fr' : 'en';
  } catch {
    return 'en';
  }
}

/** French for one string, keeping its outer whitespace; null when there is nothing to change.
 *  `at` is the element the text sits in, for words whose French depends on where they appear. */
function toFr(raw: string, at?: Element | null): string | null {
  const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(raw)!;
  const core = m[2].replace(/\s+/g, ' ');
  if (!core) return null;
  let out = at ? frScoped.find((x) => x.en === core && at.closest(x.scope))?.fr : undefined;
  if (out === undefined) out = DICT.get(core);
  if (out === undefined) {
    for (const [re, rep] of frPatterns)
      if (re.test(core)) {
        out = core.replace(re, rep);
        break;
      }
  }
  if (out === undefined || out === core) return null;
  return m[1] + out + m[3];
}

function applyText(n: Text) {
  const mem = textMem.get(n);
  if (current === 'en') {
    if (mem && n.data === mem.fr) n.data = mem.en;
    return;
  }
  if (mem && n.data === mem.fr) return;
  const out = toFr(n.data, n.parentElement);
  if (out === null) return;
  textMem.set(n, { en: n.data, fr: out });
  n.data = out;
}

function applyAttr(el: Element, name: string) {
  const val = el.getAttribute(name);
  if (val === null) return;
  let mem = attrMem.get(el);
  const pair = mem?.get(name);
  if (current === 'en') {
    if (pair && val === pair.fr) el.setAttribute(name, pair.en);
    return;
  }
  if (pair && val === pair.fr) return;
  const out = toFr(val, el);
  if (out === null) return;
  if (!mem) attrMem.set(el, (mem = new Map()));
  mem.set(name, { en: val, fr: out });
  el.setAttribute(name, out);
}

function applyElement(el: Element) {
  for (const a of ATTRS) if (el.hasAttribute(a)) applyAttr(el, a);
}

/** Translate (or restore) everything under root. */
function walk(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    if (!root.parentElement?.closest(SKIP)) applyText(root as Text);
    return;
  }
  if (!(root instanceof Element) || root.closest(SKIP)) return;
  applyElement(root);
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n instanceof Element && n.matches(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  for (let n = tw.nextNode(); n; n = tw.nextNode()) {
    if (n.nodeType === Node.TEXT_NODE) applyText(n as Text);
    else applyElement(n as Element);
  }
}

/** Switch the whole page. Synchronous: call it while the page is covered. */
export function setLang(lang: Lang) {
  current = lang;
  document.documentElement.lang = lang;
  walk(document.body);
  document.title = lang === 'fr' ? (toFr(titleEn) ?? titleEn) : titleEn;
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* storage blocked: the choice lasts for this page only */
  }
}

/** Start watching for script-written text. Call once, before the first setLang. */
export function initI18n() {
  titleEn = document.title;
  new MutationObserver((records) => {
    if (current === 'en') return;
    for (const r of records) {
      if (r.type === 'characterData') walk(r.target);
      else if (r.type === 'attributes') {
        if (!(r.target as Element).closest(SKIP)) applyAttr(r.target as Element, r.attributeName!);
      } else r.addedNodes.forEach(walk);
    }
  }).observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ATTRS,
  });
}

# saifexe.github.io

Portfolio of **Saif Eddine Dahech**, Cloud & DevOps Engineer. _From commit to cluster._

Built with **Astro 7** (static), **GSAP** (ScrollTrigger + SplitText), **Lenis** smooth scrolling and a **Three.js** hero scene.
Deployed to GitHub Pages by a security-gated GitHub Actions pipeline.

## Run it

```bash
npm ci
npm run dev       # http://localhost:4321 (CSP is not applied in dev)
npm run build     # type-check + static build into dist/
npm run preview   # serve dist/ exactly as production, with the CSP
```

## Project layout

```
src/
├── data/            ← edit content here
│   ├── site.ts        name, links, CV links, hero text, facts, about, principles
│   ├── profile.ts     experience, toolbox, degrees, certifications, languages
│   └── tech.ts        technology → logo registry (logos live in public/tech/)
├── content/projects/  one .mdx file per project (card + optional case study)
├── components/        page sections; cs/ holds case-study building blocks
├── layouts/Base.astro SEO, Open Graph, JSON-LD, fonts
├── pages/             index, work/[slug] (case studies), 404
├── scripts/
│   ├── main.ts        Lenis + ScrollTrigger, reveals, split headings, nav, interactions
│   ├── pipeline.ts    the Ktebna pipeline simulation (lazy-loaded)
│   └── hero-scene.ts  Three.js "commit to cluster" scene (lazy-loaded)
└── styles/global.css  design tokens and all styles
```

## Common changes

| Change                         | Where                                                                                                                                                                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add a project                  | New file in `src/content/projects/`. Frontmatter only → a card. Add `caseStudy:` + an MDX body → also a page at `/work/<file-name>/`. The schema in `src/content.config.ts` fails the build if a field is wrong. |
| Add a logo                     | Put the official SVG in `public/tech/` and add one line in `src/data/tech.ts`. Every tag with that name gets it.                                                                                                 |
| Update CV links                | `src/data/site.ts` → `cv`                                                                                                                                                                                        |
| Colours, fonts                 | `:root` in `src/styles/global.css`                                                                                                                                                                               |
| Pipeline timing                | `src/scripts/pipeline.ts`                                                                                                                                                                                        |
| Hero scene density / speed     | constants at the top of `startHeroScene` in `src/scripts/hero-scene.ts`                                                                                                                                          |
| New case study page transition | add `.vt-<slug> { view-transition-name: cs-<slug>; }` in `global.css`                                                                                                                                            |

## Deploy

1. Create a public repo named **`Saifexe.github.io`** and push this folder to `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs: Gitleaks (full history) → `npm audit` → type-check + build → CSP check → deploy.

For a project site instead (`saifexe.github.io/portfolio`), set `base: '/portfolio'` in `astro.config.mjs`.

## Security

See [SECURITY.md](SECURITY.md). In short: static site, hashed CSP with no `unsafe-inline`, self-hosted fonts, zero third-party requests, SHA-pinned actions, least-privilege workflow token.

If you ever move to Cloudflare Pages or Netlify, add a `public/_headers` file to also get the headers GitHub Pages can't send:

```
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Content-Security-Policy: frame-ancestors 'none'
```

## Performance notes

- Images are converted to WebP at build time with responsive sizes (screenshots shrank 40–90%).
- Three.js (≈135 kB gzipped) loads only after the page is idle, only with WebGL2, never with _Save-Data_ or _reduced motion_, and its render loop stops when the hero is off screen or the tab is hidden.
- The pipeline script loads when its card approaches the viewport.
- Every animation is disabled for visitors with _prefers-reduced-motion_; content never depends on JavaScript to be visible (a CSS fallback reveals it after 2.5 s).

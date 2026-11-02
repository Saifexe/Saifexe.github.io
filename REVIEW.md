# Code review: saifexe.github.io (2 November 2026)

Scope: a code cleanup, not a redesign. Design, wording and section order are unchanged. The only visible change is
the filled-button blue, approved for accessibility.

**Stack:** Astro 7 (static output), TypeScript, MDX content collections, GSAP (ScrollTrigger, SplitText), Lenis,
Three.js (lazy-loaded hero), self-hosted fonts. Deploys to GitHub Pages through `.github/workflows/deploy.yml`:
Gitleaks, npm audit, lint, format check, type-check and build, a CSP check, then deploy.

## Scores

| Area                        | Before | After | Notes                                                                                   |
| --------------------------- | :----: | :---: | --------------------------------------------------------------------------------------- |
| Clean code                  |   7    |   9   | Dead code, unused dependency and duplicate asset removed; ESLint + Prettier; LF endings |
| Performance                 |   7    |   8   | Lower blocking time, WebP poster, phone-sized figures; mobile LCP still JS-gated        |
| Security                    |   9    |   9   | Already strong; audit at 0 including the new dev tooling                                |
| Accessibility               |   8    |  10   | Button contrast fixed: Lighthouse 96 → 100                                              |
| SEO and sharing             |   9    |  10   | Apple touch icon added                                                                  |
| Responsiveness              |   9    |   9   | No horizontal scroll at 390/768/1024/1440 px                                            |
| Maintainability/scalability |   9    |   9   | Already data-driven (`src/data/*`, one MDX file per project); CI now enforces style     |
| Correctness                 |   8    |   9   | Console warnings, build warning and nav offset fixed                                    |

## Lighthouse

Home on mobile was measured 3 times on each build under the same conditions (Astro preview); the table shows the
median. The other rows are single runs.

| Page / mode     | Before (Perf / A11y / BP / SEO) | After (Perf / A11y / BP / SEO) |
| --------------- | :-----------------------------: | :----------------------------: |
| Home, mobile    |       83 / 96 / 100 / 100       |      84 / 100 / 100 / 100      |
| Home, desktop   |      100 / 96 / 100 / 100       |     100 / 100 / 100 / 100      |
| Ktebna, mobile  |      92 / 100 / 100 / 100       |      94 / 100 / 100 / 100      |
| Ktebna, desktop |      100 / 100 / 100 / 100      |     100 / 100 / 100 / 100      |

Home on mobile: total blocking time went from ~190–360 ms to ~160–180 ms, and the score is now stable (84 in all three
runs, against 80–84 before). It is still below 90; see "Left as is" below.

## What was fixed (one commit each)

| Severity | Fix                                                                                                          | Commit                                  |
| -------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| High     | White-on-blue buttons and skip link: 3.84:1 → 4.73:1 (`--accent-fill: #2f6af0`); the accent itself unchanged | `e5f2d4d`                               |
| Medium   | Build warning: Shiki syntax highlighting conflicts with the CSP; turned off (no code blocks in content)      | `2e078f7`                               |
| Medium   | 404 page logged 3× "GSAP target not found" (hero animation ran with an empty list)                           | `fce202c`                               |
| Medium   | No linter or formatter: added ESLint (JS, TS, Astro) + Prettier, applied them, enforced in CI                | `5c431f5` `8cbd5ff` `2e4c0ab` `1911346` |
| Medium   | Main script split every heading at load; now just before each heading scrolls in (same animation)            | `42fc354`                               |
| Low      | Menu links landed 4 px under the nav (hard-coded 62 px vs 66 px bar); now reads the real height              | `18bb03b`                               |
| Low      | Unused `@fontsource-variable/geist` dependency                                                               | `adc4132`                               |
| Low      | Duplicate `src/assets/img/debugging-poster.jpg` (never imported)                                             | `e0ea60e`                               |
| Low      | Video poster JPEG → WebP (24 KB → 17 KB)                                                                     | `ce0462b`                               |
| Low      | Case-study figures had no phone-sized version (added 680w)                                                   | `8cf398c`                               |
| Low      | Dead "corner" markup and CSS, unused `.sr-only`, duplicated `.h4` / `.note-hero` / `.portrait` rules         | `9b272b8`                               |
| Low      | No Apple touch icon                                                                                          | `a01e06a`                               |
| Low      | Mixed LF/CRLF line endings; added `.gitattributes` and `.editorconfig`                                       | `d46eb75`                               |
| Low      | Dev-only `minimatch` ReDoS advisory pulled in by ESLint; overridden to `^11.0.1`, audit back to 0            | `5c431f5`                               |

### Tried and reverted

- **Inlining the stylesheet** (`f9550db`, reverted in `389fab0`): Lighthouse estimated 1.19 s saved, but an A/B test
  showed a lower mobile score (82 vs 84–86). The largest element waits on JavaScript, not on CSS.

### Caught during verification

- **Prettier on MDX** broke the "Problems I solved" grid on the Ktebna page (the page grew by 1,414 px). In MDX, a line
  break inside a component creates a `<p>` wrapper, which nests inside the component's own `<p>`. MDX is now excluded
  from Prettier (`.prettierignore`).

## Verification

- `npm run build`: 0 errors, 0 warnings. `npm run lint` and `npm run format:check`: clean. `npm audit`: 0 vulnerabilities.
- Browser console: clean on `/`, `/work/ktebna/`, `/work/leavedesk/` and `/404/` (before: 3 GSAP warnings on 404).
- **Looks identical:** the baseline and the final build were both rendered and compared.
  - The visible text of all 4 pages is identical.
  - Pixel diffs of full-page screenshots at 1440 px and 390 px (animations at rest) show only the intended changes: the
    4 filled buttons, scattered single pixels in the WebP video poster, and on phones the 680w figures with a ≤1 px
    text offset next to them.
- **Links:**
  - all 100 internal references resolve;
  - GitHub and GitLab return 200;
  - both CV links download PDFs (`Saif_Eddine_Dahech_ENG.pdf`, `Saif_Eddine_Dahech_CV_FR.pdf`).

## Left as is, and why

| Item                                    | Why                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home mobile Performance 84 (< 90)       | The largest element is the hero paragraph, which stays at `opacity: 0` until the GSAP reveal plays, so LCP waits for the main script. Reaching 90+ means showing the hero text before the animation (a behaviour change, not approved). The 3D hero stays on phones as requested; it already uses fewer particles and a lower pixel ratio on small and low-power screens. |
| `X-Frame-Options` / `frame-ancestors`   | GitHub Pages cannot send HTTP headers, and these do not work in a `<meta>` CSP. The CSP itself (hashed, no `unsafe-inline`) and `Referrer-Policy` are set via `<meta>`.                                                                                                                                                                                                   |
| LinkedIn link                           | LinkedIn answers automated requests with HTTP 999, so it cannot be checked by a script. Click it once by hand.                                                                                                                                                                                                                                                            |
| `https://saifexe.github.io` returns 404 | The site is not deployed yet. The canonical URL, Open Graph URLs and sitemap already point there. Push to the `Saifexe.github.io` repo to make them live.                                                                                                                                                                                                                 |
| TypeScript 7 available                  | 6.0.3 → 7.x is a major upgrade; it was not part of this cleanup.                                                                                                                                                                                                                                                                                                          |

# Security

## Reporting
Found a problem? Email saif.eddine.dahech10@gmail.com. Please don't open a public issue for security reports.

## What protects this site
- **Static only.** No server, no database, no forms, no cookies, no tracking, no third-party requests.
- **Content Security Policy** on every page (meta tag, generated at build time). Scripts and styles are allowed by SHA-256 hash only; no `unsafe-inline`, no `unsafe-eval`. Fonts are self-hosted, so the policy can stay `'self'`.
- **Pipeline gates** (`.github/workflows/deploy.yml`): Gitleaks scans the full git history; `npm audit` fails the build on high or critical vulnerabilities; the build fails if any page ships without a CSP. Nothing deploys unless every job passes.
- **Supply chain:** exact lockfile installs with install scripts disabled; GitHub Actions pinned to commit SHAs; Dependabot updates both npm packages and actions weekly; a weekly scheduled run re-audits dependencies.
- **Least privilege:** the workflow token is read-only; only the deploy job can write to Pages.
- **Links:** external links use `rel="noopener noreferrer"`.

## Known limits
GitHub Pages cannot send custom HTTP headers, so `frame-ancestors`, HSTS preload and `Permissions-Policy` can't be set here. Moving to Cloudflare Pages or Netlify would allow a `_headers` file with those headers (see README).

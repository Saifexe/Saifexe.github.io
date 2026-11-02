// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import contact from './contact.config.mjs';

// If a form endpoint is configured, allow exactly that origin and nothing else.
const formOrigin = contact.endpoint ? new URL(contact.endpoint).origin : '';

// GitHub Pages user site: https://saifexe.github.io (repo "Saifexe.github.io").
// For a project site (https://saifexe.github.io/portfolio) set base: '/portfolio'.
export default defineConfig({
  site: 'https://saifexe.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  // No code blocks in the content, and Shiki's inline styles would break the CSP.
  markdown: { syntaxHighlight: false },
  build: { format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  security: {
    // Astro hashes every script and style it emits and writes a CSP <meta> tag.
    // GitHub Pages cannot send HTTP headers, so this meta tag is the policy.
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "media-src 'self'",
        `connect-src 'self'${formOrigin ? ' ' + formOrigin : ''}`,
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        "frame-src 'none'",
        "worker-src 'none'",
        "manifest-src 'self'",
        'upgrade-insecure-requests',
      ],
    },
  },
  vite: {
    build: { chunkSizeWarningLimit: 700, cssTarget: ['chrome111', 'edge111', 'firefox113', 'safari16.4'] },
  },
});

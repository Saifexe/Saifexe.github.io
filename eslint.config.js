// ESLint flat config: recommended JS + TypeScript rules, and Astro components.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // `_`-prefixed names are intentionally unused.
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
  {
    // TypeScript resolves globals such as ImageMetadata; the JS-only rule gives false positives here.
    files: ['**/*.ts', '**/*.astro'],
    rules: { 'no-undef': 'off' },
  },
];

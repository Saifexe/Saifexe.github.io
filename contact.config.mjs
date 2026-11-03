/**
 * Contact form delivery.
 *
 * endpoint: '' (default) → "Send" opens the visitor's email app with the message prefilled (mailto).
 *   No third party, nothing to configure, works on GitHub Pages as is.
 *
 * endpoint: 'https://formspree.io/f/xxxxxxx' → the form posts directly from the page (JSON, no cookies).
 *   Create a free form at formspree.io (or any service accepting a JSON POST), paste its URL here.
 *   astro.config.mjs adds exactly this origin to the CSP connect-src; nothing else is allowed.
 */
export default {
  // Formspree form "Portfolio", delivering to `to`. The URL is public by design (it ships in the page).
  endpoint: 'https://formspree.io/f/xbggqrww',
  to: 'saif.eddine.dahech10@gmail.com',
};

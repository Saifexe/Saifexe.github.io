/**
 * Contact form delivery.
 *
 * endpoints: services tried in order. When one fails or times out, the next one is tried; when all
 *   fail, the next "Send" opens the visitor's email app with the message prefilled (mailto).
 *   An empty list means mailto only: no third party, nothing to configure.
 *   astro.config.mjs adds exactly these origins to the CSP connect-src; nothing else is allowed.
 *   The URLs are public by design: they ship in the page.
 */
export default {
  endpoints: [
    // FormSubmit (primary): its "table" email layout is the nicest. Already activated for `to`.
    'https://formsubmit.co/ajax/saif.eddine.dahech10@gmail.com',
    // Formspree form "Portfolio" (backup).
    'https://formspree.io/f/xbggqrww',
  ],
  to: 'saif.eddine.dahech10@gmail.com',
};

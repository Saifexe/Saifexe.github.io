/** Escape HTML, then turn *word* into the blue italic accent. Safe for set:html. */
const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ESC[c]);
export const hl = (s: string) => escapeHtml(s).replace(/\*([^*]+)\*/g, '<em class="hl">$1</em>');
export const plain = (s: string) => s.replace(/\*/g, '');

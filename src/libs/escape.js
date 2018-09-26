
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

export const escapeHtml = (string) =>
  String(string).replace(/[&<>"'`=\/]/g, (s) => entityMap[s]);
const entityMap :object = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

export const escapeHtml = (str :string) :string =>
  String(str).replace(/[&<>"'`=\/]/g, (s) => entityMap[s]);
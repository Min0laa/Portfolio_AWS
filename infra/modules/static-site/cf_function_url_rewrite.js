// CloudFront Function: append .html to extensionless URLs
// This enables clean URLs: /parcours → /parcours.html
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Already has an extension or is root → pass through
  if (uri === '/' || uri.includes('.')) {
    return request;
  }

  // Trailing slash → directory index (e.g. /parcours/ → /parcours/index.html)
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
    return request;
  }

  // Extensionless path → append .html
  request.uri = uri + '.html';
  return request;
}

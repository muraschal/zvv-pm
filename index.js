/**
 * ZVV Projektmanagement - Einfacher Server
 * 
 * Dieser Server dient nur dazu, die statischen Dateien zu servieren.
 * In einer Produktionsumgebung würde man einen vollwertigen Webserver wie Nginx verwenden.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME-Typen für verschiedene Dateitypen
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject'
};

// Server erstellen
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // URL normalisieren
  let url = req.url;
  
  // Wenn die URL mit einem Slash endet oder leer ist, index.html servieren
  if (url === '/' || url === '') {
    url = '/index.html';
  }
  
  // Dateipfad erstellen
  const filePath = path.join(PUBLIC_DIR, url);
  
  // Prüfen, ob die Datei existiert
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Datei nicht gefunden
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    
    // Datei lesen und senden
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      
      // MIME-Typ bestimmen
      const ext = path.extname(filePath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      // Header setzen und Datei senden
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

// Server starten
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
  console.log(`Drücken Sie Ctrl+C, um den Server zu beenden`);
}); 
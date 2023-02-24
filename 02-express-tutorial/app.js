const http = require('http');

const { readFileSync } = require('fs');

const homepageContent = readFileSync('./navbar-app/index.html');
const homepageStyles = readFileSync('./navbar-app/styles.css');
const homepageLogo = readFileSync('./navbar-app/logo.svg');
const homepageJs = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homepageContent);
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homepageStyles);
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homepageLogo);
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homepageJs);
  } else if (url === '/contact') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Welcome to my Contact Page</h1>');
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Welcome to my About Page</h1>');
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page not found</h1>');
  }
  res.end();
});

server.listen(5000);

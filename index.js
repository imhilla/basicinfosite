import { createServer } from 'http';
import url from 'url';
import { readFile } from 'fs';

const port = 8080;
const hostname = 'localhost';

const server = createServer((req, res) => {
  const q = url.parse(req.url, true)
  let filename = '';
  if (q.pathname == '/contact-me') {
    filename = 'contact-me.html';
  } else if (q.pathname == '/') {
    filename = 'index.html';
  } else if (q.pathname == '/about') {
    filename = 'about.html'
  } else {
    filename = '404.html'
  }

  readFile(filename, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

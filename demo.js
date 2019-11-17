const path = require('path');

const express = require('express');
const livereload = require('livereload');

const { renderHtml } = require('./render');

const app = express();
const port = 3000;
const livereloadPort = 3001;

const lrserver = livereload.createServer({
  port: livereloadPort,
  exts: ['md', 'css', 'hb'],
  applyCSSLive: false,
});
lrserver.watch(__dirname + '/src');

app.get('/', (req, res) => {
  renderHtml({ livereloadPort })
    .then(html => {
      res.send(html);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end(':(');
    });
});

app.listen(port, () => console.log(`CV demo listening on port ${port}`));

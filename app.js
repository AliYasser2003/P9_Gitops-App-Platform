const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from GitOps Project 9");
});

server.listen(80);

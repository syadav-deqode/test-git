const http = require('http');

const port = 5000;

const host = 'localhost';

const server = http.createServer((req, res) => {
  res.write("Hello World!")
  res.end()
})

server.listen(port, host, () => console.log(`Server running at the http://${host}:${port}`))
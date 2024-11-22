const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});

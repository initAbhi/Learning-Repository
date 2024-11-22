// Creating a calculator
const http = require("http");
const handleReq = require("./handleReq")
const port = 3000;

let server = http.createServer(handleReq);

server.listen(port, () => {
  console.log(`Your server is loaded on http://localhost:${port}`);
});

const http = require("http");
const requestHandler = require("./userinput");

const server = http.createServer(requestHandler);

server.listen(3000);

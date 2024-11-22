const http = require("http");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("Home page");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("about page");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("hello world");
});

server.listen(3000);

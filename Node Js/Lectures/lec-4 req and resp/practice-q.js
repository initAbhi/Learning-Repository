const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<div style="background-color: grey; height: 40px; display:flex; gap: 30px; justify-content: end; " class="navbar">'
    );
    res.write('<a href="/home">home</a>');
    res.write('<a href="/about">about</a>');
    res.write('<a href="/help">help</a>');
    return res.end();
  } else if (req.url == "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is your home page</h1>");
    return res.end();
  } else if (req.url == "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is your about page</h1>");
    return res.end();
  } else if (req.url == "/help") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is your help page</h1>");
    return res.end();
  }
});

server.listen(3000);

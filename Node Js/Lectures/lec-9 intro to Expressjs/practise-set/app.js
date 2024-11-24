const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`First middleware`, req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log(`second middleware`, req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log(`Third middleware`, req.method, req.url);
  // res.send("<p>Hello</p>")
  next();
});

app.get("/", (req, res, next) => {
  console.log("first ger middle ware");

  res.send(
    '<h1> Home page</h1> <p>go to contact us - <a href="/contact-us">contact us</a>'
  );
});

app.get("/contact-us", (req, res, next) => {
  res.send(`
        <form action="/contact-us" method="POST">
    <input type="text" placeholder="enter your name">
    <input type="text" placeholder="enter your name">
    <button type="submit">Submit</button>
</form>
        `);
  next();
});

app.post("/contact-us", (req, res, next) => {
  console.log("handled post req");
  res.send("<h1>We will contact you shortly</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`your server is running at http://localhost:${port}`);
});

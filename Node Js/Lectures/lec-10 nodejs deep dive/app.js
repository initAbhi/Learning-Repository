const express = require("express")
const bodyParser = require("body-parser")
const port = 3000;

const app = express()

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

  app.use(bodyParser.urlencoded())
  
  app.get("/contact-us", (req, res, next) => {
    res.send(`
          <form action="/contact-us" method="POST">
      <input name="name" type="text" placeholder="enter your name">
      <input name="email" type="text" placeholder="enter your email">
      <button type="submit">Submit</button>
  </form>
          `);
    next();
  });
  

  app.post("/contact-us", (req, res, next) => {
    console.log("handled post req", req.body);

    res.send("<h1>We will contact you shortly</h1>");
  });
  


app.listen(port, () => {
    console.log(`Your server is running at - http://localhost:3000`);
})
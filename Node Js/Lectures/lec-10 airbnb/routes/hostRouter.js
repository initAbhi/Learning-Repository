//External module
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  res.send(`
          <form action="/host/add-home" method="Post">
      <input type="text" name="houseName" placeholder="enter your house name">
      <button type="submit">Submit</button>
  </form>
          `);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);

  res.send(`
          <h1>Home added</h1>
  <a href="/">Go to home</a>
          `);
});

module.exports = hostRouter;

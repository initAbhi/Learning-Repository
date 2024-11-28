//External module
const express = require("express");
const {homes} = require("./hostRouter")
const userRouter = express.Router();
const path = require("path")
const rootDir = require("../utils/pathUtil")


userRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method, homes);
    res.render('home', {homes: homes,pageTitle: "Home",tab:"home"})
  });

module.exports = userRouter;
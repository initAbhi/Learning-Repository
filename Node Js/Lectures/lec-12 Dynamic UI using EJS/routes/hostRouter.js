//External module
const express = require("express");
const hostRouter = express.Router();
const path = require("path")
const rootDir = require("../utils/pathUtil")

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome',{pageTitle: 'Add Home',tab: "addHome"});
});

const homes = [];
hostRouter.post("/add-home", (req, res, next) => {
  // console.log(req.body);
  homes.push(req.body)
  res.render('homeAdded', {pageTitle: "Home Added", tab: "homeAdded"});
  console.log(homes)
});

exports.hostRouter = hostRouter;
exports.homes = homes;
const express = require("express")
const contact = express.Router()
const path = require("path")
const dirName = require("../utils/path")

contact.get("/contact-us", (req, res, next) => {
    console.log(path.join(dirName, "views", "contactUs.html"))
    res.sendFile(path.join(dirName, "views", "contactUs.html"));
  });
  
  contact.post("/contact-us", (req, res, next) => {
    console.log("handled post req",req.body);
    res.sendFile(path.join(dirName, "views", "feedback.html"));
  });

module.exports = contact
//External module
const express = require("express");
const hostRouter = express.Router();
const homesController = require("../controller/homes");

hostRouter.get("/add-home", homesController.getAddHome);

hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;

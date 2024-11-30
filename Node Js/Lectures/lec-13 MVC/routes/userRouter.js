//External module
const express = require("express");
const {homes} = require("./hostRouter")
const userRouter = express.Router();
const path = require("path")
const rootDir = require("../utils/pathUtil")
const homesController = require("../controller/homes");



userRouter.get("/",homesController.getHomes);

module.exports = userRouter;
//External module
const express = require("express");
const { homes } = require("./hostRouter");
const userRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");
const storeController = require("../controller/storeController");

userRouter.get("/", storeController.getHomes);
userRouter.get("/store/bookings", storeController.getBookings);

module.exports = userRouter;

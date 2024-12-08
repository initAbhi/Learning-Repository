//External module
const express = require("express");
const { homes } = require("./hostRouter");
const userRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtil");
const storeController = require("../controller/storeController");

userRouter.get("/", storeController.getIndex);
userRouter.get("/homeList", storeController.getHomes);
userRouter.get("/store/bookings", storeController.getBookings);
userRouter.get("/favourites", storeController.getFavouriteList);


userRouter.get("/homes/:homeId", storeController.getHomeDetails)
userRouter.post("/favourites", storeController.addToFavourites);


module.exports = userRouter;

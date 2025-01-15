const express = require("express");
const userController = require("../controller/userController.js");
const { authentication } = require("../middlewares/authentication.js");
const router = express.Router();
authentication;

router
  .route("/")
  .get(authentication, userController.getUsers)
  .post(userController.addUser);
router
  .route("/login")
  .get(userController.getLoginPage)
  .post(userController.login);
router.route("/logout").get(userController.logout)

module.exports = router;

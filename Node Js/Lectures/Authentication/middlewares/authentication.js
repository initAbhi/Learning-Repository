const { User } = require("../models/User");

const authentication = async (req, res, next) => {
  const cookie = req.cookies;
  if (cookie && cookie.id) {
    let { email } = cookie.id;
    let isAuthenticated = await User.findOne({ email });
    console.log("isa", isAuthenticated);
    if (isAuthenticated) {
      next();
    } else {
      res.render("notAuthenticated", { message: "wrong cookies" });
    }
  } else {
    res.render("notAuthenticated", {
      message: "no cookies",
    });
  }
};

module.exports = { authentication };


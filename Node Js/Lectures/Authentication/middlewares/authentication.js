const { User } = require("../models/User");

const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const setUser = (user) => {
  return jwt.sign(
    {
      email: user.email,
      password: user.password,
    },
    secret
  );
};

const verifyUser = (cookie) => {
    return jwt.verify(cookie,secret)
}

const authentication = async (req, res, next) => {
  const cookie = req.cookies;
  if (cookie && cookie.id) {
    // let { email } = cookie.id;
    // let isAuthenticated = await User.findOne({ email });
    // console.log("isa", isAuthenticated);
    const isAuthenticated = jwt.verify(cookie.id, secret);
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

module.exports = { authentication, setUser,verifyUser };

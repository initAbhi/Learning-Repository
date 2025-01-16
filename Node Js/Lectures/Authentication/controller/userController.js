const { setUser,verifyUser } = require("../middlewares/authentication.js");
const { User } = require("../models/User.js");

const secret = process.env.JWT_SECRET;

const getUsers = async (req, res, next) => {
  let {email} = verifyUser(req.cookies.id)
  let users = await User.find({});
  res.render("home", { username: email, users });
};

const addUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const isAlreadyPresent = await User.findOne({ email });
  console.log(isAlreadyPresent);
  if (isAlreadyPresent) {
    res.send(
      "what the heck bro? your email is already registered, you just need to login"
    );
  } else {
    // const newUser = new User(username, email, password)
    // await newUser.save();
    const newUser = await User.create({ username, email, password });
    res.send("submitted");
  }
};

const getLoginPage = (req, res, next) => {
  res.render("login");
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  let userExists = await User.findOne({ email, password });
  if (!userExists) {
    res.send("wrong credentials");
  } else {
    const token = setUser(userExists)
    res.cookie("id", token);
    res.redirect("/");
  }
};

const logout = async (req, res, next) => {
  res.clearCookie('id');
  res.redirect('/login')
}

module.exports = { getUsers, addUser, login, getLoginPage,logout};

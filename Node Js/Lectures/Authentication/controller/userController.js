const { User } = require("../models/User.js");

const getUsers = async (req, res, next) => {
  let users = await User.find({});
  let {id} = req.cookies
  res.render("home", { username: id.username, users });
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
    res.cookie("id", userExists);
    // res.send(`logged in as ${userExists.username}`);
    res.redirect("/");
  }
};

const logout = async (req, res, next) => {
  res.clearCookie('id');
  res.redirect('/login')
}

module.exports = { getUsers, addUser, login, getLoginPage,logout};

const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;


const connectDb = async () => {
  await mongoose.connect(uri);
  console.log("Connected to db 👍")
};


module.exports = {connectDb };

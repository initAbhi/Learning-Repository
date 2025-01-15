const express = require("express");
// const { connectDb } = require("./utils/dbConnection");
require("dotenv").config();
const {getdb, connectDb} = require("./utils/dbConnection.js");

const app = express();
const PORT = process.env.PORT;
    
let db;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
db = getdb;
db.collection("test").findOne({})



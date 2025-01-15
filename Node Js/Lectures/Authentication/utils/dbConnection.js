const mongodb = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const client = new mongodb.MongoClient("mongodb://localhost:27017/");
// console.log(uri)
let db;

const connectDb = async () => {
  await client.connect();
  db = client.db("test");
  console.log("Connected to MongoDB - ", db);
};
const getdb = () =>{
    if (!db) {
        console.log("connection not established");
    }
    return db;
}

connectDb();
// let a = getdb();
// console.log(db);
// console.log("a - ", a);
// module.exports = { getdb, connectDb };

const mongodb = require("mongodb");

const URL =
  "mongodb+srv://airbnb:airbnb123@initabhi.om73k.mongodb.net/?retryWrites=true&w=majority&appName=initAbhi";

let _db;
const createConnection = async () => {
  const client = new mongodb.MongoClient(URL);
  _db = client.db("airbnb");
};

const getDb = () => {    
      if (!_db) {
          console.log("connection not established");
      }
    return _db;
}

exports.getDb = getDb;
exports.createConnection = createConnection;






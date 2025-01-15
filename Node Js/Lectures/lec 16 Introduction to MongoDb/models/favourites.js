const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("body-parser");
const { getDb } = require("../utils/databaseUtil");

module.exports = class Favourites {
  static saveToFavourites(id) {

    const db = getDb();
    Favourites.fetchFavourites().then((homes) => {
      homes = homes.map(home => home.id)
      if (homes.includes(id)) {
        console.log("favourites.js : id already exists");
      } else {
        return db.collection('favourites').insertOne({id: id})
      }
    });
  }

  static fetchFavourites() {
   const db = getDb();
   return db.collection('favourites').find().toArray();
  }

  static findByIdInFavs(homeId, callback) {
    this.fetchFavourites((homes) => {
      const homeFound = homes.find((home) => home._id === homeId);
      callback(homeFound);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home._id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(delHomeId, callback) {
    const db = getDb();
      return db
            .collection("favourites")
            .deleteOne({ id: delHomeId });
  }

  static fetchAll() {
    const db = getDb();
    // db.collection('homes').find().toArray().then(res => console.log(res))
    return db.collection("homes").find().toArray();
  }
};

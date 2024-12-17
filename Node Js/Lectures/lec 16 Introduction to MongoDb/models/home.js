const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("body-parser");
const Favourites = require("./favourites");
const {getDb} = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photo, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photo;
    this.description = description;
    this.id = id;
  }

  save() {
    const db = getDb()
    return db.collection('homes').insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    // console.log("fectch all - ",db.collection('homes').find().toArray)
     return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db.collection('homes').findOne({ _id: homeId });
  }

  static deleteById(homeId) {}
  saveToFavourites() {}

  static fetchFavourites(callback) {}

  static findByIdInFavs(homeId, callback) {}
};

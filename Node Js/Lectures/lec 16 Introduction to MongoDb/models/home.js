const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("body-parser");
const Favourites = require("./favourites");
const { getDb } = require("../utils/databaseUtil");
const { ObjectId } = require("mongodb");

module.exports = class Home {
  constructor(houseName, price, location, rating, photo, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photo;
    this.description = description;
    if (_id) {
      this.id = _id;
    }
  }

  save() {
    const db = getDb();
    let updatedHome = {
      houseName: this.houseName,
      price: this.price,
      location: this.location,
      rating: this.rating,
      photoUrl: this.photoUrl,
      description: this.description
    }
    if (this.id) {
      db.collection("homes").updateOne({_id:new ObjectId(String(this.id))},{$set: updatedHome})
    } else {
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDb();
    // db.collection('homes').find().toArray().then(res => console.log(res))
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
  saveToFavourites() {}

  static fetchFavourites(callback) {}

  static findByIdInFavs(homeId, callback) {}
};

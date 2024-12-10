const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("body-parser");

module.exports = class Home {
  constructor(houseName, price, location, rating, photo,id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photo;
    this.id = id? id : Math.random().toString();
  }

  save() {
    Home.fetchAll(homes => {
        homes.push(this);
        let dataPath = path.join(rootDir, "data", "homes.json");
        fs.writeFile(dataPath, JSON.stringify(homes), (err) => {
        });
    })  
  }

  static fetchAll(callback) {
    let dataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(dataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
  
  static findById(homeId, callback){
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId)
      callback(homeFound)
    })
  }

  saveToFavourites() {
    Home.fetchFavourites(homes => {
        homes.push(this);
        let dataPath = path.join(rootDir, "data", "Favourites.json");
        fs.writeFile(dataPath, JSON.stringify(homes), (err) => {
        });
    })
  }

  static fetchFavourites(callback) {
    let dataPath = path.join(rootDir, "data", "Favourites.json");
    fs.readFile(dataPath, (err, data) => {
        
        callback(!err ? JSON.parse(data) : []);
    });
  }
};

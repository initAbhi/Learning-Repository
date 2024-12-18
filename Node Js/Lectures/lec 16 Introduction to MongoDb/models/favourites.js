const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("body-parser");

module.exports = class Favourites {
  static saveToFavourites(id) {
    Favourites.fetchFavourites((homes) => {
      if (homes.includes(id)) {
        console.log("favourites.js : id already exists");
      } else {
        homes.push(id);
        let dataPath = path.join(rootDir, "data", "Favourites.json");
        fs.writeFile(dataPath, JSON.stringify(homes), (err) => {});
      }
    });
  }

  static fetchFavourites(callback) {
    let dataPath = path.join(rootDir, "data", "Favourites.json");
    fs.readFile(dataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
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
    Favourites.fetchFavourites((favourites) => {
      const delHomes = favourites.filter((homeId) => delHomeId !== homeId);
      let dataPath = path.join(rootDir, "data", "Favourites.json");
      fs.writeFile(dataPath, JSON.stringify(delHomes), (err) => {
        err && callback(err);
      });
    });
  }

  static fetchAll(callback) {
    let dataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(dataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};

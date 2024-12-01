const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photo) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photUrl = photo;
  }
  save() {
    Home.fetchAll(homes => {
        console.log(homes)
        homes.push(this);
        let dataPath = path.join(rootDir, "data", "homes.json");
        fs.writeFile(dataPath, JSON.stringify(homes), (err) => {
        //   console.log(err);
        });
    })
    
  }
  static fetchAll(callback) {
    let dataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(dataPath, (err, data) => {
    //   console.log(err, data);
        console.log(JSON.parse(data));
        
      callback(!err ? JSON.parse(data) : []);
    });
  }
};

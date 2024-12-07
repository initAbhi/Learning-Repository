const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add Home", tab: "addHome" });
};


exports.postAddHome = (req, res, next) => {
    // console.log(req.body);
    const home = new Home(req.body.houseName,req.body.price,req.body.location,req.body.rating,req.body.photo)
    home.save()
    // homes.push(req.body)
    res.render('host/homeAdded', {pageTitle: "Home Added", tab: "homeAdded"});
    // console.log(homes)
  }

  exports.getHostHomesList = (req, res, next) => {
    let homes = Home.fetchAll(homes => res.render('host/hostHomesList', {homes: homes,pageTitle: "Host Homes List",tab:"hostHomes"}))

  }

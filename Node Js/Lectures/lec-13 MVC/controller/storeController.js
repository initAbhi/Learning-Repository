const Home = require("../models/home");

exports.getIndex =  (req, res, next) => {
  let homes = Home.fetchAll(homes => res.render('store/index', {homes: homes,pageTitle: "airbnb",tab:"airbnb"}))
  // console.log(req.url, req.method, homes);
  
}

exports.getHomes =  (req, res, next) => {
    let homes = Home.fetchAll(homes => res.render('store/homeList', {homes: homes,pageTitle: "Home",tab:"home-list"}))
    // console.log(req.url, req.method, homes);
    
  }

  exports.getBookings = (req, res, next) => {
    let homes = Home.fetchAll(homes => res.render('store/bookings', {homes: homes,pageTitle: "Bookings",tab:"bookings"}))    
  }
  exports.getFavouriteList = (req, res, next) => {
    let homes = Home.fetchAll(homes => res.render('store/favouriteList', {homes: homes,pageTitle: "Favourites",tab:"favouriteList"}))    
  }
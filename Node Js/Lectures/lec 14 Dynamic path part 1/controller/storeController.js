const { response } = require("express");
const Home = require("../models/home");
const Favourites = require("../models/favourites");

exports.getIndex = (req, res, next) => {
  let homes = Home.fetchAll((homes) =>
    res.render("store/index", {
      homes: homes,
      pageTitle: "airbnb",
      tab: "airbnb",
    })
  );
};

exports.getHomes = (req, res, next) => {
  let homes = Home.fetchAll((homes) =>
    res.render("store/homeList", {
      homes: homes,
      pageTitle: "Home",
      tab: "home-list",
    })
  );
};

exports.getBookings = (req, res, next) => {
  let homes = Home.fetchAll((homes) =>
    res.render("store/bookings", {
      homes: homes,
      pageTitle: "Bookings",
      tab: "bookings",
    })
  );
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      res.redirect("/homeList");
    } else {
      res.render("store/homeDetails", {
        home: home,
        pageTitle: "Home Detials",
        tab: "home-list",
      });
    }
  });
};

exports.getFavouriteList = (req, res, next) => {
  let homes = Favourites.fetchFavourites((homes) => {
    res.render("store/favouriteList", {
      homes: homes,
      pageTitle: "Favourites",
      tab: "favouriteList",
    });
  });
};

exports.addToFavourites = (req, res, next) => {
  let currId = req.body.id;

  Favourites.findById(currId, (home) => {
    if (!home) {
      console.log("storecontroller/addToFavourites Favourites not found");
    } else {
      Favourites.findByIdInFavs(currId, (result) => {
        if (result) {
          console.log("already exists");
        } else {
          const newhome = new Favourites(
            home.houseName,
            home.price,
            home.location,
            home.rating,
            home.photoUrl,
            home.id
          );
          newhome.saveToFavourites();
          console.log("home found", home);
        }
      });
    }
  });
  res.redirect("/favourites");
};



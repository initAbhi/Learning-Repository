const { response } = require("express");
const Home = require("../models/home");
const Favourites = require("../models/favourites");

exports.getIndex = (req, res, next) => {
  let homes = Home.fetchAll().then((homes) =>
    res.render("store/index", {
      homes: homes,
      pageTitle: "airbnb",
      tab: "airbnb",
    })
  );
};

exports.getHomes = (req, res, next) => {
  let homes = Home.fetchAll().then((homes) =>
    res.render("store/homeList", {
      homes: homes,
      pageTitle: "Home",
      tab: "home-list",
    })
  );
};

exports.getBookings = (req, res, next) => {
  let homes = Home.fetchAll().then((homes) =>
    res.render("store/bookings", {
      homes: homes,
      pageTitle: "Bookings",
      tab: "bookings",
    })
  );
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
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
  Favourites.fetchFavourites().then((favHomes) => {
    favHomes = favHomes.map(home => home.id)
    console.log(favHomes)
      Home.fetchAll().then((fetchedHomes) => {
        let homes = fetchedHomes.filter((home) => favHomes.includes(String(home._id)));
        res.render("store/favouriteList", {
          homes: homes,
          pageTitle: "Favourites",
          tab: "favouriteList",
        });
      });
  });
};

exports.addToFavourites = (req, res, next) => {
  let currId = req.body.id;
  Favourites.saveToFavourites(req.body.id)

    res.redirect("/favourites");

};

exports.postDeleteFromFavs = (req, res, next) => {
  let currId = req.params.homeId;
  Favourites.deleteById(currId, () =>
    console.log("storecontroller.js/delFromFavourites: Removed form favs")
  );
  res.redirect("/favourites");
};

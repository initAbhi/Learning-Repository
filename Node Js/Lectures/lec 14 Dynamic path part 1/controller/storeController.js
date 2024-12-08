const { response } = require("express");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  let homes = Home.fetchAll((homes) =>
    res.render("store/index", {
      homes: homes,
      pageTitle: "airbnb",
      tab: "airbnb",
    })
  );
  // console.log(req.url, req.method, homes);
};

exports.getHomes = (req, res, next) => {
  let homes = Home.fetchAll((homes) =>
    res.render("store/homeList", {
      homes: homes,
      pageTitle: "Home",
      tab: "home-list",
    })
  );
  // console.log(req.url, req.method, homes);
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
exports.getFavouriteList = (req, res, next) => {
  let homes = Home.fetchAll((homes) =>
    res.render("store/favouriteList", {
      homes: homes,
      pageTitle: "Favourites",
      tab: "favouriteList",
    })
  );
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homeList");
    } else {
      console.log("Home details found", home);
      res.render("store/homeDetails", {
        home: home,
        pageTitle: "Home Detials",
        tab: "home-list",
      });
    }
  });
  // console.log(req.url, req.method, homes);
};

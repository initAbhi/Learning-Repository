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

exports.getFavouriteList = (req, res, next) => {
  let homes = Home.fetchFavourites((homes) =>{
    res.render("store/favouriteList", {
      homes: homes,
      pageTitle: "Favourites",
      tab: "favouriteList",
    })
});
};

exports.addToFavourites = (req, res, next) => {
  let id = req.body.id;

  Home.findById(id, (home) => {
    if (!home) {
      console.log("storecontroller/addToFavourites Home not found");
    } else {
      const newhome = new Home(home.houseName,home.price,home.location,home.rating,home.photoUrl,home.id)
      console.log(newhome)
  newhome.saveToFavourites()
     console.log("home found",home)
    }
  });
  res.redirect("/favourites");
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

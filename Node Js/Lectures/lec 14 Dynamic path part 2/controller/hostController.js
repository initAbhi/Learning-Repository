const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {  
  res.render("host/editHome", { pageTitle: "Add Home", tab: "addHome" ,editing:false});
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("hostcontroller.js:getEditHome: home nod found");
      res.redirect("/host/hostHomes");
    } else {
      console.log(home);
      res.render("host/editHome", {
        home: home,
        pageTitle: "Edit home",
        tab: "hostHomes",
        editing: editing,
      });
    }
  });
};

exports.postAddHome = (req, res, next) => {
  const home = new Home(
    req.body.houseName,
    req.body.price,
    req.body.location,
    req.body.rating,
    req.body.photo
  );
  home.save();
  // res.render("host/homeAdded", { pageTitle: "Home Added", tab: "homeAdded" });
  res.redirect("/host/hostHomes");
};

exports.postUpdateHome = (req, res, next) => {
  const home = new Home(
    req.body.houseName,
    req.body.price,
    req.body.location,
    req.body.rating,
    req.body.photo
  );
  home.id = req.body.id
  home.save();
  res.redirect("/host/hostHomes");
};

exports.getHostHomesList = (req, res, next) => {
  let homes = Home.fetchAll((homes) =>
    res.render("host/hostHomesList", {
      homes: homes,
      pageTitle: "Host Homes List",
      tab: "hostHomes",
    })
  );
};

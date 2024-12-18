const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {  
  res.render("host/editHome", { pageTitle: "Add Home", tab: "addHome" ,editing:false});
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId).then((home) => {
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
    req.body.photo,
    req.body.description
  );
  home.save().then(() => {

    res.redirect("/host/hostHomes");
  })
  // res.render("host/homeAdded", { pageTitle: "Home Added", tab: "homeAdded" });
};

exports.postUpdateHome = (req, res, next) => {
  const home = new Home(
    req.body.houseName,
    req.body.price,
    req.body.location,
    req.body.rating,
    req.body.photo,
    req.body.description,
    req.body.id
  );
  home.save();
  res.redirect("/host/hostHomes");
};

exports.postDeleteHome = (req, res, next) => {
  let homeId = req.params.homeId
  // console.log("delete", homeId);
  Home.deleteById(homeId).then(()=> {

  })
  res.redirect("/host/hostHomes");
};


exports.getHostHomesList = (req, res, next) => {
  Home.fetchAll().then((homes) =>
    res.render("host/hostHomesList", {
      homes: homes,
      pageTitle: "Host Homes List",
      tab: "hostHomes",
    })
  );
};

//External module
const express = require("express");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const path = require("path");
const rootDir = require("./utils/pathUtil");
const errorController = require("./controller/errors");
const { createConnection } = require("./utils/databaseUtil");
const Home = require("./models/home");
const Favourites = require("./models/favourites");


const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(path.join(rootDir, "public"))));
app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorController.pageNotFound);

const port = 3001;

createConnection().then(() => {
  app.listen(port, () => {
    console.log(2)
    console.log(`your server is loaded at - http://localhost:${port}`);
  });
})
console.log(3)



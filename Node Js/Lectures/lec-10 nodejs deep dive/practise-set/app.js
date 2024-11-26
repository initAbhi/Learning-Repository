const express = require("express");
const contact = require("./routes/contactUs")
const path = require("path")
const dirName = require("./utils/path")

const app = express();

// app.use((req, res, next) => {
//   console.log(`First middleware`, req.method, req.url);
//   next();
// });

app.use(express.urlencoded())

// app.use((req, res, next) => {
//   console.log(`second middleware`, req.method, req.url);
//   next();
// });

// app.use((req, res, next) => {
//   console.log(`Third middleware`, req.method, req.url);
//   // res.send("<p>Hello</p>")
//   next();
// });

app.get("/", (req, res, next) => {
  console.log("first ger middle ware");
  res.sendFile(path.join(dirName, "views", "home.html"))
    
});
app.use(contact)

app.use("/", (req,res,next) => {
  res.sendFile(path.join(path.join(dirName, "views", "404.html")))
})


const port = 3000;
app.listen(port, () => {
  console.log(`your server is running at http://localhost:${port}`);
});

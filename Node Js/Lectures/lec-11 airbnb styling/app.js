//External module
const express = require("express");
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const path = require("path")
const rootDir = require("./utils/pathUtil")


const app = express();

app.use(express.static(path.join(path.join(rootDir,"public"))))
app.use(express.urlencoded());
app.use(userRouter)
app.use("/host", hostRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});





const port = 3000;
app.listen(port, () => {
  console.log(`your server is loaded at - http://localhost:${port}`);
});

//External module
const express = require("express");
const userRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")
const path = require("path")
const rootDir = require("./utils/pathUtil")
const errorController = require("./controller/errors")


const app = express();
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(path.join(rootDir,"public"))))
app.use(express.urlencoded());
app.use(userRouter)
app.use("/host", hostRouter)

app.use(errorController.pageNotFound);





const port = 3000;
app.listen(port, () => {
  console.log(`your server is loaded at - http://localhost:${port}`);
});

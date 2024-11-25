//External module
const express = require("express");
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRouter)
app.use(hostRouter)





const port = 3000;
app.listen(port, () => {
  console.log(`your server is loaded at - http://localhost:${port}`);
});

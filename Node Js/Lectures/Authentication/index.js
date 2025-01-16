const express = require("express");
require("dotenv").config();
const { connectDb } = require("./utils/dbConnection.js");
const userRouter = require("./routes/userRouter.js");

const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT;
connectDb();
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

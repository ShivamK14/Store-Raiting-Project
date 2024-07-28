const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const storeRouter = require("./routes/storeRouter");
const dotenv = require("dotenv");
const secret_key = process.env.SECRET_KEY;
dotenv.config();
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("HTTP Method - " + req.method + " - URL " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("conntectd");
});

app.use("/api/user", userRouter);
app.use("/api/store", storeRouter);

const port = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://Shivam:Ir6vAL9WNZnQTz0r@cluster0.5zssxns.mongodb.net/"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("server Has Started on " + port);
      console.log(port);
      console.log(process.env.SECRET_KEY);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });

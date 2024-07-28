import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import storeRouter from "./routes/storeRouter.js";
import path from "path";
import mongoose from "mongoose";
const secret_key = process.env.SECRET_KEY;
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const __dirname = path.resolve();
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
      console.log(process.env.JWT_SECRET);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });

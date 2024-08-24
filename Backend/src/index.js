import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import storeRouter from "./routes/storeRouter.js";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import { callbackify } from "util";
import { error } from "console";
const production = [process.env.ORIGIN_1];
const devOrigin = ["http://localhost:5173"];
const allowedorigin =
  process.env.NODE_ENV === "production" ? production : devOrigin;

const secret_key = process.env.SECRET_KEY;
dotenv.config();
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log("HTTP Method - " + req.method + " - URL " + req.url);
  next();
});

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("conntectd");
});
app.use(cookieParser());
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

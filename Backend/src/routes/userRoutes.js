import express from "express";
import { login, logout, signup } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/Signup", signup);
userRouter.post("/Login", login);
userRouter.post("/Logout", logout);
export default userRouter;

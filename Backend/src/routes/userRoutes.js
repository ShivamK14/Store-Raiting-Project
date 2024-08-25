import express from "express";
import {
  ChangePassword,
  login,
  logout,
  signup,
} from "../controller/userController.js";
import auth from "../middelwares/auth.js";
const userRouter = express.Router();

userRouter.post("/Signup", signup);
userRouter.post("/Login", login);
userRouter.post("/Logout", logout);
userRouter.put("/ChangePassword", auth, ChangePassword);
export default userRouter;

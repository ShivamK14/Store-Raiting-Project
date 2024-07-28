const express = require("express");
const { signup, signin, logout } = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/Signup", signup);
userRouter.post("/Signin", signin);
userRouter.post("/Logout", logout);
module.exports = userRouter;

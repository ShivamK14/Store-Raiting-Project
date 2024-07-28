const express = require("express");
const { signup, signin } = require("../controller/userController");
const {
  createstore,
  getstore,
  getallstore,
  updatestore,
  deletestore,
  rating,
} = require("../controller/storeController");
const auth = require("../middelwares/auth");

const storeRouter = express.Router();

storeRouter.post("/", auth, createstore);
storeRouter.get("/", auth, getstore);
storeRouter.get("/allstroes", auth, getallstore);
storeRouter.put("/allstroes/ratings", auth, rating);
storeRouter.put("/:id", auth, updatestore);
storeRouter.delete("/:id", auth, deletestore);

module.exports = storeRouter;

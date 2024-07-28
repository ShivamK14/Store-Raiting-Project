import express from "express";
import {
  createstore,
  getstore,
  getallstore,
  rating,
  updatestore,
  deletestore,
} from "../controller/storeController.js";

import auth from "../middelwares/auth.js";
const storeRouter = express.Router();

storeRouter.post("/", auth, createstore);
storeRouter.get("/", auth, getstore);
storeRouter.get("/allstroes", auth, getallstore);
storeRouter.put("/allstroes/ratings", auth, rating);
storeRouter.put("/:id", auth, updatestore);
storeRouter.delete("/:id", auth, deletestore);

export default storeRouter;

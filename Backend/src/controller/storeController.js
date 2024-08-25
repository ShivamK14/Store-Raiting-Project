import storeModel from "../models/store.js";
import User from "../models/user.js";

export const createstore = async (req, res) => {
  console.log(req.body);
  const { storename, address } = req.body;
  console.log(storename, address);
  const storePic = `https://avatar.iran.liara.run/public/boy?username=${storename}`;
  const newStore = new storeModel({
    storename: storename,
    address: address,
    userId: req.user,
    storePic: storePic,
  });
  try {
    await newStore.save();
    res.status(201).json({ message: "Store Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something Went Wrong" });
  }
};

export const updatestore = async (req, res) => {
  const id = req.params.id;
  const { storename, address, stars } = req.body;
  if (stars > 5 || stars < 0) {
    return res.status(400).json({ error: "stars should between 1-5" });
  }
  const newStore = {
    storename: storename,
    address: address,
    stars: stars,
    userId: req.user,
  };
  try {
    const stores = await storeModel.findByIdAndUpdate(id, newStore, {
      new: true,
    });
    res
      .status(202)
      .json({ message: "Store Successfully Updated Please refresh the Page" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something Went Wrong" });
  }
};
export const deletestore = async (req, res) => {
  const id = req.params.id;
  try {
    const stores = await storeModel.findByIdAndDelete(id);
    if (stores) {
      res.status(202).json({
        message: "Store Successfully Deleted Please refresh the Page",
      });
    } else {
      res
        .status(401)
        .json({ error: "Store Already Deleted Please refresh the Page" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something Went Wrong" });
  }
};
export const getstore = async (req, res) => {
  console.log(req.user);
  let tofind = {};
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (user.isAdmin) {
    } else {
      tofind = { userId: req.user };
    }

    const stores = await storeModel.find(tofind);

    res.status(201).json(stores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const getallstore = async (req, res) => {
  console.log(req.user);
  try {
    const stores = await storeModel.find({});
    res.status(201).json(stores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const rating = async (req, res) => {
  const id = req.user.id;
  const username = req.user.username;
  console.log("_id", id);
  const { stars, userId, review } = req.body;
  console.log("review", review);
  try {
    const product = await storeModel.findById(userId);
    let alreadyRated = product.ratings.find((userId) => userId.postedBy === id);
    console.log("already rated", alreadyRated);

    if (alreadyRated) {
      const updateRating = await storeModel.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: {
            "ratings.$.stars": parseInt(stars),
            "ratings.$.review": review,
            "ratings.$.createdAt": new Date(),
          },
        },

        {
          new: true,
        }
      );
    } else {
      const rateProduct = await storeModel.findByIdAndUpdate(
        userId,
        {
          $push: {
            ratings: {
              stars: parseInt(stars),
              review: review,
              postedBy: id,
              username: username,
              createdAt: new Date(),
            },
          },
        },
        { new: true }
      );
    }
    const getallratings = await storeModel.findById(userId);
    let totalRating = getallratings.ratings.length;
    let ratingSum = getallratings.ratings
      .map((item) => item.stars)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.abs(ratingSum / totalRating);
    console.log(actualRating, ratingSum, totalRating);
    let finalProduct = await storeModel.findByIdAndUpdate(
      userId,
      {
        total_star: actualRating.toFixed(1),
      },
      { new: true }
    );
    res.status(201).json({ message: "Rating Submitted" });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

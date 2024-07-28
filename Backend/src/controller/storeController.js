import storeModel from "../models/store.js";

export const createstore = async (req, res) => {
  console.log(req.storename);
  const { storename, address } = req.body;
  const newStore = new storeModel({
    storename: storename,
    address: address,
    userId: req.userId,
  });
  try {
    await newStore.save();
    res.status(201).json(newStore);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const updatestore = async (req, res) => {
  const id = req.params.id;
  const { storename, address, stars } = req.body;
  if (stars > 5 || stars < 0) {
    return res.status(400).json({ message: "stars should between 1-5" });
  }
  const newStore = {
    storename: storename,
    address: address,
    stars: stars,
    userId: req.userId,
  };
  try {
    const stores = await storeModel.findByIdAndUpdate(id, newStore, {
      new: true,
    });
    res.status(202).json(stores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
export const deletestore = async (req, res) => {
  const id = req.params.id;
  try {
    const stores = await storeModel.findByIdAndDelete(id);
    res.status(202).json(stores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
export const getstore = async (req, res) => {
  console.log(req.userId);
  try {
    const stores = await storeModel.find({ userId: req.userId });
    res.status(201).json(stores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const getallstore = async (req, res) => {
  console.log(req.userId);
  try {
    const stores = await storeModel.find({});
    res.status(201).json(stores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const rating = async (req, res) => {
  const id = req.userId;
  console.log("_id", id);
  const { stars, userId } = req.body;
  try {
    const product = await storeModel.findById(userId);
    console.log(product);
    let alreadyRated = product.ratings.find((userId) => userId.postedBy === id);
    console.log(alreadyRated);

    if (alreadyRated) {
      const updateRating = await storeModel.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.stars": stars },
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
              stars: stars,
              postedBy: id,
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
    res.status(201).json(finalProduct);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

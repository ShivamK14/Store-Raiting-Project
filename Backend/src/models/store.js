import mongoose from "mongoose";

const storeModel = mongoose.Schema(
  {
    storename: { type: String, require: true },
    address: { type: String, require: true },
    ratings: { type: Array, require: true },
    total_star: { type: String, default: 0 },
    my_submitted_rating: { type: Number, require: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", storeModel);

export default Store;

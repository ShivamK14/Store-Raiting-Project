import mongoose from "mongoose";
const userModel = mongoose.Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true },
    address: { type: String, require: true },
    password: { type: String, require: true, minlength: 8 },
    email: { type: String, require: true },
    isAdmin: { type: Boolean, require: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);

export default User;

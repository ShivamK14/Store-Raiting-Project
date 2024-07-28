const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", userModel);

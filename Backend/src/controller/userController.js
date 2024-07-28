const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const user = require("../models/user");
const { use } = require("../routes/userRoutes");
const secret_key = process.env.SECRET_KEY;
const signup = async (req, res) => {
  console.log("inSignup");
  console.log(process.env.SECRET_KEY);
  console.log(secret_key);

  const { username, email, password } = req.body;
  try {
    console.log(username, email, password);
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: "User Already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await user.create({
      email: email,
      password: hashedPassword,
      username: username,
    });
    const token = jwt.sign(
      { email: result.email, id: result.id },
      process.env.SECRET_KEY
    );
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "somethihng went wrong" });
  }
};
const signin = async (req, res) => {
  console.log(process.env.SECRET_KEY);
  console.log(secret_key);
  const { username, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ username: username });

    if (!existingUser) {
      return res.status(400).json({ error: "User not Found" });
    }
    const matchpassword = await bcrypt.compare(password, existingUser.password);
    if (!matchpassword) {
      return res.status(500).json({ error: "Wrong Password" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET_KEY
    );

    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "somethihng went wrong" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signin, signup, logout };

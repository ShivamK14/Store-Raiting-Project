const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const auth = (req, res, next) => {
  console.log(SECRET_KEY);
  try {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, process.env.SECRET_KEY);
      console.log(user);
      req.userId = user.id;
      console.log(req.userId);
    } else {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized User" });
  }
};

module.exports = auth;

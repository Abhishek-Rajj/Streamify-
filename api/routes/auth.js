/* the problem may arise the mongodb server is not working , extend the deadline, change the username on postman, rerun the server when done changes in env file , encrypted problem is also there*/

const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");

// Register

router.post("/register", async (req, res) => {
  console.log("k");
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password.toString(),
      process.env.SECRET_KEY
    ).toString(),
    //password: req.body.password,
  });

  try {
    const user = await newUser.save();
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    // console.log("err");
    // console.log(err);
    //res.status(500).json(err);
  }
});

// LOGIN//

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("wrong password or username");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    // const originalPassword =JSON.parse bytes.toString(CryptoJS.enc.Utf8);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("wrong email or usernamee");
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "70d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

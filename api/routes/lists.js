const router = require("express").Router();
const List = require("../models/List");
//const CryptoJS = require("crypto-js");
const User = require("../models/User");
const verify = require("../verifyToken");
//Create
// cecking the web token that is present or not and the checking the id in the database and if that is present we can update the username or password there if you are an admin or it is oyour account if the ci
// if the conditions are met we will setthe properties

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    // console.log("kl");
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed");
  }
});
//delete
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("your item is deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed");
  }
});

//get
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  console.log("kjk");
  if (req.user?.isAdmin) {
    try {
      if (typeQuery) {
        if (genreQuery) {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery, genre: genreQuery } },
          ]);
        } else {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery } },
          ]);
        }
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }]);
      }
      res.status(200).json(list);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = router;

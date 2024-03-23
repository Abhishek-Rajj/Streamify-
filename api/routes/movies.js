const router = require("express").Router();
const Movie = require("../models/Movie");
//const CryptoJS = require("crypto-js");
const User = require("../models/User");
const verify = require("../verifyToken");
//Create
// cecking the web token that is present or not and the checking the id in the database and if that is present we can update the username or password there if you are an admin or it is oyour account if the ci
// if the conditions are met we will setthe properties

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    //console.log("kl");
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed to add movie");
  }
});

//Update
// ffor updating u hv to give true//
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    try {
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed to add movie");
  }
});

// DElete

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("the movie has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed to add movie");
  }
});

// get

router.get("/find/:id", async (req, res) => {
  try {
    //console.log("k");
    const movies = await Movie.findById(req.params.id);
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get random
// query to check it is movies or series
router.get("/random", async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all
router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed");
  }
});

module.exports = router;

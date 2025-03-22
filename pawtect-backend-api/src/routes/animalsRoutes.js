const express = require("express");
const router = express.Router();
const Animal = require("../models/animalModel");

// DEFINE THE ROUTE TO SEARCH AND FILTER ANIMALS
router.get("/search-filter", async (req, res) => {
  const { query, type, age, size, gender } = req.query;
  let filter = {};

  if (query) {
    filter.$or = [
      { name: { $regex: query, $options: "i" } },
      { breed: { $regex: query, $options: "i" } },
    ];
  }
  if (type) filter.type = type;
  if (age) {
    if (age === "0-3") {
      filter.age = { $lte: 3 };
    } else if (age === "4-6") {
      filter.age = { $gte: 4, $lte: 6 };
    } else if (age === "7+") {
      filter.age = { $gte: 7 };
    }
  }
  if (size) filter.size = size;
  if (gender) filter.gender = gender;

  try {
    const animals = await Animal.find(filter);
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DEFINE THE ROUTE TO GET ALL ANIMALS
router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DEFINE THE ROUTE TO GET A SPECIFIC ANIMAL BY ID
router.get("/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (animal == null) {
      return res.status(404).json({ message: "Cannot Find Animal" });
    }
    res.json(animal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
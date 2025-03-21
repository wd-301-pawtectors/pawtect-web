const express = require('express');
const router = express.Router();
const Animal = require('../models/animalModel');

// DEFINE THE ROUTE TO GET ALL ANIMALS
/* This code snippet defines a route in an Express router that handles GET requests to the root path
'/'. When a GET request is made to '/', the code asynchronously tries to find all animals by calling
`Animal.find()`. If the operation is successful, it responds with a JSON array of animals using
`res.json(animals)`. If an error occurs during the operation, it sends a 500 status response with a
JSON object containing the error message using `res.status(500).json({ message: err.message })`. */
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DEFINE THE ROUTE TO SEARCH ANIMALS BY NAME OR BREED
/* This code snippet defines a route in an Express router that handles GET requests to the '/search'
path. When a GET request is made to '/search', it extracts the 'query' parameter from the request
query string using `const { query } = req.query;`. */
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const animals = await Animal.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { breed: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DEFINE THE ROUTE TO FILTER ANIMALS BY TYPE, AGE, SIZE, AND GENDER
/* The code snippet you provided defines a route in an Express router that handles GET requests to the
'/filter' path. When a GET request is made to '/filter', the code extracts the 'type', 'age',
'size', and 'gender' parameters from the request query string using destructuring assignment `const
{ type, age, size, gender } = req.query;`. */
router.get('/filter', async (req, res) => {
  const { type, age, size, gender } = req.query;
  let filter = {};

  if (type) filter.type = type;
  if (age) {
    if (age === '0-3') {
      filter.age = { $lte: 3 };
    } else if (age === '4-6') {
      filter.age = { $gte: 4, $lte: 6 };
    } else if (age === '7+') {
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

// DEFINE THE ROUTE TO GET A SPECIFIC ANIMAL BY ID
/* This code snippet defines a route in an Express router that handles GET requests to a specific
animal ID endpoint. When a GET request is made to a route like '/:id', it captures the ID parameter
from the request URL using `req.params.id`. */
router.get('/:id', async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (animal == null) {
      return res.status(404).json({ message: 'Cannot Find Animal' });
    }
    res.json(animal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

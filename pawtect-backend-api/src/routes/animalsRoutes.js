const express = require('express');
const router = express.Router();
const Animal = require('../models/animalModel');

// DEFINE THE ROUTE TO GET ALL ANIMALS
/* This code snippet defines a route in an Express router that handles GET requests to the root
endpoint ('/'). When a GET request is made to this endpoint, the code asynchronously tries to find
all animals by calling `Animal.find()`. If the operation is successful, it responds with a JSON
representation of the animals found. If there is an error during the process, it catches the error
and responds with a status code of 500 along with a JSON object containing the error message. */
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DEFINE THE ROUTE TO GET A SPECIFIC ANIMAL BY ID
/* The code snippet you provided defines a route in an Express router that handles GET requests to a
specific endpoint with a dynamic parameter `:id`. When a GET request is made to this endpoint, the
code asynchronously tries to find a specific animal by its ID using
`Animal.findById(req.params.id)`. */
router.get('/:id', async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (animal == null) {
      return res.status(404).json({ message: 'Cannot find animal' });
    }
    res.json(animal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
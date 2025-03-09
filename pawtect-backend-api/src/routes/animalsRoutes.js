const express = require('express');
const router = express.Router();
const Animal = require('../models/animalModel');

// DEFINE THE ROUTE TO GET ALL ANIMALS
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DEFINE THE ROUTE TO GET A SPECIFIC ANIMAL BY ID
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
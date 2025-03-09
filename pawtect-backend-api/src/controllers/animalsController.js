const Animal = require('../models/animalModel');

// FETCH ALL ANIMALS
exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// SEARCH AND FILTER ANIMALS
exports.searchAnimals = async (req, res) => {
    const { type, age, size } = req.query;

    try {
        const query = {};
        if (type) query.type = type;
        if (age) query.age = age;
        if (size) query.size = size;

        const animals = await Animal.find(query);
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
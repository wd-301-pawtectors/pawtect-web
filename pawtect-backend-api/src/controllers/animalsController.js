const Animal = require('../models/animalModel');

// FETCH ALL ANIMALS
/* The `exports.getAllAnimals` function is responsible for fetching all animals from the database. */
exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// SEARCH AND FILTER ANIMALS
/* The `exports.searchAnimals` function is responsible for searching and filtering animals based on the
query parameters provided in the request. It extracts the `type`, `age`, and `size` parameters from
the request query object. Then, it constructs a query object based on the provided parameters. If
any of the parameters are present, they are added to the query object. */
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
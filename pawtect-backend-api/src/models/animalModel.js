const mongoose = require('mongoose');

/* This code snippet is defining a Mongoose schema for an "Animal" model. The schema specifies the
structure of documents within the "Animal" collection in MongoDB. Each document will have fields for
name, type, age, size, description, imageURL, and available. */
const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
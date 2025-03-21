const mongoose = require("mongoose");

/* This code snippet is defining a Mongoose schema for an animal entity. Each field in the schema
represents a property of an animal such as name, type, breed, gender, age, size, weight,
description, and imageURL. */
const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;

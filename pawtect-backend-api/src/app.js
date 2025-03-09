require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const animalsRoutes = require('./routes/animalsRoutes');

const app = express();

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // CORS

// ROUTES
app.use('/api/animals', animalsRoutes);

// MONGODB CONNECTION
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));

module.exports = app;
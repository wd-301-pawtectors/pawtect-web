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
/* `app.use('/api/animals', animalsRoutes);` is setting up a route in the Express application. When a
request is made to the '/api/animals' endpoint, the application will pass the request to the
`animalsRoutes` router for further handling. This allows for modularizing the routing logic and
keeping the code organized. */
app.use('/api/animals', animalsRoutes);

// MONGODB CONNECTION
/* The code snippet you provided is establishing a connection to a MongoDB database using Mongoose in a
Node.js application. */
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));

module.exports = app;
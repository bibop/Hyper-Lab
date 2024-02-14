const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');

const app = express();

// Database Connection
connectDB().catch(err => console.log(err));

const passport = require('./config/passport');

// Initialize Passport
app.use(passport.initialize());

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Centralized Routing Module
const setupRoutes = require('./routes');
setupRoutes(app);
// app.use('/test-user', require('./routes/testUserRoutes'));

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
console.log('Attempting to listen on port', PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
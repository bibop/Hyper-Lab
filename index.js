const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoose = require('mongoose');
const databaseConfig = require('./config/database');
const User = require('./models/User');

// Database Connection
mongoose.connect(databaseConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Test Endpoint to Create and Retrieve a Dummy User
app.get('/test-user', async (req, res) => {
  try {
    // Create a dummy user
    const dummyUser = new User({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password' // Note: In production, this would be hashed
    });

    // Save dummy user in the database
    await dummyUser.save();

    // Retrieve the dummy user from the database
    const foundUser = await User.findOne({ username: 'testuser' });
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
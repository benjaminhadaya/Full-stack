// server/routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// POST route to register a new user
router.post('/register', async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user instance
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    // Save the new user to the database
    const user = await newUser.save();

    // Send back some information about the new user
    res.status(201).json({ userId: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

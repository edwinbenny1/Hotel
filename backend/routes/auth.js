const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
router.post('/', async (req, res) => {
  console.log("POST /users hit", req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send('Registration successful!');
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send('Email already exists');
    }
    res.status(500).send('Registration failed');
  }
});
// 🔐 LOGIN route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid email or password");
    }

    res.status(200).json(user); 
  } catch (error) {
    res.status(500).send("Login error");
  }
});


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body }, 
      { new: true, runValidators: true } 
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send("User updated successfully!");
  } catch (error) {
    res.status(500).send(`Error updating user: ${error.message}`);
  }
});



router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

module.exports = router;
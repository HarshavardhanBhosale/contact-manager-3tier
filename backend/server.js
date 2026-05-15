const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const User = require('./User');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/devops_project';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// GET all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    // JSONPlaceholder uses 'id' instead of '_id', let's map it for frontend compatibility
    const mappedUsers = users.map(user => ({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone
    }));
    res.json(mappedUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a user
app.post('/users', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
  try {
    const savedUser = await newUser.save();
    res.json({
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      phone: savedUser.phone
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a user
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    await user.remove();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT (update) a user
app.put('/users/:id', async (req, res) => {
  try {
     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
     if (!user) return res.status(404).json({ message: 'User not found' });
     res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone
     });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

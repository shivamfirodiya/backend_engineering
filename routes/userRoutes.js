const express = require("express");
const router = express.Router();
const User = require("../models/User");


// CREATE User
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// READ All Users (with pagination)
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  const users = await User.find().skip(skip).limit(limit);
  res.json(users);
});


// READ Single User
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});


// UPDATE User
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
});


// DELETE User
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;

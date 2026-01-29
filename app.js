const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json()); // middleware

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/crudDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));

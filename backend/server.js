
/*
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
//const multer = require("multer");
//const { exec } = require("child_process");
//const Attendance = require("./models/Attendance");


const app = express();
const PORT = 3000;

// Middleware
require("dotenv").config();
app.use(cors());
app.use(express.json());



// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/attendance-Trackerrr").then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Define User Schema & Model
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model("User", UserSchema);


// ➤ Register Route
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "User already registered! Redirecting to login..." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.json({ message: "Registration successful! Redirecting to home..." });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ➤ Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const user = await User.findOne({email });

        if (!user) {
            return res.status(400).json({ error: "User not found! Please register first." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials!" });
        }

        res.json({ message: "Login successful! Redirecting to dashboard...",id: user.id });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());

app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// Replace with your own MongoDB URI
const MONGO_URI = 'mongodb://127.0.0.1:27017/attendance-trackerr';

mongoose.connect(MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Mongo error:', err));

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  photo: String,
});

const Student = mongoose.model('Student', studentSchema);

// Admin Schema
const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

// ======================= ROUTES ========================= //

// Register Student
app.post('/api/student/register', async (req, res) => {
  const { name, email, password, photo } = req.body;
  try {
    const existing = await Student.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const student = new Student({ name, email, password: hashed, photo });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Student
//const bcrypt = require("bcryptjs");

app.post("/api/student/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // ✅ Compare hashed password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful", studentId: student._id });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Register Admin
app.post('/api/admin/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const admin = new Admin({ name, email, password: hashed });
    await admin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Admin
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Admin login successful', admin });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ======================= START SERVER ========================= //

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


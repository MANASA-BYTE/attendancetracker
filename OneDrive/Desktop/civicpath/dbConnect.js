const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017/civicpath";  // Hardcoded URI for testing
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
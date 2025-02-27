const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/authRoutes"));

// Root route
app.get("/", (req, res) => {
  res.send("Recruitment Platform API is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

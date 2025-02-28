require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import Routes
const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const resumeRoutes = require("./routes/resumeRoutes");
// const jobRoutes = require("./routes/jobRoutes");
// const matchingRoutes = require("./routes/matchingRoutes");
// const assessmentRoutes = require("./routes/assessmentRoutes");
// const careerRoutes = require("./routes/careerRoutes");
// const recruiterRoutes = require("./routes/recruiterRoutes");
// const securityRoutes = require("./routes/securityRoutes");
// const notificationRoutes = require("./routes/notificationRoutes");

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5000", credentials: true })); // Adjust frontend URL as needed
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/resumes", resumeRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/matching", matchingRoutes);
// app.use("/api/assessments", assessmentRoutes);
// app.use("/api/career", careerRoutes);
// app.use("/api/recruiters", recruiterRoutes);
// app.use("/api/security", securityRoutes);
// app.use("/api/notifications", notificationRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Recruitment Platform API!");
});

// Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("❌ Error:", err.message);
//   res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
// });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

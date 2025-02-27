const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillsRequired: [{ type: String }],
  location: { type: String },
  salary: { type: Number },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  postedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", JobSchema);

const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fileUrl: { type: String, required: true },
  extractedSkills: [{ type: String }],
  extractedExperience: [{ company: String, title: String, duration: String }],
  recommendations: [{ type: String }], 
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resume", ResumeSchema);

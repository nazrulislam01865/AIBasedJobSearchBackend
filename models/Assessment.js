const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["skill-test", "job-task", "mock-interview"], required: true },
  score: { type: Number },
  feedback: { type: String },
  aiAnalysis: { type: String }, 
  dateTaken: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Assessment", AssessmentSchema);

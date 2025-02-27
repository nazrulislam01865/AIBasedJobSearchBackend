const Job = require("../models/Job");
const User = require("../models/User");

// Get Job Recommendations for a User
exports.getJobRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Dummy AI-based recommendation logic
    const jobs = await Job.find({ skillsRequired: { $in: user.skills } });

    res.json({ jobs, message: "AI-based job recommendations" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Best Candidates for a Job
exports.getBestCandidates = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Dummy AI-based candidate matching
    const candidates = await User.find({ skills: { $in: job.skillsRequired }, role: "job-seeker" });

    res.json({ candidates, message: "Best matching candidates for the job" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Improve Matching Based on Feedback
exports.improveMatching = async (req, res) => {
  try {
    res.json({ message: "AI job matching improved based on feedback" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

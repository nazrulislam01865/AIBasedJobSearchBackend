const Resume = require("../models/Resume");

// Upload Resume
exports.uploadResume = async (req, res) => {
  try {
    const resume = new Resume({ user: req.user.id, fileUrl: req.file.path });
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Resume by ID
exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: "Resume not found" });

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// AI Resume Analysis (Dummy)
exports.analyzeResume = async (req, res) => {
  try {
    res.json({ message: "AI analysis completed", skills: ["React", "Node.js"], jobsRecommended: ["Frontend Developer", "Full Stack Developer"] });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

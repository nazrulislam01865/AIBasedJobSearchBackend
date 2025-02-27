const Job = require("../models/Job");

// Create Job
exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, employer: req.user.id });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Jobs by Skill
exports.getJobsBySkill = async (req, res) => {
  try {
    const skill = req.query.skill;
    const jobs = await Job.find({ skillsRequired: skill });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Job Listing
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    Object.assign(job, req.body);
    await job.save();

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Job
exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

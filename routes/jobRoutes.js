const express = require("express");
const { createJob, getJob, searchJobs, updateJob, deleteJob } = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createJob);
router.get("/:id", authMiddleware, getJob);
router.get("/", authMiddleware, searchJobs);
router.put("/:id/update", authMiddleware, updateJob);
router.delete("/:id", authMiddleware, deleteJob);

module.exports = router;

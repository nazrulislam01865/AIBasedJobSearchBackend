const express = require("express");
const { conductSkillTest, getSkillTestResult, assignJobTask, getJobTaskResult, mockInterview } = require("../controllers/assessmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/skill-test", authMiddleware, conductSkillTest);
router.get("/skill-test/:id", authMiddleware, getSkillTestResult);
router.post("/job-task", authMiddleware, assignJobTask);
router.get("/job-task/:id", authMiddleware, getJobTaskResult);
router.post("/mock-interview", authMiddleware, mockInterview);

module.exports = router;

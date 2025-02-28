const express = require("express");
const { getJobRecommendations, getBestCandidates, improveMatching } = require("../controllers/matchingController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/jobs/:userId", authMiddleware, getJobRecommendations);
router.get("/candidates/:jobId", authMiddleware, getBestCandidates);
router.post("/improve", authMiddleware, improveMatching);

module.exports = router;

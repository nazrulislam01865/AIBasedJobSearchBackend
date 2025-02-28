const express = require("express");
const { getCareerTrends, getRecommendations, trackProgress } = require("../controllers/careerController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/trends", getCareerTrends);
router.get("/recommendations/:userId", authMiddleware, getRecommendations);
router.post("/track-progress", authMiddleware, trackProgress);

module.exports = router;

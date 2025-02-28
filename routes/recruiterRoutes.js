const express = require("express");
const { getRecruiterProfile, hiringBiasCheck, getRecruiterAnalytics } = require("../controllers/recruiterController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getRecruiterProfile);
router.post("/hiring-bias-check", authMiddleware, hiringBiasCheck);
router.post("/analytics", authMiddleware, getRecruiterAnalytics);

module.exports = router;

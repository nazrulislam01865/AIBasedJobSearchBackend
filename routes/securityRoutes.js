const express = require("express");
const { reportIssue, getPrivacyPolicy, requestDataDeletion } = require("../controllers/securityController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/report-issue", authMiddleware, reportIssue);
router.get("/privacy-policy", getPrivacyPolicy);
router.post("/data-request", authMiddleware, requestDataDeletion);

module.exports = router;

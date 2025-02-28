const express = require("express");
const { uploadResume, getResume, updateResume, deleteResume, analyzeResume } = require("../controllers/resumeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/upload", authMiddleware, uploadResume);
router.get("/:id", authMiddleware, getResume);
router.put("/:id/update", authMiddleware, updateResume);
router.delete("/:id", authMiddleware, deleteResume);
router.post("/analyze", authMiddleware, analyzeResume);

module.exports = router;

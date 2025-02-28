const express = require("express");
const { sendNotification, getUserNotifications, sendMessage, getChatHistory } = require("../controllers/notificationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/send", authMiddleware, sendNotification);
router.get("/:userId", authMiddleware, getUserNotifications);
router.post("/messages/send", authMiddleware, sendMessage);
router.get("/messages/:conversationId", authMiddleware, getChatHistory);

module.exports = router;

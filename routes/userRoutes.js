const express = require("express");
const { getUser, getUsersByRole, deleteUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getUser);
router.get("/", authMiddleware, getUsersByRole);
router.delete("/:id", [authMiddleware, adminMiddleware], deleteUser);

module.exports = router;

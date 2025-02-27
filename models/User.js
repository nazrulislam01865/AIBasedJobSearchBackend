const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  skills: [{ type: String }],
  education: { type: String },
  resumeUrl: { type: String },
  role: { type: String, enum: ["USER"], default: "USER" },
});

module.exports = mongoose.model("User", UserSchema);

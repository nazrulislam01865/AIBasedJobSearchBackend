const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  industry: { type: String },
  website: { type: String },
  role: { type: String, enum: ["COMPANY"], default: "COMPANY" },
});

module.exports = mongoose.model("Company", CompanySchema);

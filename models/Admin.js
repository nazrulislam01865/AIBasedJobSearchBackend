const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },

  password: {
     type: String, 
     required: true },
  role: { 
    type: String, 
    enum: ["ADMIN"], 
    default: "ADMIN" },
});

module.exports = mongoose.model("Admin", AdminSchema);

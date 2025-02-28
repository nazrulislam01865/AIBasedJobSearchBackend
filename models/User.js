const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["Jobfinder", "Employer", "Admin","Company"],
    required: true,
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  phone: {
     type: String, 
     required: true 
    },
  skills: [
    { 
      type: 
      String 
    }
  ],
  education: [
    { 
      degree: String, 
      institution: String, 
      year: Number 
    }
  ],
  experience: [
    {
       company: String, 
       title: String, 
       duration: String 
      }
    ],
  resume: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Resume" 
  },
  createdAt: {
     type: Date, 
     default: Date.now 
    },
});

module.exports = mongoose.model("User", UserSchema);

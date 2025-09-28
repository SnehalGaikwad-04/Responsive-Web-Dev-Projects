// enviro-edu-api/models/Challenge.js
const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    points: { type: Number, default: 10 },
    type: { type: String, enum: ["quiz", "action"], default: "quiz" },
    correctAnswer: String, // for quiz-type
  },
  { timestamps: true }
);

module.exports = mongoose.model("Challenge", challengeSchema);

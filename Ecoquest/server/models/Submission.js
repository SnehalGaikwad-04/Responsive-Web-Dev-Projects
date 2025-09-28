// enviro-edu-api/models/Submission.js
const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    challenge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Challenge",
      required: true,
    },
    answer: String,
    correct: { type: Boolean, default: false },
    awardedPoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);

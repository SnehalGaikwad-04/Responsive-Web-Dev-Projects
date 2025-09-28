// enviro-edu-api/routes/challenge.routes.js
const express = require("express");
const Challenge = require("../models/Challenge");
const Submission = require("../models/Submission");
const User = require("../models/User");
const requireAuth = require("../middleware/auth");

const router = express.Router();

// List challenges (public)
router.get("/", async (req, res) => {
  const items = await Challenge.find().sort({ createdAt: -1 });
  res.json(items);
});

// Create challenge (protected – pretend teacher/admin)
router.post("/", requireAuth, async (req, res) => {
  const { title, description, points, type, correctAnswer } = req.body;
  const item = await Challenge.create({
    title,
    description,
    points,
    type,
    correctAnswer,
  });
  res.status(201).json(item);
});

// Submit answer (protected)
router.post("/:id/submit", requireAuth, async (req, res) => {
  const { answer } = req.body;
  const challenge = await Challenge.findById(req.params.id);
  if (!challenge) return res.status(404).json({ error: "Not found" });

  let correct = false;
  if (challenge.type === "quiz" && challenge.correctAnswer) {
    correct =
      String(answer).trim().toLowerCase() ===
      String(challenge.correctAnswer).trim().toLowerCase();
  } else {
    correct = true; // for 'action' type, accept and award
  }

  const awardedPoints = correct ? challenge.points : 0;
  const sub = await Submission.create({
    user: req.user.id,
    challenge: challenge._id,
    answer,
    correct,
    awardedPoints,
  });

  if (awardedPoints > 0) {
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { points: awardedPoints },
    });
  }

  res.status(201).json(sub);
});

module.exports = router;

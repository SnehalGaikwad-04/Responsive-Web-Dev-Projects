const express = require("express");
const router = express.Router();

// Get weekly leaderboard
router.get("/weekly", async (req, res) => {
  try {
    // Mock data - replace with MongoDB query
    const leaderboard = [
      {
        id: 1,
        name: "Green Warriors",
        school: "Delhi Public School",
        points: 2450,
        trend: "up",
      },
      {
        id: 2,
        name: "Eco Champions",
        school: "St. Xavier's College",
        points: 2380,
        trend: "up",
      },
    ];
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

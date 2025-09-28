// src/pages/LearningHub.jsx
import React, { useState } from "react";
// import "../App.css";
import "./hub.css";

const LearningHub = () => {
  const [activeTab, setActiveTab] = useState("curriculum");

  // Top stats (replace with props/context/API as needed)
  const totalPoints = 2450;
  const level = "Eco Explorer";
  const progress = 68;
  const streak = 12;
  const treesPlanted = 25;

  const achievements = [
    { id: 1, title: "Tree Hugger", icon: "🌳", points: 100, unlocked: true },
    { id: 2, title: "Recycle Master", icon: "♻️", points: 150, unlocked: true },
    { id: 3, title: "Water Guardian", icon: "💧", points: 200, unlocked: true },
    {
      id: 4,
      title: "Solar Champion",
      icon: "☀️",
      points: 250,
      unlocked: false,
    },
    { id: 5, title: "Eco Warrior", icon: "🌍", points: 500, unlocked: false },
  ];

  const curriculum = [
    {
      id: 1,
      title: "Climate Change Fundamentals",
      difficulty: "Beginner",
      time: "2 hours",
      icon: "🌡️",
      topics: [
        { name: "Greenhouse Effect", done: true, points: 50 },
        { name: "Global Warming Impacts", done: true, points: 50 },
        { name: "Carbon Footprint", done: false, points: 75 },
        { name: "Climate Action", done: false, points: 100 },
      ],
    },
    {
      id: 2,
      title: "Renewable Energy Systems",
      difficulty: "Intermediate",
      time: "3 hours",
      icon: "⚡",
      topics: [
        { name: "Solar Basics", done: true, points: 60 },
        { name: "Wind Tech", done: false, points: 70 },
        { name: "Hydroelectric", done: false, points: 65 },
        { name: "Biomass & Geothermal", done: false, points: 80 },
      ],
    },
  ];

  const quizzes = [
    {
      id: 1,
      title: "Climate Quick Quiz",
      icon: "🌡️",
      difficulty: "Easy",
      questions: 10,
      time: "5 min",
      points: 100,
      completed: true,
      score: 8,
    },
    {
      id: 2,
      title: "Renewable Challenge",
      icon: "⚡",
      difficulty: "Medium",
      questions: 15,
      time: "8 min",
      points: 150,
      completed: false,
      score: null,
    },
    {
      id: 3,
      title: "Waste Sorting",
      icon: "♻️",
      difficulty: "Easy",
      questions: 12,
      time: "6 min",
      points: 120,
      completed: true,
      score: 10,
    },
  ];

  const stories = [
    {
      id: 1,
      title: "The Last Tree on Earth",
      icon: "🌳",
      category: "Climate Fiction",
      readTime: "8 min",
      difficulty: "Intermediate",
      points: 50,
      completed: true,
      lessons: ["Deforestation impacts", "Conservation"],
    },
    {
      id: 2,
      title: "Maya and the Solar Village",
      icon: "☀️",
      category: "Renewable Energy",
      readTime: "12 min",
      difficulty: "Beginner",
      points: 75,
      completed: false,
      lessons: ["Solar benefits", "Community action"],
    },
    {
      id: 3,
      title: "The Plastic Ocean Adventure",
      icon: "🌊",
      category: "Marine Conservation",
      readTime: "10 min",
      difficulty: "Intermediate",
      points: 60,
      completed: true,
      lessons: ["Ocean pollution", "Plastic alternatives"],
    },
  ];

  const colorForDifficulty = (d) => {
    const key = d.toLowerCase();
    if (key === "beginner" || key === "easy") return "#4CAF50";
    if (key === "intermediate" || key === "medium") return "#FF9800";
    if (key === "advanced" || key === "hard") return "#F44336";
    return "#2196F3";
  };

  return (
    <div className="learning-hub">
      <header className="hub-header">
        <div className="header-content">
          <div className="welcome-section">
            <h1>🌍 Learning Hub</h1>
            <p>Continue your environmental learning journey</p>
          </div>

          <div className="top-stats">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <h3>{totalPoints.toLocaleString()}</h3>
                <p>Total Points</p>
              </div>
            </div>

            <div className="achievements-preview">
              <h4>Top Achievements</h4>
              <div className="achievements-list">
                {achievements
                  .filter((a) => a.unlocked)
                  .slice(0, 3)
                  .map((a) => (
                    <div key={a.id} className="achievement-badge">
                      <span className="achievement-icon">{a.icon}</span>
                      <div className="achievement-info">
                        <span className="achievement-title">{a.title}</span>
                        <span className="achievement-points">
                          +{a.points} pts
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-header">
            <h3>Learning Progress</h3>
            <span className="level-badge">{level}</span>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
            <span className="progress-text">{progress}%</span>
          </div>
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-icon">🔥</span>
              <span className="stat-value">{streak}</span>
              <span className="stat-label">Day Streak</span>
            </div>
            <div className="stat">
              <span className="stat-icon">🌳</span>
              <span className="stat-value">{treesPlanted}</span>
              <span className="stat-label">Trees Planted</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === "curriculum" ? "active" : ""}`}
          onClick={() => setActiveTab("curriculum")}
        >
          📚 Curriculum
        </button>
        <button
          className={`tab-btn ${activeTab === "quizzes" ? "active" : ""}`}
          onClick={() => setActiveTab("quizzes")}
        >
          🎯 Quizzes
        </button>
        <button
          className={`tab-btn ${activeTab === "stories" ? "active" : ""}`}
          onClick={() => setActiveTab("stories")}
        >
          📖 Stories
        </button>
      </nav>

      <main className="tab-content">
        {activeTab === "curriculum" && (
          <div className="curriculum-content">
            <div className="content-header">
              <h3>Environmental Learning Curriculum</h3>
              <p>
                Structured learning paths designed for progressive skill
                development
              </p>
            </div>
            <div className="modules-grid">
              {curriculum.map((m) => (
                <div key={m.id} className="module-card">
                  <div className="module-header">
                    <div className="module-icon">{m.icon}</div>
                    <div className="module-info">
                      <h4>{m.title}</h4>
                      <div className="module-meta">
                        <span
                          className="difficulty-badge"
                          style={{
                            backgroundColor: colorForDifficulty(m.difficulty),
                          }}
                        >
                          {m.difficulty}
                        </span>
                        <span className="time-estimate">⏱️ {m.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="topics-list">
                    {m.topics.map((t, i) => (
                      <div
                        key={i}
                        className={`topic-item ${t.done ? "completed" : ""}`}
                      >
                        <div className="topic-status">
                          {t.done ? "✅" : "⏳"}
                        </div>
                        <div className="topic-content">
                          <span className="topic-name">{t.name}</span>
                          <span className="topic-points">+{t.points} pts</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="module-actions">
                    <button className="btn">
                      {m.topics.every((t) => t.done)
                        ? "Review Module"
                        : "Continue Learning"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "quizzes" && (
          <div className="quizzes-content">
            <div className="content-header">
              <h3>Interactive Environmental Quizzes</h3>
              <p>
                Test your knowledge and earn points through engaging challenges
              </p>
            </div>
            <div className="quizzes-grid">
              {quizzes.map((q) => (
                <div
                  key={q.id}
                  className={`quiz-card ${q.completed ? "completed" : ""}`}
                >
                  <div className="quiz-header">
                    <div className="quiz-icon">{q.icon}</div>
                    <div className="quiz-status">
                      {q.completed ? "✅" : "🎯"}
                    </div>
                  </div>
                  <div className="quiz-content">
                    <h4>{q.title}</h4>
                    <div className="quiz-meta">
                      <span
                        className="difficulty-badge"
                        style={{
                          backgroundColor: colorForDifficulty(q.difficulty),
                        }}
                      >
                        {q.difficulty}
                      </span>
                      <span className="category-badge">General</span>
                    </div>
                    <div className="quiz-details">
                      <span>📝 {q.questions} questions</span>
                      <span>⏰ {q.time}</span>
                      <span>🏆 {q.points} points</span>
                    </div>
                    {q.completed && q.score != null && (
                      <div className="quiz-score">
                        <span>
                          Your Score: {q.score}/{q.questions}
                        </span>
                        <div className="score-bar">
                          <div
                            className="score-fill"
                            style={{
                              width: `${(q.score / q.questions) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="quiz-actions">
                    <button className="btn">
                      {q.completed ? "Retake Quiz" : "Start Quiz"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "stories" && (
          <div className="stories-content">
            <div className="content-header">
              <h3>Environmental Stories & Tales</h3>
              <p>
                Learn through engaging narratives that inspire environmental
                action
              </p>
            </div>
            <div className="stories-grid">
              {stories.map((s) => (
                <div
                  key={s.id}
                  className={`story-card ${s.completed ? "completed" : ""}`}
                >
                  <div className="story-thumbnail">
                    <div className="story-icon">{s.icon}</div>
                    <div className="story-status">
                      {s.completed ? "✅" : "📖"}
                    </div>
                  </div>
                  <div className="story-content">
                    <div className="story-header">
                      <h4>{s.title}</h4>
                      <span className="category-badge">{s.category}</span>
                    </div>
                    <p className="story-description">
                      Explore and reflect on real environmental challenges
                      through storytelling.
                    </p>
                    <div className="story-meta">
                      <span>⏱️ {s.readTime}</span>
                      <span
                        className="difficulty-badge"
                        style={{
                          backgroundColor: colorForDifficulty(s.difficulty),
                        }}
                      >
                        {s.difficulty}
                      </span>
                      <span className="points-badge">🏆 {s.points} pts</span>
                    </div>
                    <div className="story-lessons">
                      <h5>What you'll learn:</h5>
                      <ul>
                        {s.lessons.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="story-actions">
                    <button className="btn">
                      {s.completed ? "Read Again" : "Start Reading"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LearningHub;

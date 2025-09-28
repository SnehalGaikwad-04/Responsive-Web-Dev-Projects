// Learninghub.jsx
import React, { useState } from "react";
import "./Learninghub.css";

const Learninghub = () => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [userProgress] = useState({
    totalPoints: 2450,
    currentLevel: "Eco Explorer",
    progressPercentage: 68,
    streak: 12,
    treesPlanted: 25,
  });

  const [achievements] = useState([
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
  ]);

  const [curriculumData] = useState([
    {
      id: 1,
      module: "Climate Change Fundamentals",
      topics: [
        {
          name: "Understanding Greenhouse Effect",
          completed: true,
          points: 50,
        },
        { name: "Global Warming Impacts", completed: true, points: 50 },
        { name: "Carbon Footprint Calculation", completed: false, points: 75 },
        { name: "Climate Action Solutions", completed: false, points: 100 },
      ],
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      icon: "🌡️",
    },
    {
      id: 2,
      module: "Renewable Energy Systems",
      topics: [
        { name: "Solar Power Basics", completed: true, points: 60 },
        { name: "Wind Energy Technologies", completed: false, points: 70 },
        { name: "Hydroelectric Power", completed: false, points: 65 },
        { name: "Biomass and Geothermal", completed: false, points: 80 },
      ],
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      icon: "⚡",
    },
    {
      id: 3,
      module: "Waste Management & Recycling",
      topics: [
        { name: "3Rs: Reduce, Reuse, Recycle", completed: true, points: 45 },
        { name: "Composting Techniques", completed: true, points: 55 },
        { name: "E-Waste Management", completed: false, points: 85 },
        { name: "Circular Economy Principles", completed: false, points: 90 },
      ],
      difficulty: "Beginner",
      estimatedTime: "2.5 hours",
      icon: "🗂️",
    },
    {
      id: 4,
      module: "Biodiversity Conservation",
      topics: [
        { name: "Ecosystem Services", completed: false, points: 70 },
        { name: "Endangered Species Protection", completed: false, points: 80 },
        { name: "Forest Conservation", completed: false, points: 75 },
        { name: "Marine Life Protection", completed: false, points: 85 },
      ],
      difficulty: "Advanced",
      estimatedTime: "4 hours",
      icon: "🦋",
    },
  ]);

  const [quizData] = useState([
    {
      id: 1,
      title: "Climate Change Quick Quiz",
      difficulty: "Easy",
      questions: 10,
      timeLimit: "5 min",
      points: 100,
      category: "Climate",
      icon: "🌡️",
      completed: true,
      score: 8,
    },
    {
      id: 2,
      title: "Renewable Energy Challenge",
      difficulty: "Medium",
      questions: 15,
      timeLimit: "8 min",
      points: 150,
      category: "Energy",
      icon: "⚡",
      completed: false,
      score: null,
    },
    {
      id: 3,
      title: "Waste Sorting Game",
      difficulty: "Easy",
      questions: 12,
      timeLimit: "6 min",
      points: 120,
      category: "Waste",
      icon: "♻️",
      completed: true,
      score: 10,
    },
    {
      id: 4,
      title: "Biodiversity Master Quiz",
      difficulty: "Hard",
      questions: 20,
      timeLimit: "12 min",
      points: 200,
      category: "Biology",
      icon: "🦋",
      completed: false,
      score: null,
    },
    {
      id: 5,
      title: "Water Conservation Quiz",
      difficulty: "Medium",
      questions: 8,
      timeLimit: "4 min",
      points: 80,
      category: "Water",
      icon: "💧",
      completed: true,
      score: 6,
    },
    {
      id: 6,
      title: "Sustainable Living Challenge",
      difficulty: "Hard",
      questions: 25,
      timeLimit: "15 min",
      points: 250,
      category: "Lifestyle",
      icon: "🌱",
      completed: false,
      score: null,
    },
  ]);

  const [storiesData] = useState([
    {
      id: 1,
      title: "The Last Tree on Earth",
      category: "Climate Fiction",
      readTime: "8 min",
      difficulty: "Intermediate",
      points: 50,
      completed: true,
      thumbnail: "🌳",
      description:
        "A compelling story about the importance of forest conservation in a world where trees are disappearing.",
      lessons: [
        "Deforestation impacts",
        "Conservation importance",
        "Individual responsibility",
      ],
    },
    {
      id: 2,
      title: "Maya and the Solar Village",
      category: "Renewable Energy",
      readTime: "12 min",
      difficulty: "Beginner",
      points: 75,
      completed: false,
      thumbnail: "☀️",
      description:
        "Follow Maya as she discovers how her village transformed using solar energy and became energy independent.",
      lessons: [
        "Solar power benefits",
        "Community action",
        "Energy independence",
      ],
    },
    {
      id: 3,
      title: "The Plastic Ocean Adventure",
      category: "Marine Conservation",
      readTime: "10 min",
      difficulty: "Intermediate",
      points: 60,
      completed: true,
      thumbnail: "🌊",
      description:
        "Dive into an underwater adventure that reveals the impact of plastic pollution on marine life.",
      lessons: ["Ocean pollution", "Marine ecosystem", "Plastic alternatives"],
    },
    {
      id: 4,
      title: "Aarav's Recycling Revolution",
      category: "Waste Management",
      readTime: "6 min",
      difficulty: "Beginner",
      points: 40,
      completed: false,
      thumbnail: "♻️",
      description:
        "Young Aarav starts a recycling program in his school and inspires his entire community.",
      lessons: [
        "Waste segregation",
        "Recycling process",
        "Community leadership",
      ],
    },
    {
      id: 5,
      title: "The Butterfly Effect",
      category: "Biodiversity",
      readTime: "15 min",
      difficulty: "Advanced",
      points: 100,
      completed: false,
      thumbnail: "🦋",
      description:
        "Explore how small actions can create big changes in ecosystems through the story of a butterfly garden.",
      lessons: [
        "Ecosystem balance",
        "Species interdependence",
        "Conservation action",
      ],
    },
    {
      id: 6,
      title: "The Water Cycle Warriors",
      category: "Water Conservation",
      readTime: "9 min",
      difficulty: "Intermediate",
      points: 65,
      completed: true,
      thumbnail: "💧",
      description:
        "Join the Water Cycle Warriors as they learn to protect and conserve water resources.",
      lessons: ["Water cycle", "Conservation methods", "Water scarcity"],
    },
  ]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
      case "beginner":
        return "#4CAF50";
      case "medium":
      case "intermediate":
        return "#FF9800";
      case "hard":
      case "advanced":
        return "#F44336";
      default:
        return "#2196F3";
    }
  };

  const renderProgressBar = () => (
    <div className="progress-section">
      <div className="progress-header">
        <h3>Learning Progress</h3>
        <span className="level-badge">{userProgress.currentLevel}</span>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${userProgress.progressPercentage}%` }}
        ></div>
        <span className="progress-text">
          {userProgress.progressPercentage}%
        </span>
      </div>
      <div className="progress-stats">
        <div className="stat">
          <span className="stat-icon">🔥</span>
          <span className="stat-value">{userProgress.streak}</span>
          <span className="stat-label">Day Streak</span>
        </div>
        <div className="stat">
          <span className="stat-icon">🌳</span>
          <span className="stat-value">{userProgress.treesPlanted}</span>
          <span className="stat-label">Trees Planted</span>
        </div>
      </div>
    </div>
  );

  const renderCurriculumContent = () => (
    <div className="curriculum-content">
      <div className="content-header">
        <h3>Environmental Learning Curriculum</h3>
        <p>
          Structured learning paths designed for progressive skill development
        </p>
      </div>
      <div className="modules-grid">
        {curriculumData.map((module) => (
          <div key={module.id} className="module-card">
            <div className="module-header">
              <div className="module-icon">{module.icon}</div>
              <div className="module-info">
                <h4>{module.module}</h4>
                <div className="module-meta">
                  <span
                    className="difficulty-badge"
                    style={{
                      backgroundColor: getDifficultyColor(module.difficulty),
                    }}
                  >
                    {module.difficulty}
                  </span>
                  <span className="time-estimate">
                    ⏱️ {module.estimatedTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="topics-list">
              {module.topics.map((topic, index) => (
                <div
                  key={index}
                  className={`topic-item ${topic.completed ? "completed" : ""}`}
                >
                  <div className="topic-status">
                    {topic.completed ? "✅" : "⏳"}
                  </div>
                  <div className="topic-content">
                    <span className="topic-name">{topic.name}</span>
                    <span className="topic-points">+{topic.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="module-actions">
              <button className="btn btn-primary">
                {module.topics.every((t) => t.completed)
                  ? "Review Module"
                  : "Continue Learning"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuizzesContent = () => (
    <div className="quizzes-content">
      <div className="content-header">
        <h3>Interactive Environmental Quizzes</h3>
        <p>Test your knowledge and earn points through engaging challenges</p>
      </div>
      <div className="quiz-filters">
        <button className="filter-btn active">All Quizzes</button>
        <button className="filter-btn">Easy</button>
        <button className="filter-btn">Medium</button>
        <button className="filter-btn">Hard</button>
        <button className="filter-btn">Completed</button>
      </div>
      <div className="quizzes-grid">
        {quizData.map((quiz) => (
          <div
            key={quiz.id}
            className={`quiz-card ${quiz.completed ? "completed" : ""}`}
          >
            <div className="quiz-header">
              <div className="quiz-icon">{quiz.icon}</div>
              <div className="quiz-status">{quiz.completed ? "✅" : "🎯"}</div>
            </div>
            <div className="quiz-content">
              <h4>{quiz.title}</h4>
              <div className="quiz-meta">
                <span
                  className="difficulty-badge"
                  style={{
                    backgroundColor: getDifficultyColor(quiz.difficulty),
                  }}
                >
                  {quiz.difficulty}
                </span>
                <span className="category-badge">{quiz.category}</span>
              </div>
              <div className="quiz-details">
                <span>📝 {quiz.questions} questions</span>
                <span>⏰ {quiz.timeLimit}</span>
                <span>🏆 {quiz.points} points</span>
              </div>
              {quiz.completed && quiz.score && (
                <div className="quiz-score">
                  <span>
                    Your Score: {quiz.score}/{quiz.questions}
                  </span>
                  <div className="score-bar">
                    <div
                      className="score-fill"
                      style={{
                        width: `${(quiz.score / quiz.questions) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="quiz-actions">
              <button className="btn btn-primary">
                {quiz.completed ? "Retake Quiz" : "Start Quiz"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStoriesContent = () => (
    <div className="stories-content">
      <div className="content-header">
        <h3>Environmental Stories & Tales</h3>
        <p>
          Learn through engaging narratives that inspire environmental action
        </p>
      </div>
      <div className="stories-grid">
        {storiesData.map((story) => (
          <div
            key={story.id}
            className={`story-card ${story.completed ? "completed" : ""}`}
          >
            <div className="story-thumbnail">
              <div className="story-icon">{story.thumbnail}</div>
              <div className="story-status">
                {story.completed ? "✅" : "📖"}
              </div>
            </div>
            <div className="story-content">
              <div className="story-header">
                <h4>{story.title}</h4>
                <span className="category-badge">{story.category}</span>
              </div>
              <p className="story-description">{story.description}</p>
              <div className="story-meta">
                <span>⏱️ {story.readTime}</span>
                <span
                  className="difficulty-badge"
                  style={{
                    backgroundColor: getDifficultyColor(story.difficulty),
                  }}
                >
                  {story.difficulty}
                </span>
                <span className="points-badge">🏆 {story.points} pts</span>
              </div>
              <div className="story-lessons">
                <h5>What you'll learn:</h5>
                <ul>
                  {story.lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="story-actions">
              <button className="btn btn-primary">
                {story.completed ? "Read Again" : "Start Reading"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="learning-hub">
      <header className="hub-header">
        <div className="header-content">
          <div className="welcome-section">
            <h1>🌍 Learning Hub</h1>
            <p>Continue your environmental learning journey</p>
          </div>

          <div className="top-stats">
            <div className="stat-card points">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <h3>{userProgress.totalPoints.toLocaleString()}</h3>
                <p>Total Points</p>
              </div>
            </div>

            <div className="achievements-preview">
              <h4>Top Achievements</h4>
              <div className="achievements-list">
                {achievements
                  .filter((a) => a.unlocked)
                  .slice(0, 3)
                  .map((achievement) => (
                    <div key={achievement.id} className="achievement-badge">
                      <span className="achievement-icon">
                        {achievement.icon}
                      </span>
                      <div className="achievement-info">
                        <span className="achievement-title">
                          {achievement.title}
                        </span>
                        <span className="achievement-points">
                          +{achievement.points} pts
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {renderProgressBar()}
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
        {activeTab === "curriculum" && renderCurriculumContent()}
        {activeTab === "quizzes" && renderQuizzesContent()}
        {activeTab === "stories" && renderStoriesContent()}
      </main>
    </div>
  );
};

export default Learninghub;

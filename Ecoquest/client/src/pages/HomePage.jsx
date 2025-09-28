// Homepage.jsx
import React, { useState, useEffect } from "react";
import Learninghub from "./llearninghub";
import "../App.css";
import "./hub.css";

const Homepage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    schools: 0,
    challenges: 0,
  });

  // Animate statistics on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ students: 25000, schools: 150, challenges: 500 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: "🌱",
      title: "Interactive Quizzes",
      description:
        "Engaging environmental quizzes with virtual tree planting and recycling challenges",
    },
    {
      icon: "🤖",
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths that adapt to each student's pace and progress",
    },
    {
      icon: "🏆",
      title: "Gamification",
      description:
        "Earn points, badges, and climb leaderboards while learning about sustainability",
    },
    {
      icon: "👥",
      title: "Community Challenges",
      description:
        "Participate in school-wide environmental challenges and real-world impact projects",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Unique student IDs and timestamps for accurate participation verification",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Class 10 Student",
      message:
        "Ecoquest made learning about environment so fun! I earned 500 points last week!",
      avatar: "👩‍🎓",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Environmental Science Teacher",
      message:
        "My students are 75% more engaged since we started using Ecoquest in our curriculum.",
      avatar: "👨‍🏫",
    },
    {
      name: "Sneha Patel",
      role: "School Principal",
      message:
        "The offline feature helps our rural students participate even with limited internet.",
      avatar: "👩‍💼",
    },
  ];

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <h1>🌍 EcoQuest</h1>
            <span className="tagline">Learn. Play. Save the Planet.</span>
          </div>
          <div className="nav-links">
            <a href="#contact">Contact</a>
            <a href="/Challenges">Challenges</a>
            <a href="/llearninghub">Learning Hub</a>
            <a href="/Dashboard">Dashboard</a>
          </div>
          <div className="auth-buttons">
            <button className="btn btn-outline">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Master Environmental Science Through Gaming</h1>
            <p>
              Join thousands of students in India's first AI-powered gamified
              environmental education platform. Learn sustainability through
              interactive challenges, earn rewards, and make a real impact on
              our planet.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <h3>{animatedStats.students.toLocaleString()}+</h3>
                <p>Active Students</p>
              </div>
              <div className="stat">
                <h3>{animatedStats.schools}+</h3>
                <p>Partner Schools</p>
              </div>
              <div className="stat">
                <h3>{animatedStats.challenges}+</h3>
                <p>Environmental Challenges</p>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large">
                Start Learning Now
              </button>
              <button className="btn btn-outline btn-large">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="element tree">🌳</div>
              <div className="element recycle">♻️</div>
              <div className="element earth">🌍</div>
              <div className="element badge">🏆</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose EcoQuest?</h2>
          <p className="section-subtitle">
            Revolutionary features that make environmental learning engaging and
            accessible
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>How EcoQuest Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up & Assess</h3>
              <p>
                Create your profile and take our AI assessment to determine your
                learning level and interests
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Personalized Learning</h3>
              <p>
                Receive customized learning paths adapted to your pace and
                environmental knowledge
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Engage & Earn</h3>
              <p>
                Complete challenges, earn points and badges, and climb the
                leaderboards
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Real Impact</h3>
              <p>
                Apply your knowledge in real-world community challenges and
                sustainable practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="impact">
        <div className="container">
          <h2>Our Impact on Environmental Education</h2>
          <div className="impact-stats">
            <div className="impact-card">
              <h3>65%</h3>
              <p>Increase in environmental awareness among students</p>
            </div>
            <div className="impact-card">
              <h3>40%</h3>
              <p>Improvement in sustainability practice adoption</p>
            </div>
            <div className="impact-card">
              <h3>30%</h3>
              <p>Better engagement in rural areas with offline mode</p>
            </div>
            <div className="impact-card">
              <h3>50%</h3>
              <p>Reduction in traditional teaching method gaps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Community Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <p>"{testimonial.message}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Environmental Journey?</h2>
          <p>Join thousands of students already making a difference</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">
              Get Started Free
            </button>
            <button className="btn btn-outline btn-large">
              Book School Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>🌍 EcoQuest</h3>
              <p>
                Gamified environmental education for schools and colleges across
                India
              </p>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" aria-label="LinkedIn">
                  💼
                </a>
                <a href="#" aria-label="Instagram">
                  📷
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Platform</h4>
              <ul>
                <li>
                  <a href="#">For Students</a>
                </li>
                <li>
                  <a href="#">For Teachers</a>
                </li>
                <li>
                  <a href="#">For Schools</a>
                </li>
                <li>
                  <a href="#">Offline Mode</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Learning Paths</a>
                </li>
                <li>
                  <a href="#">Environmental Guides</a>
                </li>
                <li>
                  <a href="#">Community Challenges</a>
                </li>
                <li>
                  <a href="#">Progress Tracking</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Technical Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 EcoQuest by Next Gen Coders. All rights reserved.</p>
            <p>🇮🇳 Made in India for a sustainable future</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

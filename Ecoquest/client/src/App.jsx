import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Learninghub from "./pages/Learninghub";
import Learninghub from "./pages/llearninghub";
import "./pages/hub.css";

// import { Navbar } from "./components/learning/Navbar";
// import { HeroSection } from "./components/learning/HeroSection";
// import { CurriculumTab } from "./components/learning/CurriculumTab";
// import { QuizzesTab } from "./components/learning/QuizzesTab";
// import { StoriesTab } from "./components/learning/StoriesTab";
// import { ProverbsTab } from "./components/learning/ProverbsTab";
// import { LessonModal } from "./components/learning/LessonModal";
// import { StoryModal } from "./components/learning/StoryModal";
// import { ActivityModal } from "./components/learning/ActivityModal";
// import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/llearninghub" element={<Learninghub />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

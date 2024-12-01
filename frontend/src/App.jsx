import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Homepage from "./components/Homepage";
import WelcomePage from "./components/WelcomePage";
import TakeQuiz from "./components/TakeQuiz";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
          {/* <Route path="moodboard/:userId" element={<MoodBoard />} /> */}
          {/* <Route path="/search/:userId" element={<Search />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import "../App.css";
// import Header from "./Header";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  const handleSearchPage = () => {
    navigate(`/search`);
  };

  const handlePlaylistPage = () => {
    navigate(`/playlist`);
  };

  const toggleSettingsMenu = () => {
    setShowSettingsMenu((prev) => !prev);
  };

  return (
    <div className="homepage-container">
      {/* <Header /> */}
      <div className="sidebar-container">
        <div className="profile-section">
          <div className="profile-icon-container">
            <img src="/flowers.jpg" alt="Profile Icon" />
          </div>
          <p className="username">Username</p>
        </div>
        <div className="sidebar-options">
          <button className="sidebar-btn" onClick={handleSearchPage}>
            <i className="fas fa-search"></i> Search
          </button>
          <button className="sidebar-btn" onClick={handlePlaylistPage}>
            <i className="fas fa-list"></i> My Playlists
          </button>
          <div className="settings-container">
            <button className="sidebar-btn" onClick={toggleSettingsMenu}>
              <i className="fas fa-cog"></i> Settings
            </button>
            {showSettingsMenu && (
              <div className="settings-menu">
                <button className="log-out-btn" onClick={handleLogOut}>
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="main-content-container">
        <div className="welcome-message">
          <h1 className="welcome-text">Welcome to RhythME!</h1>
          <p>Discover music that matches your mood and personality.</p>
          <p>Take our personality quiz or explore our music recommendations!</p>
        </div>
        <div className="buttons-container">
          <button
            className="take-quiz-btn"
            onClick={() => navigate(`/take-quiz`)}
            data-tooltip="Take the personality quiz to get personalized music recommendations!"
          >
            <i className="fas fa-music"></i> Let's match your mood
          </button>
          <button
            className="find-music-btn"
            onClick={handleSearchPage}
            data-tooltip="Find music recommendations based on your mood and preferences!"
          >
            <i className="fas fa-search"></i> More Music
          </button>
        </div>
        <div className="additional-sections">
          <div className="section">
            <h2>Recently Played</h2>
          </div>
          <div className="section">
            <h2>Top Recommendations</h2>
          </div>
          <div className="section">
            <h2>Discover New Music</h2>
          </div>
        </div>
      </div>
      <div className="background-image"></div>
    </div>
  );
}

export default Homepage;

import React from 'react';
import './UserProfile.css';

const FarmerProfile = () => {
  return (
    <div className="profile-container">
      {/* HEADER / COVER IMAGE */}
      <div className="profile-header">
        <img
          className="cover-image"
          src="https://i.pinimg.com/1200x/34/e7/9e/34e79ee3dd7da5dcd720ef92eaf1c403.jpg"
          alt="Farm Background"
        />
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src="https://i.pinimg.com/736x/51/e7/8e/51e78e2975a6f9a5138becec82a7c8a1.jpg"
            alt="Farmer"
          />
        </div>
      </div>

      {/* PROFILE INFO */}
      <div className="profile-info">
        <h2>Amy Mary Jo</h2>
        <p>Young Farmer & Organic Produce Enthusiast</p>
        <p>📍 Kerala, India</p>
        <p>📧 amymary@gmail.com</p>
        <div className="social-links">
          <span>🌱 Instagram: @amil_farms</span>
          <span>🐦 Twitter: @amil_farms</span>
        </div>

        <button className="chat-button">Chat with Farmer</button>
      </div>

    </div>
  );
};

export default FarmerProfile;

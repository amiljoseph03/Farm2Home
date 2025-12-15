import React from 'react';
import './AdminProfile.css';

const FarmerProfile = () => {
  return (
    <div className="profile-container">
      {/* HEADER / COVER IMAGE */}
      <div className="profile-header">
        <img
          className="cover-image"
          src="https://i.pinimg.com/1200x/2e/23/bf/2e23bf435ea175cb787e95514d1e4777.jpg"
          alt="Farm Background"
        />
        <div className="profile-picture-container">
          <img
            className="profile-picture"
            src="https://i.pinimg.com/736x/fc/e2/f7/fce2f7cfb8d0c51fbcfff29195efd70a.jpg"
            alt="Farmer"
          />
        </div>
      </div>

      {/* PROFILE INFO */}
      <div className="profile-info">
        <h2>Joseph Dominic</h2>
        <p>Organic Farmer & Organic Produce Enthusiast</p>
        <p>📍 Kerala, India</p>
        <p>📧 joseph@gmail.com</p>
        <div className="social-links">
          <span>🌱 Instagram: @amil_farms</span>
          <span>🐦 Twitter: @amil_farms</span>
        </div>

        <button className="chat-button">Chat with Users</button>
      </div>
    </div>
  );
};

export default FarmerProfile;

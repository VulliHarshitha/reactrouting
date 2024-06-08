// src/components/Profile.js
import React from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Chandan Sai</h1>
        <p>Frontend Developer</p>
      </div>
      <div className="profile-details">
        <div className="detail">
          <h2>About Me</h2>
          <p>Presently, Am Studing In Institute Of Aeronautical Enginnering College.</p>
        </div>
        <div className="detail">
          <h2>Contact</h2>
          <p>Email: chandansai@gmail.com</p>
          <p>Phone: +91 8555986559</p>
        </div>
        <div className="detail">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="detail">
          <h2>Experience</h2>
          <p>Frontend Developer at Ignite Company(2024 - Present)</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
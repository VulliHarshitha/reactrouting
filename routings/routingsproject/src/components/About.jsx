// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Learn more about our company, our mission and our team.
      </p>
      <div className="about-extra-info">
        <section className="about-section">
          <h2 className="about-section-title">Our Mission</h2>
          <p className="about-section-content">
            Our mission is to provide the best services to our customers and to make a positive impact in our industry.
          </p>
        </section>
        <section className="about-section">
          <h2 className="about-section-title">Our Team</h2>
          <p className="about-section-content">
            We are a group of passionate professionals committed to delivering excellence.
            <br></br>
            Meet our team members:
          </p>
          <ul className="about-list">
            <li>Chandan Sai</li>
            <li>Charitharth </li>
            <li>Chaitu</li>
            <li>Bhaskar</li>
            <li>Harshitha</li>
            <li>Teju</li>
            <li>Pramitha</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;

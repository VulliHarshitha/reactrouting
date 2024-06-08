// src/components/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <p className="home-description">
        Welcome to our application! This is the home page where you can find an overview of the features and navigate to other sections.
      </p>
      <div className="home-extra-info">
        <section className="home-section">
          <h2 className="home-section-title">Features</h2>
          <ul className="home-list">
            <li>
              <strong>Feature 1: User Management</strong> - Easily manage user accounts, roles, and permissions to ensure secure and personalized access.
            </li>
            <li>
              <strong>Feature 2: Real-time Notifications</strong> - Stay updated with real-time notifications about important events and updates within the application.
            </li>
            <li>
              <strong>Feature 3: Advanced Analytics</strong> - Access detailed analytics and reports to track performance, user engagement, and other key metrics.
            </li>
            <li>
              <strong>Feature 4: Customizable Dashboard</strong> - Customize your dashboard with widgets and components to fit your workflow and preferences.
            </li>
            <li>
              <strong>Feature 5: Seamless Integrations</strong> - Integrate seamlessly with third-party tools and services to enhance the functionality of the application.
            </li>
          </ul>
        </section>
        <section className="home-section">
          <h2 className="home-section-title">Getting Started</h2>
          <p>
            To get started, follow these simple steps:
          </p>
          <ol className="home-list">
            <li>Register for an account by clicking the Sign-Up button.</li>
            <li>Confirm your email address through the confirmation email.</li>
            <li>Log in with your new account and explore the features.</li>
          </ol>
        </section>
        <section className="home-section">
          <h2 className="home-section-title">Contact Us</h2>
          <p>
            If you have any questions or need support, feel free to <a href="/contact">contact us</a>. We are here to help!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;

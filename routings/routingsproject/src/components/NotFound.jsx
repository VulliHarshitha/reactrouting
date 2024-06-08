// src/components/NotFound.jsx
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">Page Not Found</p>
      <a href="/" className="not-found-link">Go back to Home</a>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
// import './NotFoundPage.css'; // Create this file for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1>404 - Page Not Found 🌵</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!</p>
        
        <div className="not-found-actions">
          <Link to="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link to="/lessons" className="btn-secondary">
            Explore Lessons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
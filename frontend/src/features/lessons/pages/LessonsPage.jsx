import React from 'react';
import { Link } from 'react-router-dom';
// import './LessonsPage.css'; // Create this file for styles

const LessonsPage = () => {
  return (
    <div className="feature-page lessons-page">
      <h1>Environmental Lessons 📚</h1>
      <p>Explore modules on climate change, recycling, conservation, and more to earn points and badges.</p>
      
      <section className="lesson-list">
        <h2>Modules Available</h2>
        <div className="grid-3">
          
          <div className="lesson-card">
            <h3>Module 1: Water Conservation</h3>
            <p>Learn how to save water at home and in your community.</p>
            <span className="lesson-level">Level: Beginner</span>
            <Link to="/lessons/1" className="btn-small">Start Lesson</Link>
          </div>
          
          <div className="lesson-card">
            <h3>Module 2: Plastic Recycling</h3>
            <p>Understand the types of plastic and the recycling process.</p>
            <span className="lesson-level">Level: Intermediate</span>
            <Link to="/lessons/2" className="btn-small">Start Lesson</Link>
          </div>
          
          <div className="lesson-card">
            <h3>Module 3: Carbon Footprint</h3>
            <p>Calculate your personal carbon usage and find ways to reduce it.</p>
            <span className="lesson-level">Level: Advanced</span>
            <Link to="/lessons/3" className="btn-small">Start Lesson</Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default LessonsPage;
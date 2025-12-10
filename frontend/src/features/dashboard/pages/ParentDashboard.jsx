import React from 'react';
import { Link } from 'react-router-dom';
// import './ParentDashboard.css'; // Create this file for styles

const ParentDashboard = () => {
  return (
    <div className="dashboard parent-dashboard">
      <header className="dashboard-header">
        <h1>Parent / Guardian Dashboard 👨‍👩‍👧‍👦</h1>
        <p>Monitor your child's progress, celebrate their achievements, and encourage learning at home.</p>
      </header>

      <section className="dashboard-content">
        <h2>Children's Progress Overview</h2>
        
        {/* Placeholder for Child 1 */}
        <div className="progress-card">
          <h3>Child: Emma Smith (Grade 5)</h3>
          <p>Total Eco-Points: **1,250**</p>
          <p>Latest Lesson: **Water Conservation** (Completed)</p>
          <p>Current Challenge: **The Recycling Race** (In Progress)</p>
          <Link to="/reports/emma" className="btn-small">View Full Report</Link>
        </div>

        {/* Placeholder for Child 2 (if applicable) */}
        {/* <div className="progress-card">...</div> */}
      </section>

      <section className="dashboard-actions">
        <h2>Resources</h2>
        <div className="link-grid">
          <Link to="/resources/guides" className="action-card">Parent Guides & Tips</Link>
          <Link to="/challenges/family" className="action-card">Family Eco-Challenges</Link>
        </div>
      </section>
    </div>
  );
};

export default ParentDashboard;
import React from 'react';
import { Link } from 'react-router-dom';
// import './SchoolDashboard.css'; // Create this file for styles

const SchoolDashboard = () => {
  return (
    <div className="dashboard school-dashboard">
      <header className="dashboard-header">
        <h1>School/College Dashboard 🏫</h1>
        <p>Oversee institutional impact, manage teachers, and track campus-wide metrics.</p>
      </header>
      
      <section className="dashboard-content">
        <h2>School-Wide Metrics</h2>
        <div className="stats-grid">
          <div className="stat-card"><h3>Total Eco-Points</h3><p className="large-number">15,000</p></div>
          <div className="stat-card"><h3>Active Teachers</h3><p className="large-number">5</p></div>
          <div className="stat-card"><h3>Campus Challenges</h3><p className="large-number">2</p></div>
        </div>
      </section>

      <section className="dashboard-actions">
        <h2>Management & Reporting</h2>
        <div className="link-grid">
          <Link to="/reports/teachers" className="action-card">Manage Teacher Accounts</Link>
          <Link to="/reports/students" className="action-card">View Student Ranks</Link>
          <Link to="/reports/impact" className="action-card">Download Impact Report</Link>
        </div>
      </section>
    </div>
  );
};

export default SchoolDashboard;
import React from 'react';
import { Link } from 'react-router-dom';
// import './GovernmentDashboard.css'; // Create this file for styles

const GovernmentDashboard = () => {
  return (
    <div className="dashboard government-dashboard">
      <header className="dashboard-header">
        <h1>Government Official Dashboard 🏛️</h1>
        <p>View state-wide environmental education metrics and data to inform policy and funding decisions.</p>
      </header>

      <section className="dashboard-content">
        <h2>Regional Impact Overview</h2>
        <div className="stats-grid">
          <div className="stat-card"><h3>Total Participation</h3><p className="large-number">50,000</p></div>
          <div className="stat-card"><h3>Schools Registered</h3><p className="large-number">120</p></div>
          <div className="stat-card"><h3>Avg. Eco-Score</h3><p className="large-number">78%</p></div>
        </div>
      </section>

      <section className="dashboard-actions">
        <h2>Reporting & Data</h2>
        <div className="link-grid">
          <Link to="/reports/schools" className="action-card">View School Performance</Link>
          <Link to="/reports/ngo" className="action-card">NGO Collaboration Data</Link>
          <Link to="/reports/policy" className="action-card">Generate Policy Report</Link>
        </div>
      </section>
    </div>
  );
};

export default GovernmentDashboard;
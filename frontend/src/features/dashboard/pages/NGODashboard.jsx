import React from 'react';
import { Link } from 'react-router-dom';
// import './NGODashboard.css'; // Create this file for styles

const NGODashboard = () => {
  return (
    <div className="dashboard ngo-dashboard">
      <header className="dashboard-header">
        <h1>NGO/Organization Dashboard 🌍</h1>
        <p>Coordinate campaigns, track community outreach, and measure your environmental impact.</p>
      </header>

      <section className="dashboard-content">
        <h2>Campaign Management</h2>
        <div className="stats-grid">
          <div className="stat-card"><h3>Active Campaigns</h3><p className="large-number">3</p></div>
          <div className="stat-card"><h3>Participants Engaged</h3><p className="large-number">3,200</p></div>
          <div className="stat-card"><h3>Impact Units Saved</h3><p className="large-number">10K</p></div>
        </div>
      </section>

      <section className="dashboard-actions">
        <h2>Action Center</h2>
        <div className="link-grid">
          <Link to="/campaigns/create" className="action-card">Create New Campaign</Link>
          <Link to="/reports/schools" className="action-card">View School Partner Data</Link>
          <Link to="/submissions/review" className="action-card">Review Challenge Submissions</Link>
        </div>
      </section>
    </div>
  );
};

export default NGODashboard;
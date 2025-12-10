import React from 'react';
// import './StudentDashboard.css'; // Create this file for styles

const StudentDashboard = () => {
  return (
    <div className="dashboard student-dashboard">
      <header className="dashboard-header">
        <h1>Welcome Back, Eco-Explorer! 🎓</h1>
        <p>Your journey to making a real environmental impact continues.</p>
      </header>

      <section className="dashboard-summary">
        <h2>Your Progress at a Glance</h2>
        {/* Placeholder for stats: points, badges, completed lessons */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Eco-Points</h3>
            <p className="large-number">1,250</p>
          </div>
          <div className="stat-card">
            <h3>Badges Earned</h3>
            <p className="large-number">8</p>
          </div>
          <div className="stat-card">
            <h3>Next Challenge</h3>
            <p className="text-info">The Recycling Race</p>
          </div>
        </div>
      </section>
      
      <section className="dashboard-actions">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/lessons">Explore New Lessons</a></li>
          <li><a href="/challenges">View Pending Challenges</a></li>
          <li><a href="/leaderboard">Check the Leaderboard</a></li>
        </ul>
      </section>

    </div>
  );
};

export default StudentDashboard;
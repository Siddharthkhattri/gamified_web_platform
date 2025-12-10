import React from 'react';
import { Link } from 'react-router-dom';
// import './ProfilePage.css'; // Create this file for styles

const ProfilePage = () => {
  // Placeholder data - replace with actual user context/state later
  const user = {
    name: 'Eco Explorer',
    email: 'user@example.com',
    role: 'Student',
    points: 2500,
    rank: 123,
    badges: ['Recycling Expert ♻️', 'Water Saver 💧', 'Tree Planter 🌳'],
  };

  return (
    <div className="feature-page profile-page">
      <h1>Hello, {user.name}! 👤</h1>
      <p>View your personal stats, achievements, and manage your account settings.</p>
      
      <section className="profile-details">
        <h2>Account Overview</h2>
        <div className="stats-grid">
          <div className="stat-card"><h3>Role</h3><p className="large-number">{user.role}</p></div>
          <div className="stat-card"><h3>Total Points</h3><p className="large-number">{user.points}</p></div>
          <div className="stat-card"><h3>Current Rank</h3><p className="large-number">#{user.rank}</p></div>
        </div>
        
        <div className="contact-info">
            <p><strong>Email:</strong> {user.email}</p>
            <Link to="/settings" className="btn-small secondary">Edit Profile</Link>
        </div>
      </section>

      <section className="achievements">
        <h2>Achievements & Badges ({user.badges.length} Earned)</h2>
        <div className="badge-grid">
          {user.badges.map((badge, index) => (
            <span key={index} className="badge-item">{badge}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
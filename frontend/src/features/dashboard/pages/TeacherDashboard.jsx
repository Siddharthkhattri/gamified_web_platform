import React from 'react';
// import './TeacherDashboard.css'; // Create this file for styles

const TeacherDashboard = () => {
  return (
    <div className="dashboard teacher-dashboard">
      <header className="dashboard-header">
        <h1>Teacher Dashboard 👨‍🏫</h1>
        <p>Manage your students, create challenges, and track class progress.</p>
      </header>

      <section className="class-summary">
        <h2>Your Classes & Activity</h2>
        {/* Placeholder for class stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Students</h3>
            <p className="large-number">45</p>
          </div>
          <div className="stat-card">
            <h3>Pending Challenges</h3>
            <p className="large-number">3</p>
          </div>
          <div className="stat-card">
            <h3>New Submissions</h3>
            <p className="text-info">12</p>
          </div>
        </div>
      </section>
      
      <section className="dashboard-actions">
        <h2>Action Center</h2>
        <ul>
          <li><a href="/challenges/create">Create New Challenge</a></li>
          <li><a href="/lessons/assign">Assign Lessons</a></li>
          <li><a href="/progress">View Student Progress Reports</a></li>
        </ul>
      </section>

    </div>
  );
};

export default TeacherDashboard;
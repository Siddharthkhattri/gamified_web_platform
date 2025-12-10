import React from 'react';
import { Link } from 'react-router-dom';
// import './LeaderboardPage.css'; // Create this file for styles

const LeaderboardPage = () => {
  // Placeholder data for the leaderboard
  const topStudents = [
    { rank: 1, name: 'Ava Chen', points: 5400, role: 'Student' },
    { rank: 2, name: 'Liam Jones', points: 4950, role: 'Student' },
    { rank: 3, name: 'Mia Patel', points: 4700, role: 'Teacher' },
    { rank: 4, name: 'Noah Kim', points: 4120, role: 'Student' },
    { rank: 5, name: 'Sofia Garcia', points: 3880, role: 'Student' },
  ];

  return (
    <div className="feature-page leaderboard-page">
      <h1>EcoLearn Leaderboard 🏅</h1>
      <p>See who's making the biggest environmental impact this month! Rankings are based on total Eco-Points earned.</p>
      
      <section className="top-ranks">
        <h2>Top Eco-Explorers</h2>
        
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User Name</th>
              <th>Role</th>
              <th>Eco-Points</th>
            </tr>
          </thead>
          <tbody>
            {topStudents.map((user) => (
              <tr key={user.rank} className={user.rank <= 3 ? 'top-three' : ''}>
                <td>{user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="your-rank">
            <p>Your Rank: #123 (2,100 Points)</p>
            <Link to="/profile" className="btn-small">View Your Profile</Link>
        </div>
      </section>
    </div>
  );
};

export default LeaderboardPage;
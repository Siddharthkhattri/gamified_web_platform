import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RoleSelectionPage.css';

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'student',
      title: 'Student',
      icon: '🎓',
      description: 'Take challenges, earn eco-points, and compete on leaderboards',
      color: '#0F7938'
    },
    {
      id: 'teacher',
      title: 'Teacher / Eco-Club Coordinator',
      icon: '👨‍🏫',
      description: 'Create challenges, guide students, and earn recognition',
      color: '#00897B'
    },
    {
      id: 'school',
      title: 'School / College',
      icon: '🏫',
      description: 'Manage multiple participants and track institutional impact',
      color: '#FF9800'
    },
    {
      id: 'ngo',
      title: 'NGO / Organization',
      icon: '🌍',
      description: 'Run campaigns and coordinate environmental initiatives',
      color: '#9C27B0'
    },
    {
      id: 'parent',
      title: 'Parent / Guardian',
      icon: '👨‍👩‍👧‍👦',
      description: 'Monitor child progress and encourage participation',
      color: '#FF5722'
    },
    {
      id: 'government',
      title: 'Government Official',
      icon: '🏛️',
      description: 'View state-wide statistics and environmental impact data',
      color: '#2196F3'
    }
  ];

  return (
    <div className="role-selection-page">
      <div className="role-selection-container">
        <div className="role-header">
          <h1>Choose Your Role</h1>
          <p>Select how you'd like to participate in transforming environmental education</p>
        </div>

        <div className="roles-grid">
          {roles.map((role) => (
            <Link
              key={role.id}
              to={`/register/${role.id}`}
              className="role-card"
              style={{ '--role-color': role.color }}
            >
              <div className="role-icon">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <div className="role-arrow">→</div>
            </Link>
          ))}
        </div>

        <div className="role-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
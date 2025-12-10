import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrophy, FaBook, FaTasks, FaUserCircle, FaSignOutAlt, FaChartBar, FaPlus } from 'react-icons/fa';
import { useAuth } from '../../../context/AuthContext'; 
// import './Sidebar.css';

const getNavigationLinks = (role) => {
  const baseLinks = [
    { name: 'Dashboard', path: `/dashboard/${role}`, icon: FaUserCircle },
    { name: 'Lessons', path: '/lessons', icon: FaBook },
    { name: 'Challenges', path: '/challenges', icon: FaTasks },
    { name: 'Leaderboard', path: '/leaderboard', icon: FaTrophy },
    { name: 'Profile', path: '/profile', icon: FaUserCircle },
  ];

  if (role === 'teacher') {
    return [
      ...baseLinks,
      { name: 'Student Progress', path: '/progress', icon: FaChartBar },
      { name: 'Create Challenge', path: '/challenges/create', icon: FaPlus },
    ];
  }
  // Simplified for other roles for brevity
  
  return baseLinks;
};

const Sidebar = ({ userRole }) => {
  const { logout } = useAuth();
  const role = userRole || 'student'; // Fallback
  const navLinks = getNavigationLinks(role);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo-icon">🌿</span>
        <h3>{role.toUpperCase()} Portal</h3>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              >
                <link.icon className="nav-icon" />
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="logout-item">
            <button onClick={logout} className="nav-link btn-logout-sidebar">
              <FaSignOutAlt className="nav-icon" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
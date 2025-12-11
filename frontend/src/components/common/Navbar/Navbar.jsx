import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

// Using a placeholder for useAuth since the user's navbar.jsx didn't use it, 
// but the app structure requires it for full functionality.
const useAuth = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return { 
    user, 
    // Placeholder function for better integration
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('User logged out.');
    }
  };
};

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">EcoQuest</span>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/lessons" className="nav-link">Lessons</Link></li>
          <li><Link to="/leaderboard" className="nav-link">Leaderboard</Link></li>
          <li><Link to="#contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Right Side Actions */}
        <div className="nav-actions">
          {user ? (
            <>
              <span className="user-welcome">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </>
          ) : (
            <>\
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/register" className="btn-register btn-primary">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
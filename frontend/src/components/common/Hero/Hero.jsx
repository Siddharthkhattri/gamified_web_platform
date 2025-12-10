import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Environmental Education
              <span className="highlight"> Into Real Action</span>
            </h1>
            
            <p className="hero-subtitle">
              A gamified platform that turns theoretical lessons into practical environmental action. Earn points, collect badges, and make a real difference in your community.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Students Engaged</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Real Tasks Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">2.5M</span>
                <span className="stat-label">Eco-Points Earned</span>
              </div>
            </div>

            <div className="hero-buttons">
              <Link to="/register" className="btn-primary">
                Start Your Journey
                <span className="btn-arrow">→</span>
              </Link>
              <a href="#features" className="btn-secondary">
                ▶ Watch Demo
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="illustration-content">
                {/* Visual elements for an engaging landing page */}
                <div className="leaf-animation leaf-1">🍃</div>
                <div className="leaf-animation leaf-2">🌱</div>
                <div className="leaf-animation leaf-3">🌿</div>
                <div className="circle-gradient"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
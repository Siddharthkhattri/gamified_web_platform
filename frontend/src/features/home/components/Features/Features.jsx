import React from 'react';
// Create Features.css if you start styling this component
// import './Features.css'; 

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Key Features</h2>
        <p>This is a placeholder for the Features component.</p>
        {/* Placeholder feature cards */}
        <div className="grid-3">
          <div className="card">Gamified Learning</div>
          <div className="card">Real-World Challenges</div>
          <div className="card">Leaderboards & Rewards</div>
        </div>
      </div>
    </section>
  );
};

export default Features;
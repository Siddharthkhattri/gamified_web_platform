import React from 'react';
// Create HowItWorks.css if you start styling this component
// import './HowItWorks.css'; 

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2>How It Works</h2>
        <p>This is a placeholder for the How It Works component.</p>
        {/* Placeholder steps */}
        <div className="grid-3">
          <div className="step-card">1. Learn Eco-Lessons</div>
          <div className="step-card">2. Complete a Challenge</div>
          <div className="step-card">3. Earn Points & Badges</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
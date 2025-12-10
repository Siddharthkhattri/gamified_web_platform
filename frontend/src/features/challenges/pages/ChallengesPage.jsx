import React from 'react';
import { Link } from 'react-router-dom';
// import './ChallengesPage.css'; // Create this file for styles

const ChallengesPage = () => {
  return (
    <div className="feature-page challenges-page">
      <h1>Real-World Eco-Challenges 🏆</h1>
      <p>Put your knowledge into action by completing tasks and submitting proof to earn maximum Eco-Points and badges!</p>
      
      <section className="challenge-list">
        <h2>Active Challenges</h2>
        
        <div className="grid-2">
          <div className="challenge-card active">
            <h3>The Great Recycling Race</h3>
            <p>Challenge: Log 5 new items recycled this week that weren't typically recycled before.</p>
            <div className="challenge-meta">Points: **+200** | Deadline: 3 days</div>
            <Link to="/challenges/1" className="btn-small primary">Start Now</Link>
          </div>
          
          <div className="challenge-card active">
            <h3>Home Energy Audit</h3>
            <p>Challenge: Identify 3 sources of energy waste in your home and suggest a solution for each.</p>
            <div className="challenge-meta">Points: **+350** | Deadline: 7 days</div>
            <Link to="/challenges/2" className="btn-small primary">Start Now</Link>
          </div>
          
          <div className="challenge-card completed">
            <h3>Water Saver Week</h3>
            <p>Status: **Completed** 🎉</p>
            <div className="challenge-meta">Points Earned: **+150**</div>
            <Link to="/challenges/3" className="btn-small secondary">View Details</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengesPage;
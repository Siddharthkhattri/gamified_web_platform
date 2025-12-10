import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css'; // Add a CSS file if needed
import Hero from '../components/common/Hero/Hero';
import Features from '../components/Features/Features';
import HowItWorks from '../components/HowItWorks/HowItWorks';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <HowItWorks />
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Environmental Education?</h2>
            <p>Join thousands of students, teachers, and organizations making a real environmental impact.</p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-btn primary">Get Started Now</Link>
              <a href="#features" className="cta-btn secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
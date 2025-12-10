import React from 'react';
// import './Features.css';

const featuresData = [
    { title: "Gamified Learning", icon: "🕹️", description: "Earn points, level up, and unlock badges for every completed eco-task." },
    { title: "Real-World Impact", icon: "🌎", description: "Convert theoretical knowledge into verifiable actions like cleanups or energy saving." },
    { title: "Role-Based Dashboards", icon: "👤", description: "Customized views for students, teachers, and officials to track relevant progress and impact." },
    { title: "Challenge Creation", icon: "📝", description: "Teachers and NGOs can create custom challenges tailored to local curricula and needs." },
];

const Features = () => {
    return (
        <section id="features" className="features-section">
            <div className="container">
                <h2 className="section-title">Why EcoLearn?</h2>
                <p className="section-subtitle">A platform built to merge education with practical conservation.</p>
                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
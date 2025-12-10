import React from 'react';
// import './HowItWorks.css';

const steps = [
    { number: 1, title: "Select Role", description: "Choose to register as a Student, Teacher, NGO, or Official." },
    { number: 2, title: "Take a Lesson", description: "Complete interactive lessons to build ecological knowledge." },
    { number: 3, title: "Accept a Challenge", description: "Pick a real-world task, like planting a tree or reducing plastic use." },
    { number: 4, title: "Submit Proof", description: "Upload evidence of your action (photo/data) for verification." },
    { number: 5, title: "Earn Rewards", description: "Once verified, earn Eco-Points and collectible badges." },
    { number: 6, title: "Climb Leaderboard", description: "Compete with peers and organizations to top the environmental charts." },
];

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">From lesson to real-world impact in 6 easy steps.</p>
                <div className="steps-grid">
                    {steps.map((step) => (
                        <div key={step.number} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
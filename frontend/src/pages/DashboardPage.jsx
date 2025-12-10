import React from 'react';
import { useAuth } from '../context/AuthContext';
// import './DashboardPage.css';

const DashboardPage = () => {
    const { user } = useAuth();

    if (!user) {
        return <div className="loading-state">Loading dashboard...</div>;
    }

    return (
        <div className="dashboard-page container">
            <header className="dashboard-header">
                <h1>Welcome, {user.name || user.email}!</h1>
                <p className="role-indicator">You are currently logged in as a <strong>{user.role.toUpperCase()}</strong>.</p>
            </header>

            <section className="dashboard-summary">
                <h2>Your Eco-Impact Summary</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Total Eco-Points</h3>
                        <p className="stat-number">1,250 🌿</p>
                    </div>
                    <div className="stat-card">
                        <h3>Current Streak</h3>
                        <p className="stat-number">14 Days 🔥</p>
                    </div>
                    <div className="stat-card">
                        <h3>Badges Earned</h3>
                        <p className="stat-number">5 ⭐</p>
                    </div>
                </div>
            </section>
            
            <section className="dashboard-actions">
                <h2>Quick Actions</h2>
                {user.role === 'student' && (
                    <div className="action-links">
                        <Link to="/lessons">Continue Learning</Link>
                        <Link to="/challenges/new">View New Challenges</Link>
                        <Link to="/actions/record">Record New Action</Link>
                    </div>
                )}
                {user.role === 'teacher' && (
                    <div className="action-links">
                        <Link to="/challenges/create">Create New Challenge</Link>
                        <Link to="/progress/view">View Student Progress</Link>
                    </div>
                )}
            </section>
        </div>
    );
};

export default DashboardPage;
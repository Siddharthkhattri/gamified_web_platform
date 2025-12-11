import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import './DashboardLayout.css'; 

const DashboardLayout = () => {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return <div className="loading-screen">Loading application...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-layout">
      <main className="dashboard-main-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default DashboardLayout;
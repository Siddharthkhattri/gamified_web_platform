import React from 'react';
// import './AuthLayout.css'; // Add minimal CSS for centering

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      {/* Minimal Header/Logo can be placed here */}
      <div className="auth-container">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
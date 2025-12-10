import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
// import api from '../../../../services/apiService'; // Use for real API call
// import './RegisterPage.css';

const RegisterPage = () => {
  const { role: urlRole } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState(urlRole || 'student');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      return setError('All fields are required.');
    }

    // --- Placeholder Register Logic ---
    try {
        // In a real application:
        // const response = await api.post('/auth/register', { name, email, password, role });
        // const { user, token } = response.data;
        
        // Mock data for immediate functionality:
        const user = { id: 2, name, email, role };
        const token = 'mock-jwt-token-456';

        login(user, token); // Register auto-logs in
        
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. The user may already exist.');
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register as a {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
        <p className="auth-subtitle">Finalizing registration for role: <strong>{role}</strong></p>
        
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="btn-primary">Register Account</button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
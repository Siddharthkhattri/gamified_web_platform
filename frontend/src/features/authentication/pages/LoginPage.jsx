import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // <-- NEW IMPORT

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // <-- Added state for error message

  const navigate = useNavigate();
  const { login } = useAuth(); // <-- USE THE REAL HOOK

  const handleLogin = async (event) => {
    event.preventDefault(); 
    setError(null); // Clear previous errors

    try {
      // 1. **Call the API function**
      const userData = await login(email, password); 
      
      // 2. **Handle Success & Redirection**
      const dashboardPath = '/dashboard/' + userData.role;
      navigate(dashboardPath, { replace: true });
      
    } catch (err) {
      // 3. **Handle Error**
      console.error('Login failed:', err);
      setError(err.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container login-container">
        <h1>Sign In to EcoLearn</h1>
        <p>Welcome back! Please enter your credentials below.</p>
        
        <form className="auth-form login-form" onSubmit={handleLogin}>
          {error && <p className="error-message" style={{color: 'red'}}>{error}</p>} {/* Display error */}
          
          {/* ... (rest of form inputs remain the same, bound to state) ... */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required 
                   value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required 
                   value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
        
        <p className="link-info">
          Don't have an account? <Link to="/roles">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
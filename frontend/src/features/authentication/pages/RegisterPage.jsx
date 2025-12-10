import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // <-- NEW IMPORT

const RegisterPage = () => {
  const { role } = useParams();
  const roleName = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User';
  const title = `Register as a ${roleName}`;
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // <-- Added state for error message
  
  const navigate = useNavigate();
  const { register } = useAuth(); // <-- USE THE REAL HOOK

  const handleRegister = async (event) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    try {
      // 1. **Call the API function**
      await register({ name, email, password, role }); 
      
      // 2. **Handle Success & Redirection**
      alert('Registration successful! Please sign in with your new account.');
      navigate('/login', { replace: true });

    } catch (err) {
      // 3. **Handle Error**
      console.error('Registration failed:', err);
      setError(err.message || 'Registration failed due to a server error.');
    }
  };

  return (
    <div className="auth-page register-page">
      <div className="auth-container register-container">
        <h1>{title}</h1>
        <p>Join the movement! Fill out the form below to create your account.</p>
        
        <form className="auth-form register-form" onSubmit={handleRegister}>
          {error && <p className="error-message" style={{color: 'red'}}>{error}</p>} {/* Display error */}

          {/* ... (rest of form inputs remain the same, bound to state) ... */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required 
                   value={name} onChange={(e) => setName(e.target.value)} />
          </div>
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
          <button type="submit" className="btn-primary">Create Account</button>
        </form>
        
        <p className="link-info">
          Already have an account? <Link to="/login">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
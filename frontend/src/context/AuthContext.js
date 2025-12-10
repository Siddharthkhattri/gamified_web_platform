import React, { createContext, useContext, useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests

// --- Configuration ---
const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
// --- End Configuration ---

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  
  // ==========================================
  // 1. REGISTER FUNCTION
  // ==========================================
  const register = async ({ name, email, password, role }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
        role,
      });

      // Assuming your backend responds with a success message/status
      if (response.status === 201) {
        // Registration successful, but usually not logged in yet
        return true; 
      }
      return false;
      
    } catch (error) {
      console.error('Registration API error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Registration failed.');
    }
  };

  // ==========================================
  // 2. LOGIN FUNCTION
  // ==========================================
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      const { token, user: userData } = response.data;

      // Save token and user data to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Update state
      setUser(userData);
      setIsAuthenticated(true);
      
      // Return user data (especially role for dashboard redirection)
      return userData; 

    } catch (error) {
      console.error('Login API error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Invalid credentials.');
    }
  };

  // ==========================================
  // 3. LOGOUT FUNCTION
  // ==========================================
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
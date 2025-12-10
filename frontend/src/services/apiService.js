import axios from 'axios';

// The environment variable is read from your provided .env file
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for secure HTTP-Only cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach the token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor for global error handling (e.g., refreshing token on 401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Logic for handling expired token or redirecting to login
      // NOTE: For a refresh token flow, you'd trigger that here.
      console.error('Authentication expired or failed.');
    }
    return Promise.reject(error);
  }
);

export default api;
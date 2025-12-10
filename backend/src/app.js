// backend/src/app.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const initializeDatabase = require('./database/init');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./middleware/errorHandler');

// Route Imports
const authRoutes = require('./api/authentication/auth.routes');
const usersRoutes = require('./api/users/users.routes');
const lessonsRoutes = require('./api/lessons/lessons.routes');
const challengesRoutes = require('./api/challenges/challenges.routes');
const gamificationRoutes = require('./api/gamification/gamification.routes');
const actionsRoutes = require('./api/actions/actions.routes');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Initialize database (run once on server startup)
initializeDatabase().catch(err => {
  console.error('Database initialization failed:', err.message);
  // Do not exit here; let the server start and rely on connection pool to fail requests
});

// API Routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Welcome to the EcoLearn API!', 
    status: 'Ready'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/lessons', lessonsRoutes);
app.use('/api/challenges', challengesRoutes);
app.use('/api/gamification', gamificationRoutes);
app.use('/api/actions', actionsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Handle unhandled routes (404)
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error handling middleware (must be last)
app.use(globalErrorHandler);

module.exports = app;
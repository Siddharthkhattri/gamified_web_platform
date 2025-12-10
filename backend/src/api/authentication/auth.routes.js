// backend/src/api/authentication/auth.routes.js

const express = require('express');
const router = express.Router();
const authController = require('./auth.controllers'); 
const authMiddleware = require('../../middleware/auth'); 

// Public Routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Protected Route Example
router.get('/me', authMiddleware.protect, authController.getMe); 

module.exports = router;
// backend/src/api/users/users.routes.js

const express = require('express');
const router = express.Router();
// const usersController = require('./users.controllers'); // Will be used later
// const authMiddleware = require('../../middleware/auth'); // Will be used later

// Example: Get user profile by ID (requires login)
router.get('/:id', (req, res) => {
    // This route will eventually use authMiddleware and fetch user data
    res.json({ message: `User route ready for user ID: ${req.params.id}` });
});

// IMPORTANT: Export the router instance directly!
module.exports = router;
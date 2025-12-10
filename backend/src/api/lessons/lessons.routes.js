// backend/src/api/lessons/lessons.routes.js

const express = require('express');
const router = express.Router();
// const lessonsController = require('./lessons.controllers'); // Will be used later

// Example: Get all lessons (public)
router.get('/', (req, res) => {
    res.json({ message: 'Lessons route ready, awaiting implementation.' });
});

// IMPORTANT: Export the router instance directly!
module.exports = router;
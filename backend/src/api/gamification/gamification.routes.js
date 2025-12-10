const express = require('express');
const router = express.Router();
const pool = require('../../database/connection');

// Get leaderboard for all users by role
router.get('/leaderboard/:role', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.id, u.name, u.role, p.total_eco_points, p.streak_days,
             ROW_NUMBER() OVER (ORDER BY p.total_eco_points DESC) as rank
      FROM users u
      LEFT JOIN points p ON u.id = p.user_id
      WHERE u.role = $1
      ORDER BY p.total_eco_points DESC
      LIMIT 100
    `, [req.params.role]);
    
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get global leaderboard
router.get('/global', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.id, u.name, u.role, p.total_eco_points, p.streak_days,
             ROW_NUMBER() OVER (ORDER BY p.total_eco_points DESC) as rank
      FROM users u
      LEFT JOIN points p ON u.id = p.user_id
      ORDER BY p.total_eco_points DESC
      LIMIT 100
    `);
    
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user achievements
router.get('/achievements/:userId', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM achievements 
       WHERE user_id = $1
       ORDER BY achievement_date DESC`,
      [req.params.userId]
    );
    
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Award achievement/badge
router.post('/achievements', async (req, res) => {
  try {
    const { userId, badgeName, badgeIcon, description } = req.body;
    
    const result = await pool.query(
      `INSERT INTO achievements (user_id, badge_name, badge_icon, description)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [userId, badgeName, badgeIcon, description]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user points
router.get('/points/:userId', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM points WHERE user_id = $1',
      [req.params.userId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Points record not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user points
router.put('/points/:userId', async (req, res) => {
  try {
    const { totalEcoPoints, streakDays } = req.body;
    
    const result = await pool.query(
      `UPDATE points 
       SET total_eco_points = $1, streak_days = $2, updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $3
       RETURNING *`,
      [totalEcoPoints, streakDays, req.params.userId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Points record not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
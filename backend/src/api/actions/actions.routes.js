const express = require('express');
const router = express.Router();
const pool = require('../../database/connection');
const { calculateEcoPoints } = require('../../utils/pointsCalculator');

// Get all real-world actions
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT ua.*, u.name, u.role
      FROM user_actions ua
      LEFT JOIN users u ON ua.user_id = u.id
      ORDER BY ua.action_date DESC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Record user action
router.post('/', async (req, res) => {
  try {
    const { userId, actionType, description, impactMetric, impactValue } = req.body;
    
    // Calculate eco points based on action
    const ecoPoints = calculateEcoPoints(actionType, impactValue);
    
    const result = await pool.query(
      `INSERT INTO user_actions (user_id, action_type, description, eco_points_earned, impact_metric, impact_value, verified)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [userId, actionType, description, ecoPoints, impactMetric, impactValue, false]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify action (Government Official)
router.put('/:id/verify', async (req, res) => {
  try {
    const { verifiedBy, verified } = req.body;
    
    const result = await pool.query(
      `UPDATE user_actions 
       SET verified = $1, verified_by = $2, updated_at = CURRENT_TIMESTAMP
       WHERE id = $3
       RETURNING *`,
      [verified, verifiedBy, req.params.id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Action not found' });
    }
    
    // If verified, update user points
    if (verified) {
      const action = result.rows[0];
      await pool.query(
        `UPDATE points 
         SET total_eco_points = total_eco_points + $1
         WHERE user_id = $2`,
        [action.eco_points_earned, action.user_id]
      );
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get impact statistics
router.get('/impact/statistics', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        action_type,
        COUNT(*) as total_actions,
        SUM(impact_value) as total_impact,
        AVG(impact_value) as avg_impact
      FROM user_actions
      WHERE verified = true
      GROUP BY action_type
    `);
    
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
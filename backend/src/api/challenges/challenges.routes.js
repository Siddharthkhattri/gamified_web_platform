const express = require('express');
const router = express.Router();
const pool = require('../../database/connection');

// Get all challenges
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.*, u.name as created_by_name 
      FROM challenges c
      LEFT JOIN users u ON c.created_by = u.id
      ORDER BY c.created_at DESC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single challenge
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT c.*, u.name as created_by_name 
       FROM challenges c
       LEFT JOIN users u ON c.created_by = u.id
       WHERE c.id = $1`,
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create challenge (Teacher/NGO)
router.post('/', async (req, res) => {
  try {
    const { title, description, objective, difficultyLevel, ecoPointsReward, badgeReward, createdBy } = req.body;
    
    const result = await pool.query(
      `INSERT INTO challenges (title, description, objective, difficulty_level, eco_points_reward, badge_reward, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [title, description, objective, difficultyLevel, ecoPointsReward, badgeReward, createdBy]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update challenge
router.put('/:id', async (req, res) => {
  try {
    const { title, description, objective, difficultyLevel, ecoPointsReward, badgeReward } = req.body;
    
    const result = await pool.query(
      `UPDATE challenges 
       SET title = $1, description = $2, objective = $3, difficulty_level = $4, 
           eco_points_reward = $5, badge_reward = $6, updated_at = CURRENT_TIMESTAMP
       WHERE id = $7
       RETURNING *`,
      [title, description, objective, difficultyLevel, ecoPointsReward, badgeReward, req.params.id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete challenge
router.delete('/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM challenges WHERE id = $1 RETURNING id', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    res.json({ message: 'Challenge deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
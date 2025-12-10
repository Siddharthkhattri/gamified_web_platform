// backend/src/database/init.js

require('dotenv').config();
const pool = require('./connection');

// Database initialization and migrations
const initializeDatabase = async () => {
  try {
    console.log('Initializing database...');

    // ===============================================
    // 1. CREATE TABLES
    // ===============================================

    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL, -- FIX: Uses 'password' column name
        name VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL,
        phone VARCHAR(20),
        school_name VARCHAR(255),
        organization_name VARCHAR(255),
        state VARCHAR(100),
        city VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create lessons table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS lessons (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        content TEXT,
        category VARCHAR(100),
        difficulty_level VARCHAR(50),
        eco_points INTEGER DEFAULT 10,
        created_by INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create challenges table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS challenges (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        objective TEXT,
        difficulty_level VARCHAR(50),
        eco_points INTEGER DEFAULT 50,
        type VARCHAR(50), 
        created_by INTEGER REFERENCES users(id),
        is_active BOOLEAN DEFAULT TRUE,
        due_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create user_actions table (for tracking real-world actions)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_actions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        action_type VARCHAR(100),
        description TEXT,
        eco_points_earned INTEGER,
        impact_metric VARCHAR(100),
        impact_value DECIMAL(10, 2),
        verified BOOLEAN DEFAULT FALSE,
        verified_by INTEGER REFERENCES users(id),
        action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create points table (for gamification stats)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS points (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        total_eco_points INTEGER DEFAULT 0,
        streak_days INTEGER DEFAULT 0,
        last_activity_date TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id)
      )
    `);

    // ===============================================
    // 2. CREATE VIEWS (Leaderboard Fix)
    // ===============================================

    // FIX: Drop the view explicitly to prevent column renaming errors
    await pool.query('DROP VIEW IF EXISTS leaderboard');

    // Create leaderboard view
    await pool.query(`
      CREATE VIEW leaderboard AS
      SELECT 
        u.id,
        u.name,
        u.role,
        p.total_eco_points,
        p.streak_days,
        ROW_NUMBER() OVER (PARTITION BY u.role ORDER BY p.total_eco_points DESC) as role_rank,
        RANK() OVER (ORDER BY p.total_eco_points DESC) as global_rank
      FROM users u
      LEFT JOIN points p ON u.id = p.user_id
      ORDER BY p.total_eco_points DESC
    `);

    console.log('✓ Database initialized successfully');
  } catch (error) {
    console.error('✗ Database initialization error:', error.message);
    process.exit(1);
  }
};

module.exports = initializeDatabase;
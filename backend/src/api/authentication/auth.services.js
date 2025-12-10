// backend/src/api/authentication/auth.services.js

const bcrypt = require('bcryptjs');
const pool = require('../../database/connection');
const { generateToken } = require('../../utils/tokenUtils');
const AppError = require('../../utils/AppError');

exports.registerUser = async (userData) => {
    const client = await pool.connect();
    
    try {
        const { name, email, password, role, phone, schoolName, organizationName, state, city } = userData;

        // Simple validation
        if (!email || !password || !name || !role) {
            throw new AppError('Missing required registration fields.', 400);
        }
        
        await client.query('BEGIN'); 

        // 1. Check if user already exists
        const userExists = await client.query('SELECT id FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            await client.query('ROLLBACK');
            throw new AppError('Email already registered', 400);
        }

        // 2. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Insert user - NOTE: Uses 'password' column name to match init.js schema
        const result = await client.query(
            `INSERT INTO users (email, password, name, role, phone, school_name, organization_name, state, city)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
             RETURNING id, email, name, role, created_at`,
            [email, hashedPassword, name, role, phone || null, schoolName || null, organizationName || null, state || null, city || null]
        );
        const newUser = result.rows[0];

        // 4. Initialize points for the new user (Crucial for gamification)
        await client.query(
            'INSERT INTO points (user_id, total_eco_points, streak_days) VALUES ($1, $2, $3)',
            [newUser.id, 0, 0]
        );

        await client.query('COMMIT'); 
        
        return newUser;
        
    } catch (error) {
        await client.query('ROLLBACK');
        // If it's not a controlled AppError, wrap it as a 500
        if (!(error instanceof AppError)) {
            throw new AppError('Failed to register user due to a server error.', 500);
        }
        throw error;
    } finally {
        client.release();
    }
};

exports.loginUser = async (email, password) => {
    // 1. Find user by email, fetching the hashed password
    const userResult = await pool.query('SELECT id, email, password, name, role FROM users WHERE email = $1', [email]);
    const user = userResult.rows[0];

    if (!user) {
        throw new AppError('Invalid credentials (User not found)', 401);
    }
    
    // 2. Compare password (using user.password which contains the hash)
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new AppError('Invalid credentials (Password mismatch)', 401);
    }
    
    // 3. Generate JWT
    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    return { 
        user: { id: user.id, email: user.email, name: user.name, role: user.role }, 
        token 
    };
};

exports.findUserById = async (id) => {
    const result = await pool.query('SELECT id, email, name, role FROM users WHERE id = $1', [id]);
    return result.rows[0];
};
// backend/src/utils/tokenUtils.js

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

/**
 * Generates a JWT token for a user.
 */
exports.generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });
};

/**
 * Verifies and decodes a JWT token.
 */
exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
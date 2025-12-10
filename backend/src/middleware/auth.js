// backend/src/middleware/auth.js

const { verifyToken } = require('../utils/tokenUtils');
const authService = require('../api/authentication/auth.services'); 
const AppError = require('../utils/AppError');

/**
 * Middleware to protect routes by verifying JWT token.
 */
exports.protect = async (req, res, next) => {
    let token;

    // 1. Get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    try {
        // 2. Verify token
        const decoded = verifyToken(token);
        
        // 3. Check if user still exists in DB
        const currentUser = await authService.findUserById(decoded.id);

        if (!currentUser) {
            return next(new AppError('The user belonging to this token no longer exists.', 401));
        }

        // 4. Grant access to protected route
        req.user = currentUser;
        next();

    } catch (err) {
        return next(new AppError('Invalid or expired token. Please log in again.', 401));
    }
};

/**
 * Middleware to restrict access based on user role.
 */
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        // req.user is guaranteed to be set if this middleware follows 'protect'
        if (!req.user || !roles.includes(req.user.role)) {
            return next(
                new AppError('You do not have permission to perform this action', 403)
            );
        }
        next();
    };
};
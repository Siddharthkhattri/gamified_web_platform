// backend/src/api/authentication/auth.controllers.js

const authService = require('./auth.services');

// Register a new user
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role, phone, schoolName, organizationName, state, city } = req.body;

    const newUser = await authService.registerUser({ 
      name, email, password, role, phone, schoolName, organizationName, state, city 
    });

    res.status(201).json({ 
      message: 'User registered successfully. Please log in.',
      user: { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role }
    });
    
  } catch (error) {
    next(error); 
  }
};

// Log a user in
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await authService.loginUser(email, password);

    res.status(200).json({ 
      message: 'Login successful',
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role }
    });

  } catch (error) {
    next(error); 
  }
};

// Logout (mostly client-side but good to have)
exports.logout = (req, res) => {
  res.json({ message: 'Logout successful (token should be removed client-side)' });
};

// Get current logged-in user details (used by protected routes)
exports.getMe = (req, res) => {
  res.json({ user: req.user });
};
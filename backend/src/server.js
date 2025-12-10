// backend/src/server.js
const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(' ');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║  Gamified Environmental Platform - Backend Server      ║');
  console.log(`║  ✓ Server is running on port ${PORT}                     ║`);
  console.log(`║  ✓ Environment: ${process.env.NODE_ENV}                  ║`);
  console.log(`║  ✓ API Base URL: http://localhost:${PORT}/api            ║`);
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(' ');
});

// Handle unhandled rejections (e.g., failed DB connection)
process.on('unhandledRejection', err => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
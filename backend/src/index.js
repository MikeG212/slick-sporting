require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

// console.log(process.env);

const server = createServer();

// TODO USE express middleware to handle JWT
// TODO use express middleware to populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, (details) => {
  console.log(`Server is now running on http://localhost${details.port}`);
});

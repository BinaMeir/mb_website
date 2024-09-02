const express = require('express');
const app = express();
const path = require('path');
require('./db/mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;


// Import your router module
const mainRouter = require('./routes/mainRouter');

app.use(cors({
  origin: 'http://localhost:3000',         // Local development
  optionsSuccessStatus: 200
}));

console.log('CORS origin:', process.env.NODE_ENV === 'production' ? 'https://your-app.herokuapp.com' : process.env.CLIENT_ORIGIN);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('CLIENT_ORIGIN:', process.env.CLIENT_ORIGIN);

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (if needed)
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  console.log('Request headers:', req.headers); // Verify Content-Type
  console.log('Request body:', req.body); // This should not be undefined
  next(); // Proceed to the next middleware/route
});


// Use the router for handling routes
app.use('/', mainRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/mb_website/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/mb_website/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

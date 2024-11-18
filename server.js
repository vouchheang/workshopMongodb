const express = require('express');
const connectDB = require('./config/db');
const app = express();
const authRoute = require('./routes/authRoute');

// Middleware to parse JSON request bodies
app.use(express.json()); // This is required to handle JSON requests

connectDB();

// Routes
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

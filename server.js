require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/logs', logRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
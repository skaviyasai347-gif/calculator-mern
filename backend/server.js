const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const calculationRoutes = require('./routes/calculationRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes - This links the '/calculate' URL to your routes file
app.use('/calculate', calculationRoutes);

// MongoDB connection (Replace with your actual URI)
mongoose.connect('mongodb://127.0.0.1:27017/calculatorDB')
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error(err));

app.listen(5000, () => console.log("Backend running on port 5000"));
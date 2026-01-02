const express = require('express');
const router = express.Router();
const Calculation = require('../models/Calculation');

// GET all history from MongoDB (This is what makes it permanent on refresh)
router.get('/', async (req, res) => {
    try {
        const history = await Calculation.find().sort({ createdAt: -1 });
        res.json(history);
    } catch (err) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

// POST a new calculation to MongoDB
router.post('/', async (req, res) => {
    try {
        const { expression } = req.body;
        // Basic calculation logic
        const result = eval(expression).toString(); 
        
        const newEntry = new Calculation({ expression, result });
        await newEntry.save();
        
        res.status(201).json({ result });
    } catch (err) {
        res.status(400).json({ message: "Invalid calculation" });
    }
});

module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Student = require('./models/Student');

const app = express();
const url = process.env.MONGODB_URI;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON payloads

// Connect to MongoDB
mongoose.connect(url)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// API endpoint to handle form submissions
app.post('/api/students', async (req, res) => {
    try {
        const { name, mail, eventname} = req.body;
        const newStudent = new Student({ name, mail , event:eventname});
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save student data' });
    }
});

app.get('/', (req, res) => {
    res.json({ msg: "Connection successful" });
});

app.listen(8006, () => {
    console.log("App running on port 8006");
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ad-coupon-service');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB();

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Import Routes
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

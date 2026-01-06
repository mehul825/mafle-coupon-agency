const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ad-coupon-service');
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const createAdmin = async () => {
    await connectDB();
    try {
        const email = 'admin@mafle.com';
        const password = 'admin'; // Keeping it simple for local dev

        const userExists = await User.findOne({ email });

        if (userExists) {
            console.log('Admin user already exists');
        } else {
            const user = await User.create({
                name: 'Admin User',
                email,
                password,
                isAdmin: true
            });
            console.log(`Admin created: ${user.email} / ${password}`);
        }
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

createAdmin();

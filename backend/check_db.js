const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Contact = require('./models/Contact'); // Adjust path as needed

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ad-coupon-service');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const checkContacts = async () => {
    await connectDB();
    try {
        const contacts = await Contact.find({});
        console.log("\n--- CONTACTS IN DATABASE ---");
        if (contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            console.log(JSON.stringify(contacts, null, 2));
        }
        console.log("----------------------------\n");
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

checkContacts();

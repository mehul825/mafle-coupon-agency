const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import Contact model

// Submit Contact Form
router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const contact = await Contact.create({
            name,
            email,
            phone,
            message,
        });

        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

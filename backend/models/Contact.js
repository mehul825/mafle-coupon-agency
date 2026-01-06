const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    status: { type: String, default: 'New' } // New, Contacted, Resolved
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);

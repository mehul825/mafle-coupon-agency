const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String }, // Can be a URL or an icon class name
    features: [{ type: String }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);

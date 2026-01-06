const mongoose = require('mongoose');

const partnerSchema = mongoose.Schema({
    name: { type: String, required: true },
    logoUrl: { type: String, required: true },
    websiteUrl: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Partner', partnerSchema);

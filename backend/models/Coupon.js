const mongoose = require('mongoose');

const couponSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    code: { type: String, required: true, unique: true },
    discountAmount: { type: String, required: true }, // e.g. "20% OFF" or "₹500"
    expiryDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Coupon', couponSchema);

// models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", paymentSchema);

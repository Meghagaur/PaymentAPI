// index.js
const cors = require('cors');
const express = require("express");
express.use(cors())
const bodyParser = require("body-parser");
const connectDB = require("./db");
const Payment = require("./Payment");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Payment Route
app.post("/api/payments", async (req, res) => {
  const { userId, paymentMethod, amount } = req.body;

  try {
    const newPayment = new Payment({ userId, paymentMethod, amount });
    await newPayment.save();
    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Error saving payment:", error);
    res.status(500).json({ status: "fail" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

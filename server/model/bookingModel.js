const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  deliveryLocation: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: true,
  },
  travelDirection: {
    type: String,
    enum: ["Yangon → Pyay", "Pyay → Yangon"],
    required: true,
  },
  carTime: {
    type: String,
    enum: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM"],
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;

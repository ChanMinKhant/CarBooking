const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Username is required.'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required.'],
  },
  pickupLocation: {
    type: String,
    required: [true, 'Pickup location is required.'],
  },
  deliveryLocation: {
    type: String,
    required: [true, 'Delivery location is required.'],
  },
  seatNumber: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: [true, 'Seat number is required.'],
  },
  travelDirection: {
    type: String,
    enum: ['Yangon → Pyay', 'Pyay → Yangon'],
    required: true,
  },
  carTime: {
    type: String,
    enum: ['6:00', '6:05', '6:10', '6:15'],
    required: true,
  },
  bookingDate: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

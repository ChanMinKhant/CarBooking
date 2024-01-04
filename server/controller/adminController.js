const asyncErrorHandler = require('./../util/asyncErrorHandler');
const Booking = require('./../model/bookingModel');
const CustomError = require('./../util/CustomError');

// "http://api-url/?date=20-01-2004&time=7:00"
// if admin request this url, it will return all bookings at these date and time
// if request with only Date i want to return all bookings at that date
exports.getBookings = asyncErrorHandler(async (req, res, next) => {
  const requestedDate = new Date(req.query.date);
  const requestedTime = req.query.time;
  let query = {
    bookingDate: requestedDate,
  };
  if (requestedTime) {
    query.carTime = requestedTime;
  }
  const existingBookings = await Booking.find(query);
  res.status(200).json({
    success: true,
    existingBookings,
  });
});

// "http://api-url/:id"
exports.approveBooking = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  //search booking by id and update isApproved field to true and return updated booking
  await Booking.findByIdAndUpdate(id, { isApproved: true }, { new: true });
  res.status(200).json({ success: true });
});

// "http://api-url/:id"
exports.cancleBooking = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  // search booking by id and delete booking
  await Booking.findByIdAndDelete(id);
  res.status(200).json({ success: true });
});

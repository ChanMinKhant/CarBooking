const asyncErrorHandler = require("./../util/asyncErrorHandler");
const Booking = require("./../model/bookingModel");
const CustomError = require("./../util/CustomError");

//"http://api-url/checkseat/?date=20-01-2004&time=7:00"
exports.checkSeatAvailability = asyncErrorHandler(async (req, res, next) => {
  const requestedDate = new Date(req.query.date);
  const requestedTime = req.query.time;

  const existingBookings = await Booking.find({
    bookingDate: requestedDate,
    carTime: requestedTime,
  });

  const availableSeats = [1, 2, 3, 4].filter((seat) => {
    return !existingBookings.some((booking) => booking.seatNumber === seat);
  });

  res.status(200).json({
    success: true,
    availableSeats,
  });
});

//"http://api-url/book" or "http://api-url/book/?date=20-01-2004&time=7:00"
exports.createBook = asyncErrorHandler(async (req, res, next) => {
  const { name, phone, date, time, seat, travelDirection, message } = req.body;

  //check required fields
  if (!name) {
    return next(new CustomError("Please provide your name", 400));
  }
  if (!phone) {
    return next(new CustomError("Please provide your phone number", 400));
  }

  if (!travelDirection) {
    return next(new CustomError("Please provide your travel direction", 400));
  }
  //check valid fields
  const availableDirections = ["YGN_TO_PYAY", "PYAY_TO_YGN"];
  if (!availableDirections.includes(travelDirection)) {
    return next(
      new CustomError("Please provide a valid travel direction", 400)
    );
  }

  if (!date) {
    return next(new CustomError("Please provide your date", 400));
  }
  // if date is less than today , u cant book it
  const today = new Date();
  //changed date format
  const requestedDate = new Date(date);
  if (requestedDate < today) {
    return next(new CustomError("Please provide a valid date", 400));
  }
  if (!time) {
    return next(new CustomError("Please provide your time", 400));
  }
  //if time is not in 7:00, 9:00, 11:00, 13:00, 15:00, 17:00, 19:00 , u cant book it
  const availableTimes = [
    "7:00",
    "9:00",
    "11:00",
    "13:00",
    "15:00",
    "17:00",
    "19:00",
  ];
  if (!availableTimes.includes(time)) {
    return next(new CustomError("Please provide a valid time", 400));
  }
  if (!seat) {
    return next(new CustomError("Please provide your seat", 400));
  }

  //save to database
  const booking = await Booking.create({
    userName,
    phoneNumber,
    pickupLocation,
    deliveryLocation,
    seatNumber,
    travelDirection,
    carTime,
    bookingDate,
    message,
  });
  //sentEmail to admin to approve

  res.status(201).json({
    success: true,
    booking,
  });
});

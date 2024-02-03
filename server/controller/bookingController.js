const asyncErrorHandler = require('./../util/asyncErrorHandler');
const Booking = require('./../model/bookingModel');
const CustomError = require('./../util/CustomError');

//"http://api-url/checkseat/?date=20-01-2004&time=7:00?from=yangon" or "from=pyay"
// i need to check the date and time is not in 7:00, 9:00, 11:00, 13:00, 15:00, 17:00, 19:00 , valid or not
// i need to add pending status to booking
exports.checkseat = asyncErrorHandler(async (req, res, next) => {
  const { date, time, from } = req.query;

  if (!date || !time || !from) {
    return next(new CustomError('Please provide date, time, and from', 400));
  }

  let query = { bookingDate: date, carTime: time };
  if (from === 'yangon') {
    query = { ...query, travelDirection: 'Yangon → Pyay' };
  } else if (from === 'pyay') {
    query = { ...query, travelDirection: 'Pyay → Yangon' };
  } else {
    return next(new CustomError('Please provide a valid from', 400));
  }

  const Bookings = await Booking.find(query);

  const pendingSeats = Bookings.filter((booking) => !booking.isApproved).map(
    (booking) => booking.seatNumber
  );

  const availableSeats = [1, 2, 3, 4].filter((seat) => {
    return !Bookings.some(
      (booking) => booking.seatNumber === seat && booking.isApproved
    );
  });

  const approvedSeats = [];

  res.status(200).json({
    success: true,
    availableSeats,
    pendingSeats,
  });
});

//"http://api-url/book"
exports.createBook = asyncErrorHandler(async (req, res, next) => {
  const {
    userName, // form state
    phoneNumber, // form state
    pickupLocation, // form state
    deliveryLocation, // form state
    seatNumber, // interface state
    travelDirection, // props
    carTime, // undefined
    bookingDate, // choseDate state
    message, // form state
  } = req.body;
  //check required fields

  // need to add isAdmin
  const isExist = await Booking.findOne({ seatNumber, bookingDate, carTime });
  if (isExist) {
    return next(new CustomError('Seat is already booked', 400));
  }

  if (!userName) {
    return next(new CustomError('Please provide your name', 400));
  }
  if (!phoneNumber) {
    return next(new CustomError('Please provide your phone number', 400));
  }

  if (!travelDirection) {
    return next(new CustomError('Please provide your travel direction', 400));
  }
  //check valid fields
  const availableDirections = ['Yangon → Pyay', 'Pyay → Yangon'];
  if (!availableDirections.includes(travelDirection)) {
    return next(
      new CustomError('Please provide a valid travel direction', 400)
    );
  }

  if (!bookingDate) {
    return next(new CustomError('Please provide your date', 400));
  }
  // if date is less than today , u cant book it
  // change date format
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0] + 'T00:00:00.000Z'; // backup plan
  const dateParts = bookingDate.split('/');
  const requestedDate = new Date(
    `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
  );
  if (!requestedDate.getTime()) {
    return next(new CustomError('Please provide a valid date.', 400));
  }
  if (requestedDate < formattedToday) {
    //setHours(0, 0, 0, 0) is to set time to 00:00:00:00
    return next(new CustomError('Please provide a valid date', 400));
  }
  if (!carTime) {
    return next(new CustomError('Please provide your time', 400));
  }
  //if time is not in 6:00, 6:05, 6:10, 6:15, u cant book it
  const availableTimes = ['6:00', '6:05', '6:10', '6:15'];
  if (!availableTimes.includes(carTime)) {
    return next(new CustomError('Please provide a valid time', 400));
  }
  if (!seatNumber) {
    return next(new CustomError('Please provide your seat', 400));
  }

  const data = {
    userName,
    phoneNumber,
    pickupLocation,
    deliveryLocation,
    seatNumber,
    travelDirection,
    carTime,
    bookingDate,
    message,
  };
  //save to database
  const booking = await Booking.create(data);
  //sentEmail to admin to approve

  res.status(201).json({
    success: true,
    booking,
  });
});

// "http://api-url"
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
  const updatedBooking = await Booking.findByIdAndUpdate(
    id,
    { isApproved: true },
    { new: true }
  );
  if (!updatedBooking) {
    throw new CustomError('Booking not found', 404);
  }
  res
    .status(200)
    .json({ success: true, message: 'Booking approved', updatedBooking });
});

// "http://api-url/:id"
exports.cancleBooking = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  // search booking by id and delete booking
  await Booking.findByIdAndDelete(id);
  res.status(200).json({ success: true, message: 'Booking cancle' });
});

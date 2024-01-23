const asyncErrorHandler = require("./../util/asyncErrorHandler");
const Booking = require("./../model/bookingModel");
const CustomError = require("./../util/CustomError");
const Admin = require("./../model/adminModel");
const Token = require("./../model/tokenModel");
const jwt = require("jsonwebtoken");

// create admin account
// "http://api-url/createAdmin"
exports.createAdmin = asyncErrorHandler(async (req, res, next) => {
  // to create admin account , admin must be logged in and have superAdmin role find from fb as req.adminId
  const adminId = req.account_id;
  const admin = await Admin.findById(adminId);
  if (admin.role !== "superAdmin") {
    const err = new CustomError("You are not allowed to create admin", 401);
    return next(err);
  }
  const { username, password, email, role } = req.body;
  const createdAdmin = await Admin.create({
    username,
    password,
    email,
    role: role || "admin",
  });
  res.status(201).json({
    success: true,
    createdAdmin,
  });
});

// "http://api-url/login"
// send email to admin if another admin login
exports.login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // check if email and password exist
  if (!email || !password) {
    const err = new CustomError("Please provide email and password", 400);
    return next(err);
  }
  // find from db with email
  const adminFromDb = await Admin.findOne({ email });
  if (!adminFromDb) {
    const err = new CustomError("Incorrect email or password", 401);
    return next(err);
  }
  // check if password is correct
  const isPasswordCorrect = await adminFromDb.comparePassword(password);

  if (!isPasswordCorrect)
    return next(new CustomError("Incorrect password. Please try again.", 400));

  const token = jwt.sign(
    { id: process.env.ADMIN_ID },
    process.env.TOKEN_SECRET,
    {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    }
  );
  // save token in db
  await Token.create({ token, adminId: adminFromDb.id });
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + (process.env.COOKIE_EXPIRES_IN || 20) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    token,
  });
});

// "http://api-url/logout"
exports.logout = asyncErrorHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  await Token.findOneAndDelete({ token });
  res.clearCookie("jwt");
  res.status(200).json({
    success: true,
  });
});

// "http://api-url/logoutAll"
exports.logoutAll = asyncErrorHandler(async (req, res, next) => {
  const adminId = req.account_id;
  await Token.deleteMany({ adminId });
  res.clearCookie("jwt");
  res.status(200).json({
    success: true,
  });
});

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
  const updatedBooking = await Booking.findByIdAndUpdate(
    id,
    { isApproved: true },
    { new: true }
  );
  if (!updatedBooking) {
    throw new CustomError("Booking not found", 404);
  }
  res.status(200).json({ success: true, updatedBooking });
});

// "http://api-url/:id"
exports.cancleBooking = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  // search booking by id and delete booking
  await Booking.findByIdAndDelete(id);
  res.status(200).json({ success: true });
});

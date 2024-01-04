const router = require('express').Router();
const bookingController = require('../controller/bookingController');

// router.post('/booking', bookingController.createBooking)
// router.get('/booking', bookingController.getBooking)
// router.get('/booking/:id', bookingController.getBookingById)
// router.put('/booking/:id', bookingController.updateBooking)
// router.delete('/booking/:id', bookingController.deleteBooking)
router.get('/checkseat', bookingController.checkSeatAvailability);

module.exports = router;

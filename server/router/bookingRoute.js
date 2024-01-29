const router = require('express').Router();
const bookingController = require('../controller/bookingController');
const { verifyJWT } = require('./../middleware/verifyJWT');
// router.post('/booking', bookingController.createBooking)
// router.get('/booking', bookingController.getBooking)
// router.get('/booking/:id', bookingController.getBookingById)
// router.put('/booking/:id', bookingController.updateBooking)
// router.delete('/booking/:id', bookingController.deleteBooking)
router.get('/checkseat', bookingController.checkseat);
router.post('/book', bookingController.createBook);

router.route('/pendingseats').get(verifyJWT, bookingController.getPendingSeats);
router
  .route('/approvedseats')
  .get(verifyJWT, bookingController.getApprovedSeats);
router.route('/approve/:id').put(verifyJWT, bookingController.approveBooking);
router.route('/cancle/:id').put(verifyJWT, bookingController.cancleBooking);
module.exports = router;

const router = require('express').Router();

const adminController = require('./../controller/adminController');

router.get('/bookings', adminController.getBookings);
router.put('/bookings/:id', adminController.approveBooking);
router.delete('/bookings/:id', adminController.cancleBooking);

module.exports = router;

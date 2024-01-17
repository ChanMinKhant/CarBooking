const router = require('express').Router();

const adminController = require('./../controller/adminController');
const { verifyJWT } = require('./../middleware/verifyJWT');

//verifyJWT
router.route('/login').post(adminController.login);
router.use(verifyJWT);
router
  .route('/bookings')
  .get(adminController.getBookings)
  .put(adminController.approveBooking)
  .delete(adminController.cancleBooking);

module.exports = router;

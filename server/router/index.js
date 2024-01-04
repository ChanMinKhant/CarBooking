const router = require('express').Router();

const admain = require('./adminRoute');
const booking = require('./bookingRoute');

router.use('/', admain);
router.use('/', booking);

module.exports = router;

const { Router } = require('express');
const { getBikes, addBike } = require('../controller/bike');

const router = Router();

// get all Bikes in DB
router.get('/bikes', getBikes);

// add bike
router.post('/bike/add', addBike);

module.exports = router;

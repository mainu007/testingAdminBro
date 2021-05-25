const { Bike } = require('../models/bike');

// get all existing bikes in DB
exports.getBikes = (req, res) => {
    Bike.find().exec((err, result) => {
        if (err || !result) {
            return res.status(400).json({ error: 'Bike not found' });
        }

        res.json({
            message: 'Get all existing Bikes',
            data: result,
        });
    });
};

// add Bike
exports.addBike = (req, res) => {
    console.log(req.body);
    const bike = new Bike(req.body);

    // save
    console.log(bike);
    bike.save((err) => {
        if (err) {
            return res.status(400).json({ error: err });
        }

        res.json({
            message: 'Bike add success',
            data: bike,
        });
    });
};

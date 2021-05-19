const { Schema, model } = require('mongoose');

const BikeSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    color: String,
    plate_no: String,
    mileage: String,
    max_power: String,
});

const Bike = model('Bike', BikeSchema);

module.exports = { Bike, BikeSchema };

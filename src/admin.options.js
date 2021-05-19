const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const { Bike } = require('./models/Bike');

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [Bike],
};

module.exports = options;

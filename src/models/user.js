const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, required: true },
    encryptedPassword: { type: String, required: true },
    role: { type: String, enum: ['admin', 'investor'], required: true },
});

const User = model('User', UserSchema);

module.exports = { User, UserSchema };

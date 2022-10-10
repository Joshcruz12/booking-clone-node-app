const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a real name'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
    status: {
        type: String,
        default: 'active',
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }
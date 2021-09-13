const mongoose = require('mongoose');

//Defining User Model
const userModel = mongoose.model('User', {
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},  'users',{ timestamps: true });

module.exports = userModel;
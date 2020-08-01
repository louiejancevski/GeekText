const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ( {
    firstName: {
        type: String,
        required: true,
    },
    
    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true ,
        unique: true
    },

    cellphone: {
        type: Number,
    },

    password: {
        type: String,
        required: true,
    },
}) 

module.exports = User = mongoose.model('user', userSchema )
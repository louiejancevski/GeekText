const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ( {
    id: {
        type: String,
        required: true,
    },

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
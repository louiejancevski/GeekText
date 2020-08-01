const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema ( {
    userID: {
        type: String,
        required: true,
    },

    isbn: {
        type: String,
    },
    
    quantity: {
        type: Number,
    },

})

module.exports = Cart = mongoose.model('cart', cartSchema )
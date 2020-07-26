const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema ( {
    bookName: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
    },

})

module.exports = Cart = mongoose.model('cart', cartSchema )

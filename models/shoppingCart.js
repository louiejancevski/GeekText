const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema ( {
    bookName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
    }

  
})

module.exports = ShoppingCart = mongoose.model('shoppingCart', shoppingCartSchema )
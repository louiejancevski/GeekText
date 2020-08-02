const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema ( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
      },

    items: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
          },
        } 
      ],
      
    quantity: {
      type: Number, 
      default: 0
    }
})

module.exports = Cart = mongoose.model('cart', cartSchema )
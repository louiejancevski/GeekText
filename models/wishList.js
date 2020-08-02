const mongoose = require('mongoose');

const wishListSchema  = new mongoose.Schema ( {
    user: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    items: []

})

module.exports = WishList = mongoose.model('wishList', wishListSchema )
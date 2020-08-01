const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema ( {
    WishListNum: {
        type: Number,
        required: true,
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: {
        type: "array",
        maxItems: 2,
        items: [{ type: mongoose.Schema.Types.ObjectId }, { type: Number }],
        required: true,
  },
});

module.exports = WishList = mongoose.model('wishList', wishListSchema )
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ( {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    }
})

module.exports = Product = mongoose.model('product', productSchema )
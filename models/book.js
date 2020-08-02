const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema ( {
    isbn: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    price: {
        type: Number,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    genre: {
        type: String,
        required: true,
    },

    publisher : {
        type: String,
    },

    yearPublished: {
        type: Date,
        default: Date.now
    },
    copiesSold: {
        type: Number,
    },

    rating:  {
        type: Number,
        min: 0, 
        max: 5 
    }
})

module.exports = Book = mongoose.model('book', bookSchema )
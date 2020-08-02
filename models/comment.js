const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema ( {
    date: {
        type: Date,
        default: Date.now
    },

    user: {
        type: String,
        required: true,
    },

    comment: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        
    },

<<<<<<< HEAD
=======

>>>>>>> 38a0aeaf629153701fb48719d110826f4166ca04
})

module.exports = Comment = mongoose.model('comment', commentsSchema )
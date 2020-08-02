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
    
    rating: {
        type: Number,
        min: 5,
        max: 5,
        required: true,
    }


})

module.exports = Comment = mongoose.model('comment', commentsSchema )
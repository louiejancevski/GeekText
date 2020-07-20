const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema ( {
    Date: {
        type: Date,
        default: Date.now
    },

    User: {
        type: String,
        required: true,
    },

    Comment: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        
    },

})

module.exports = Comment = mongoose.model('comment', commentsSchema )
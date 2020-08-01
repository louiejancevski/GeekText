const mongoose = require('mongoose');

const ratingsSchema = new mongoose.Schema ( {
    date: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        required: true,
        
    },

})

module.exports = Rating = mongoose.model('rating', ratingsSchema )
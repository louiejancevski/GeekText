const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema ( {
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
    },

    biography: {
        type: String,
    },

    publisher : {
        type: String,
    },

})

module.exports = Author = mongoose.model('author', authorSchema )
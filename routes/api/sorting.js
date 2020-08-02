const express = require('express')
const router = express.Router()

//Models needed
const Book = require('../../models/book')

//@route GET api/sorting/:genre
//@description Get single book by genre
//@access Public
router.get('/:genre', (req, res) => {
    Book.find({genre : req.params.genre})
        .then(book => res.json(book))
        .catch(err => res.status(400).json({msg: 'Genre not available!'}));
})

//@route GET api/sorting/:author
//@description Get single book by authors
//@access Public
router.get('/:author', (req, res) => {
    Book.find({genre : req.params.author})
        .then(book => res.json(book))
})

module.exports = router;
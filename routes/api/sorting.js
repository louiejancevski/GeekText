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

//@route GET api/sorting/:copiesSold
//@description Get top seller books. The have sold the most copied
//@access Public
router.get('/:copiesSold', (req,res) => {
    Book.find({copiesSold: req.params.book})
        .then(book => res.json(book))
})

//@route GET api/sorting/rating
//@description list book for a particular rating and higher.
//@access Public
router.get('/rating/:rating', (req,res) => {
    Book.find({rating: req.params.rating})
        .sort({rating: -1})
        .then(book => res.json(book))
})

//@route GET api/sorting/
//@description list X books at a time where X is an integer.
//@access Public


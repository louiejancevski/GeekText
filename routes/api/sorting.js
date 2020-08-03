//routes/api/sorting.js
const express = require('express')
const router = express.Router()

//Models needed
const Book = require('../../models/book')

//@route GET api/sorting/genre/:genre
//@description Get single book by genre
//@access Public
router.get('/genre/:genre', (req, res) => {
    Book.find({genre : req.params.genre})
        .then(book => res.json(book))
        .catch(err => res.status(404).json({msg: 'Genre not available!'}));
});

//@route GET api/sorting/author/:author
//@description Get book by authors
//@access Public
router.get('/author/:author', (req, res) => {
    Book.find({author : req.params.author})
        .then(book => res.json(book))
        .catch(err=> res.status(404).json({msg: 'Author not available!'}));
});

//@route GET api/sorting/copiesSold
//@description Get top seller books. The have sold the most copied
//@access Public

router.get('/copiesSold',(req,res) => {
    Book.find()
    .sort({copiesSold:-1}).limit(10)
    .then(book=>res.json(book))
})

//@route GET api/sorting/rating/:rating
//@description list book for a particular rating and higher.
//@access Public
router.get('/rating/:rating', (req,res) => {
    Book.find({rating: req.params.rating})
    .then(book => res.json(book))

})
   
//@route GET api/sorting/listNumBooks
//@description list X books at a time where X is an integer.
//@access Public

router.get('/listNumBooks', (req,res) => {
    Book.find().limit(3)
    .then(books => res.json(books))
    .catch(err => res.status(404).json({msg: 'Sorry. Can not perform the operation.'}))
})

module.exports = router;

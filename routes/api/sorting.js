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
        .catch(err => res.status(400).json({msg: 'Author not found!'}));
})


//@route GET api/sorting/:copiesSold
//@description Get top seller books(Sold the most copied)
//@access Public
router.get('/:copiesSold', (req,res) => {
    Book.find({copiesSold : req.params.copiesSold})
        .then(book => res.json(book))
        .catch(err => res.status(400).json({msg: 'Data not available!'}))
})

/*
//@route GET api/sorting/:isbn
//@description Get X books at the same time. X is an integer
//@access Public
router.get('/:isbn', (req, res) => {
    Book.find({isbn: req.params.isbn})
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ msg: 'Sorry! Book not found' }));
  });
    
*/


module.exports = router
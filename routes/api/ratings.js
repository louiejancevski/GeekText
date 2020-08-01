// routes/api/ratings.js
const express = require('express')
const router = express.Router()

//Models
const Book = require('../../models/book');

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/' , (req, res) => {
    Book.find()
        .sort({ date: -1})
        .then(books => res.json(books))
})

//checks if rating is between 1 and 5
// @route GET api/books/:isbn
// @description Get single book by ISBN
// @access Public
router.get('/:isbn', (req, res) => {
    Book.find({isbn: req.params.isbn})
    .then
    router.post('/:rating', (req, res) => {
        
          then(rating => res.json(rating))
          if(rating.rating >= 1 && rating.rating <= 5)
          {
            msg: rating
          }
          else
          err => res.status(404).json({ msg: 'Invalid rating' })
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ msg: 'Sorry! Book not found' }));
  });
});

  
// @route   POST api/ratings/create
// @desc    Create a rating
// @access  Public
router.post('/create', (req, res) => {
    Rating.create(req.body)
      .then(rating => res.json({ 
          msg: 'Rating added successfully',
          rating: rating
    }))
      .catch(err => res.status(400).json({ 
          msg: 'Invalid Rating',
          err: err.message
        }));
  });
  
  
module.exports = router;
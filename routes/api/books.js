// routes/api/books.js
const express = require('express')
const router = express.Router()

//Book Model
const Book = require('../../models/book')

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/' , (req, res) => {
    Book.find()
        .sort({ date: -1})
        .then(books => res.json(books))
})

// @route GET api/books/:isbn
// @description Get single book by ISBN
// @access Public
router.get('/:isbn', (req, res) => {
    Book.findOne({isbn:req.params.isbn})
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ msg: 'Sorry! Book not found' }));
  });

// @route   POST api/books/create
// @desc    Create a book
// @access  Public
router.post('/create', (req, res) => {
    Book.create(req.body)
      .then(book => res.json({ 
          msg: 'Book added successfully',
          book: book
    }))
      .catch(err => res.status(400).json({ 
          msg: 'Unable to add this book',
          err: err.message
        }));
});

// @router  GET api/books/author/:author
// @desc    Get all books by a single author
// @access  Public`
router.get('/author/:author' , (req, res) => {
  Book.find({author: req.params.author})
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ msg: 'Sorry! Books were not found' }));
})

// @router  DELETE api/books/:id
// @desc    Delete a book
// @access  Public`
router.delete('/:id' , (req, res) => {
   Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({
        msg: 'Success! Deleted book'
    })) )
    .catch (err => res.json({
        msg: err.message,
    }))
})

module.exports = router;
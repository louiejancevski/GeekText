// routes/api/books.js
const express = require('express')
const router = express.Router()

//Author Model
const Author = require('../../models/author')

// @route   GET api/authors
// @desc    Get all authors
// @access  Public
router.get('/' , (req, res) => {
    Author.find()
        .sort({ date: -1})
        .then(authors => res.json(authors))
})
 
// @route   POST api/authors/create
// @desc    Create an author
// @access  Public
router.post('/create', (req, res) => {
    Author.create(req.body)
      .then(author => res.json({ 
          msg: 'Author added successfully',
          author: author
    }))
      .catch(err => res.status(400).json({ 
          msg: 'Unable to add this author',
          err: err.message
        }));
  });

// @router  DELETE api/authors/:id
// @desc    Delete an author
// @access  Public
router.delete('/:id' , (req, res) => {
   Author.findById(req.params.id)
    .then(author => author.remove().then(() => res.json({
        msg: 'Success! Deleted author'
    })) )
    .catch (err => res.json({
        msg: err.message,
    }))
})

module.exports = router;
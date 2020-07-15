// routes/api/users.js
const express = require('express')
const router = express.Router()

//Users Model
const User = require('../../models/user')

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/' , (req, res) => {
    User.find()
        .sort({ date: -1})
        .then(users => res.json(users))
})

// @route GET api/users/:isbn
// @description Get single user by ID
// @access Public
router.get('/:id', (req, res) => {
    User.findById(req.params.isbn)
      .then(user => res.json(user))
      .catch(err => res.status(404).json({ msg: 'Sorry! User not found' }));
  });

// @route   POST api/users/create
// @desc    Create a book
// @access  Public
router.post('/create', (req, res) => {
    User.create(req.body)
      .then(user => res.json({ 
          msg: 'User added successfully',
          user: user
    }))
      .catch(err => res.status(400).json({ 
          msg: 'Unable to add this user',
          err: err.message
        }));
  });

// @router  DELETE api/books/:id
// @desc    Delete a book
// @access  Public
router.delete('/:id' , (req, res) => {
   User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({
        msg: 'Success! Deleted user'
    })) )
    .catch (err => res.json({
        msg: err.message,
    }))
})


module.exports = router;
// routes/api/users.js
const express = require('express')
const router = express.Router()

//Models needed
const Book = require('../../models/book')
const Cart = require('../../models/cart')
const User = require('../../models/user')


// @route   POST api/carts/create
// @desc    Create a cart
// @access  Public
router.post('/create', (req, res) => {
  Cart.create(req.body)
    .then(cart => res.json({ 
        msg: 'Product added successfully',
        cart: cart
  }))
    .catch(err => res.status(400).json({ 
        msg: 'Unable to add this book',
        err: err.message
      }));
});


// @route   POST api/carts/create
// @desc    add a book
// @access  Public
router.post('/addBook/:isbn', (req, res) => {
  Book.findById(req.params.isbn)
  .then(book => res.json({
    msg: 'Product found successfully',
  }))
  .catch(err => res.status(404).json({ msg: 'Sorry! Book not found' }));
  
  Cart.create(cart)

  // Cart.create(req.body)
  //   .then(cart => res.json({ 
  //       msg: 'Product added successfully',
  //       cart: cart
  // }))
  //   .catch(err => res.status(400).json({ 
  //       msg: 'Unable to add this book',
  //       err: err.message
  //     }));
});


// @router  DELETE api/carts/:id
// @desc    Delete a cart
// @access  Public`
router.delete('/:id' , (req, res) => {
  Cart.findById(req.params.id)
   .then(cart => cart.remove().then(() => res.json({
       msg: 'Success! Deleted cart'
   })) )
   .catch (err => res.json({
       msg: err.message,
   }))
})


router.get('/' , (req, res) => {
  Cart.find()
      .sort({ date: -1})
      .then(carts => res.json(carts))
})

/*
// @route GET api/users/:id
// @desc Get single user by ID
// @access Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(404).json({ msg: 'Sorry! User not found' }));
  });

// @route   POST api/users/create
// @desc    Add book
// @access  Public
router.post('/add', (req, res) => {
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

// @router  DELETE api/users/:id
// @desc    Delete user
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

// TODO: CHANGE ALL THIS
*/
module.exports = router;

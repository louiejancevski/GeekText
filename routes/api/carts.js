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
router.post('/create/:id', (req, res) => {
    let cart = new Cart
    cart.user = req.params.id
    cart.items = []
    cart.save()
    .then(cart => res.json(cart))
    .catch(err => res.status(404).json({ msg: 'Sorry! Cart could not be created' }));
});


// @route   POST api/carts/:id/addBook/:isbn
// @desc    Add a book to shopping cart
// @access  Public
router.post('/:cartId/addBook/:isbn', (req, res) => {
  Cart.findById(req.params.cartId)
    .then(Book.find({isbn:req.params.isbn})
    .then())
  let cart = new Cart
  cart.user = req.params.id
  cart.items = []
  cart.save()
  .then(cart => res.json(cart))
  .catch(err => res.status(404).json({ msg: 'Sorry! Cart could not be created' }));
});



// @router  DELETE api/carts/:id
// @desc    Delete a cart
// @access  Public`
router.delete('/:id/deleteBook/:isbn' , (req, res) => {
  User.findById(req.params.id)
  .then(Book.find({isbn:req.params.isbn})
    .then())

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

// routes/api/users.js
const express = require('express')
const router = express.Router()

//Models needed
const Book = require('../../models/book')
const Cart = require('../../models/cart')
const User = require('../../models/user')
const book = require('../../models/book')


// @route   POST api/carts/create
// @desc    Create a cart if user is in system
// @access  Public
router.post('/create/:id', (req, res) => {
  User.findById(req.params.id)  
  .then (Cart.create(req.params.id ,req.body))
    .then(cart => res.json({
      msg: "Cart added to user",
      cart: cart
    }))
    .catch(err => res.json({
      msg: err.message,
    }))
  .catch (err => res.json({
      msg: err.message,
  }))
  
});


// @route   POST api/carts/create
// @desc    add a book
// @access  Public
router.post('/:id/addBook/:isbn', (req, res) => {
  User.findById(req.params.id)
  .then(Book.find({isbn:req.params.isbn})
    .then())
    .catch()
  .catch()
});


// @router  DELETE api/carts/:id
// @desc    Delete a cart
// @access  Public`
router.delete('/:id/deleteBook/:isbn' , (req, res) => {
  User.findById(req.params.id)
  .then(Book.find({isbn:req.params.isbn})
    .then())
    .catch()
  .catch()
  
})


router.get('/' , (req, res) => {
  Cart.find()
      .sort({ date: -1})
      .then(carts => res.json(carts))
      .catch()
})


module.exports = router;

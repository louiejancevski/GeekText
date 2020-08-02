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
    .catch(err => res.status(404).json({ msg: 'Sorry! Cart could not be created', err}));
});

// @route   POST api/carts/:id/addBook/:isbn
// @desc    Add a book to shopping cart
// @access  Public
router.post('/:cartId/addBook/:bookISBN', (req, res) => {
  Book.find({isbn:req.params.bookISBN} , function(err, book){
    if (err) res.status(404).json({ msg: 'Sorry! Book not found' })
    else {
      Cart.findOneAndUpdate(req.params.cartID , { 
        $inc: { quantity: 1 },
        $push: {
          'items':  {
            book
          }
      }, 
    
    })
      .then(cart => res.json(cart))
      .catch(err => res.status(404).json({ msg: 'Sorry! Book not found' }));             
    }
  });

});


// @router  DELETE api/carts/:cartId/deleteBook/:bookISBN
// @desc    Delete a cart 
// @access  Public
router.delete('/:cartId/deleteBook/:bookISBN' , (req, res) => {
  Book.find({isbn:req.params.bookISBN} , function(err, book){
    if (err) res.status(404).json({ msg: 'Sorry! Book not found' })
    else {
      Cart.findOneAndDelete(req.params.cartID , { 
        //$inc: { quantity: 1 },
        $pull: {
          'items':  {
            book
          }
      }, 
    
    })
    
      .then(cart => res.json(cart))
      .catch(err => res.status(404).json({ msg: 'Sorry! Book not found' }));             
    }
  });
})

// @router  GET api/carts/
// @desc    Get all carts
// @access  Public
router.get('/' , (req, res) => {
  Cart.find()
      .sort({ date: -1})
      .then(carts => res.json(carts))
      .catch()
})

module.exports = router;

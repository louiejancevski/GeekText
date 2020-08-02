// routes/api/books.js
const express = require('express')
const router = express.Router()

//Credit Card Model
const CreditCard = require('../../models/creditCard')

// @route   GET api/Credit Card
// @desc    Get all Credit Cards
// @access  Public
router.get('/' , (req, res) => {
  CreditCard.find()
        .sort({ date: -1})
        .then(creditCards => res.json(creditCards))
})

// @route GET api/credit card/cardNumber
// @description Get a single credit card
// @access Public
router.get('/:cardNumber', (req, res) => {
  CreditCard.findOne({isbn:req.params.cardNumber})
      .then(creditCard => res.json(creditCard))
      .catch(err => res.status(404).json({ msg: 'Sorry! Credit Card not found' }));
  });

// @route   POST api/creditCard/create
// @desc    Create a credit card
// @access  Public
router.post('/create', (req, res) => {
  CreditCard.create(req.body)
      .then(creditCard => res.json({ 
          msg: 'Credit card added successfully',
          creditCard: creditCard
    }))
      .catch(err => res.status(400).json({ 
          msg: 'Unable to add this credit card',
          err: err.message
        }));
});

// @router  GET api/creditcard/user/:user
// @desc    Get all credit cards by a single uder
// @access  Public`
router.get('/user/:user' , (req, res) => {
  CreditCard.find({userID: req.params.email})
    .then(creditCards => res.json(creditCards))
    .catch(err => res.status(404).json({ msg: 'Sorry! Credit Cards were not found' }));
})

// @router  DELETE api/books/:id
// @desc    Delete a book
// @access  Public`
router.delete('/:id' , (req, res) => {
  CreditCard.findById(req.params.id)
    .then(creditCard => creditCard.remove().then(() => res.json({
        msg: 'Success! Deleted credit card'
    })) )
    .catch (err => res.json({
        msg: err.message,
    }))
})

module.exports = router;
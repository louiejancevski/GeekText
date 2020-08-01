// routes/api/users.js
const express = require('express')
const router = express.Router()

//Models needed
const Book = require('../../models/book')
const WishList = require('../../models/wishList')
const User = require('../../models/user')

function searchArray(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == id) {
      return true;
    }
  }
  return false;
}

function positionFinder(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == id) {
      return i;
    }
  }
}

// @route   POST api/wishList/create
// @desc    Create a wish list
// @access  Public
router.post('/create', (req, res) => {
  wishList.create(req.body)
    .then(cart => res.json({ 
        msg: 'Wish List added',
        cart: cart
  }))
    .catch(err => res.status(400).json({ 
        msg: 'Unable to create Wish List',
        err: err.message
      }));
});

router.route("/").get((req, res) => {
   WishList.find()
  .then((wishList) => res.json(wishList))
  .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  WishList.findById(req.params.id)
    .then((wishList) => res.json(wishList))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  WishList.findByIdAndDelete(req.params.id)
    .then((wishList) => res.json("Deleted."))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id/:bookId").post((req, res) => {
  WishList.findById(req.params.id)
    .then((wishList) => {
      if (searchArray(wishList.product, req.params.bookId)) {
        let position = positionFinder(wishList.product, req.params.bookId);
        Books.findById(req.params.bookId).then((book) => {
          newBook = book.price;
          let changeIt = wishList.product[position][1] + 1;
          wishList.product[position][1] = changeIt;
          wishList
            .save()
            .then(() => res.json("Wish List Updated!" + position))
            .catch((err) => res.status(400).json("Error:" + err));
          });
      } 
    })
  });

router.route("/update/:id").post((req, res) => {
  WishList.findById(req.params.id)
    .then((wishList) => {
      wishList.user = req.body.user;
      wishList.product = req.body.product;
      wishList.price = Number(req.body.price);
      wishList
        .save()
        .then(() => res.json("Wish List Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
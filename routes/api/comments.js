// routes/api/comment.js
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");

//Models
const Comment = require("../../models/comment");
const Book = require('../../models/book')

// @route   GET api/comments
// @desc    Get all comments
// @access  Public
router.get('/' , (req, res) => {
    Comment.find()
        .sort({date: -1})
        .then(comments => res.json(comments))
})

//Creat a comment 1
router.post('/create', (req, res) => {
  Comment.create(req.body)
    .then(comment => res.json({ 
        msg: 'Comment added successfully',
        comment: comment
  }))
    .catch(err => res.status(400).json({ 
        msg: 'Unable to add this comment',
        err: err.message
      }));
});



//Read a Comment
router.get("/:postId/comment", (req, res) => {
  Book.findOne({_id: req.params.postId }).populate("comments" ); 
  res.send(post);
});


  
  module.exports = router;
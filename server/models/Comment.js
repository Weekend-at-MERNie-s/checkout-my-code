const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: 'Help a friend out, leave a comment!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  username: {
    type: String,
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
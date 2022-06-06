const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Comment = require('./Comment');

const postSchema = new Schema({
    title: {
      type: String,
      required: 'Please enter a title'
    },
    postContent: {
      type: String,
      required: 'Please enter a message about your project friend!',
      minlength: 1,
      maxlength: 280
    },
    postRepoLink: {
      type: String,
      required: 'Please enter a link to your repo!'
    },
    deployedApplication: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTimeStamp => dateFormat(formatTimeStamp)
    },
    username: {
      type: String,
      references: {
        required: true
      }
    },
    comments: [{
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        username: {
          type: String,
          required: true,
          trim: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
    comments: [Comment.schema]
  },
    {
      toJSON: {
        getters: true
      }
    }
  );

    postSchema.virtual('commentCount').get(function() {
      return this.comments.length;
    });
 
const Post = model('Post', postSchema);

module.exports = Post;
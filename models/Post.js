const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Comment = require('./Comment');

const postSchema = new Schema({
    postId: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: String,
      allowNull: false
    },
    postContent: {
      type: String,
      allowNull: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTimeStamp => dateFormat(formatTimeStamp)
    },
    user_id: {
      type: Number,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    // comments: [{
    //     commentText: {
    //       type: String,
    //       required: true,
    //       minlength: 1,
    //       maxlength: 280,
    //     },
    //     username: {
    //       type: String,
    //       unique: true,
    //       required: true,
    //       trim: true,
    //     },
    //     createdAt: {
    //       type: Date,
    //       default: Date.now,
    //       get: (timestamp) => dateFormat(timestamp),
    //     },
    //   },
    // ],
    comments: [Comment.schema]
  });
const Post = model('Post', postSchema);

module.exports = Post;
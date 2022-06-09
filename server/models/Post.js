const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Comment = require('./Comment');
const Vote = require('./Vote')
const Flag = require('./Flag')


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
  votes: [{
    post_ID: {
      type: String,

    },
    voting: {
      type: String,

    },
  }
  ],
  votes: [Vote.schema],

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
  comments: [Comment.schema],

  flags: [{
    post_ID: {
      type: String,

    },

    flagging: {
      type: String
    },
    username: {
      type: String,
      // required: true
    },
  },
  ],
  flags: [Flag.schema]
},

  {
    toJSON: {
      getters: true
    }
  }
);
postSchema.virtual('voteCount').get(function () {
  return this.votes.length;
});
postSchema.virtual('flagCount').get(function () {
  return this.flags.length;
});
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Post = require('./Post');

const voteSchema = new Schema({
    post_ID: {
        type: String,

    },

    voting: {
        type: String
    },
    username: {
        type: String,
        // required: true
      },


}
);

const Vote = model('Vote', voteSchema);

module.exports = Vote;
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Post = require('./Post');

const flagSchema = new Schema({
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


}
);

const Flag = model('Flag', flagSchema);

module.exports = Flag;
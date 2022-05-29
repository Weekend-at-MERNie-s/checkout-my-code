const { Schema, model, Types } = require("mongoose");
const User = require("./User");
const Post = require("./Post");
const dateFormat = require('../utils/date-format');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: "You must enter a comment",
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTimeStamp => dateFormat(formatTimeStamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      // virtuals: true,
      getters: true,
    },
    id: false,
  }
);


//RETRIEVES LENGTH OF COMMENTS REACTIONS ARRAY FIELD <--might need this to add likes option
// commentSchema.virtual("likeCount").get(function () {
//   return this.likes.length;
// });

//THIS MAY NOT BE NECCESSARY
// function formatTimeStamp(date) {
//   return moment(date).format("MMMM Do YY, h:mm a");
// }
const Comment = model("Comment", commentSchema);

module.exports = Comment;
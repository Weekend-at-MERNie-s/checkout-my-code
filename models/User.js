const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "You must enter a username",
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  userCreated: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      // default: Types.ObjectId(),
      ref: 'Comment',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      // type: String,
      ref: 'User',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
    // getters: true,
  },
  id: false,
});

//RETRIEVES NUMBER OF USERS FRIENDS 
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;

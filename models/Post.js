const { Schema, model } = require('mongoose');
const User = require("./User");
const Comment = require('./Comment');

const dateFormat = require('../utils/date-format');

const postSchema = new Schema(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTimeStamp => dateFormat(formatTimeStamp)
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
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
const Post = model("Post", postSchema);

module.exports = Post;
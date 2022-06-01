//COPIED FROM ACTIVITIES AND UPDATED
const { User, Comment, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const auth = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('comments')
          .populate('post')
          .populate('friends');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-_V -password')
        .populate('comments')
        .populate('post')
        .populate('friends')
    },
    user: async ( parent, { username }) => {
      return User.findOne( { username })
      .select('-v -password')
      .populate('comments')
      .populate('post')
      .populate('friends')
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find({ username }) 
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id});
    },
    comments: async (parent,  { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    }
  },

  Mutation: {
    // login resolver

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = auth.signToken(user);

      return { token, user };
  },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
          throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
      }
      // all conditional are pass create token
      const token = auth.signToken(user);

      return { token, user };
  },
      //USE EITHER LINES 17-19 OR 20-31, I THINK ITS 20-31
    // addComment: async (parent, { commentText, commentAuthor }) => {
    //   return Comment.create({ commentText, commentAuthor });
    // },
    addComment: async (parent, { postId, commentText }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },


  //   comment: async (parent, { commentId }) => {
  //     return Comment.findOne({ _id:  commentId });
  //   },
  // },

  // Mutation: {
  //     //USE EITHER LINES 17-19 OR 20-31, I THINK ITS 20-31
  //   // addComment: async (parent, { commentText, commentAuthor }) => {
  //   //   return Comment.create({ commentText, commentAuthor });
  //   // },
  //   addComment: async (parent, { postId, commentText }) => {
  //     return Post.findOneAndUpdate(
  //       { _id: postId },
  //       {
  //         $addToSet: { comments: { commentText } },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },

  //     //USE EITHER LINES 34-36 OR 37-45, I THINK ITS 37-45
  //   // removeComment: async (parent, { commentId }) => {
  //   //   return Comment.findOneAndDelete({ _id: commentId });
  //   // },
  //   removeComment: async (parent, { postId, commentId }) => {
  //     return Post.findOneAndUpdate(
  //       { _id: postId },
  //       { $pull: { comments: { _id: commentId } } },
  //       { new: true }
  //     );
  //   },
  // },
  }
};

module.exports = resolvers;

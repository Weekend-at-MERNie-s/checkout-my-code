//COPIED FROM ACTIVITIES AND UPDATED
const { User, Comment, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const auth = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("comments")
          .populate("post")
          .populate("friends");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('comments')
        .populate('post')
        .populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('comments')
        .populate('post')
        .populate('friends');
    },

    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    posts: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
  
    // posts: async () => {
    //   return Post.find()
    //     .populate('comments')
    // },

    // post: async (parent,  { _id }) => {
    //   return Post.findOne({ _id })
    //   .populate('comments')
    // },

    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createAt: -1 })
    },
    comment: async (parent,  { _id }) => {
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
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");
        return updateUser;
      }
      throw new AuthenticationError("You need to be logged in friend!");
    },

    addPost: async (parent, args, context) => {
      console.log("context", context.user);
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );
        return post;
      }
      throw new AuthenticationError('You need to be logged in friend!')
    },

    // editPost: async (parents, args, context) => {
    //   return await Post.findByIdAndUpdate(
    //     { _id: }
    //   )
    // },

    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  }
};

module.exports = resolvers;

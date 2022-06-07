//COPIED FROM ACTIVITIES AND UPDATED
const { User, Comment, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
// const auth = require("../utils/auth");
const { signToken } = require("../utils/auth");

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
        .select("-__v -password")
        .populate("comments")
        .populate("post")
        .populate("friends");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("comments")
        .populate("post")
        .populate("friends");
    },

    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
      // return Post.find()
      //   .populate('comments')
      //   .sort({ createAt: -1 })
    },

    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
      // .populate('comments')
    },
    // posts: async () => {
    //   return Post.find()
    //     .populate('comments')
    // },

    // post: async (parent,  { _id }) => {
    //   return Post.findOne({ _id })
    //   .populate('comments')
    // },

    // comments: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Comment.find(params).sort({ createAt: -1 })
    // },
    // comment: async (parent, { _id }) => {
    //   return Comment.findOne({ _id });
    // }
  },

  Mutation: {
    // login resolver

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      console.log("heree login");
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      // all conditional are pass create token
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          context.user._id,
          args,
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in friend!");
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
      console.log("context", context);
      console.log("args", args);

      try {
        if (context.user) {
          console.log("hereeee");
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
      } catch (error) {
        console.log("addPost error", error);
        throw new AuthenticationError("You need to be logged in friend!");
      }
    },

    editPost: async (parents, args, context) => {
      if (context.user) {
        const {
          postId,
          title,
          postContent,
          postRepoLink,
          deployedApplication,
        } = args;
        const updatePost = await Post.findByIdAndUpdate(postId, {
          title: title,
          postContent: postContent,
          postRepoLink: postRepoLink,
          deployedApplication: deployedApplication,
        });
        return updatePost;
      }
      throw new AuthenticationError("You need to be logged in friend!");
    },

    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $push: {
              comments: { commentText, username: context.user.username },
            },
          },
          { new: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError("You need to be logged in friend!");
    },

    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        const updateComment = await Post.findOneAndUpdate(
          { _id: postId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
        return updateComment;
      }
      throw new AuthenticationError("You need to be logged in friend!");
    },
  },
};

module.exports = resolvers;

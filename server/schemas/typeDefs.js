// COPIED FROM ACTIVITIES AND NOT UPDATED YET. CHANGE THOUGHT TO COMMENT.

const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        userGithub: String
        bio: String
        friendCount: Int 
        post: [Post]
        votes: [Vote]
        comments: [Comment]
        friends: [User]

    }

    type Post {
        _id: ID
        title: String 
        postContent: String
        postRepoLink: String
        deployedApplication: String
        createdAt: String
        username: String
        commentCount: Int
        flags:[Flag]
        flagCount: Int
        votes: [Vote]
        voteCount: Int
        comments: [Comment]
    }

    type Vote {
      _id: ID
      post_id: ID
      voting: String
    }
      type Flag {
      _id: ID
      flagging: String
    
    }

    type Comment {
        _id: ID
        commentText: String
        username: String
        createdAt: String
    }


    type Auth {
        token: ID
        user: User
      }

      type Query {
          me: User
          users: [User]
          user(username: String!): User
          posts(username: String): [Post]
          post(_id: ID!): Post
          comments: [Comment]
          commentCount: Int
          votes: [Vote]
          voteCount: Int
          flags: [Flag]
          flagCount: Int
          comment(_id: ID!): Comment
      }
      



    type Mutation {
        updateUser(username: String, userGithub: String, email: String, bio: String): User
        addUser(username: String!, userGithub: String!, email: String!, password: String!, bio: String): Auth
        login(email: String!, password: String!): Auth
        addComment(postId: ID!,commentText: String!): Post
        addVote(postId: ID!): Post
        addFlag(postId: ID!): Post
        removeComment(commentId: ID!): Post
        addFriend(friendId: ID!): User
        addPost(title: String!, postContent: String!, postRepoLink: String!, deployedApplication: String): Post
        editPost(title: String, postContent: String!, postRepoLink: String!, deployedApplication: String): Post
    }
`;

module.exports = typeDefs;

// COPIED FROM ACTIVITIES AND NOT UPDATED YET. CHANGE THOUGHT TO COMMENT.

const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        userGithub: String
        friendCount: Int 
        post: [Post]
        comments: [Comment]
        friends: [User]

    }
    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }

    type Post {
        _id: ID
        title: String 
        postContent: String
        postRepoLink: String
        deployedApplication: String
        createdAt: String
        username: String 
        comments: [Comment]
    }


    type Auth {
        token: ID
        user: User
      }

      type Query {
          me: User
          users: [User]
          user(username: String!): User
          posts(_id: ID!): [Post]
          post(_id: ID!): Post
          comments: [Comment]
          comment(_id: ID!): Comment
      }
      



    type Mutation {
        updateUser(username: String, userGithub: String, email: String): User
        addUser(username: String!, userGithub: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addComment(commentText: String!): Post
        removeComment(commentId: ID!): Post
        addFriend(friendId: ID!): User
        addPost(title: String!, postContent: String!, postRepoLink: String!, deployedApplication: String): Post
        editPost(title: String, postContent: String!, postRepoLink: String!, deployedApplication: String): Post
    }
`;

module.exports = typeDefs;

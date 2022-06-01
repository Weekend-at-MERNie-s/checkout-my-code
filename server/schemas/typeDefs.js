// COPIED FROM ACTIVITIES AND NOT UPDATED YET. CHANGE THOUGHT TO COMMENT.

const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        userGithub: String
        friendCount: Int
        posts: [Post]
        comments: [Comment]
        friends: [User]
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
        comments: [Comment]!
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
          posts: [Post]
          post(_id: ID!): Post
          user(username: String!): User
          comments: [Comment]
          comment(_id: ID!): Comment
      }
      



    type Mutation {
        updateUser(firstName: String, lastName: String, email: String, image: String, about: String, favorite: String): User
        addUser(firstName: String!, lastName: String!, email: String!,password: String!): Auth
        login(email: String!, password: String!): Auth
        addComment(commentText: String!): Post
        removeComment( commentId: ID!): Post
    }
`;

module.exports = typeDefs;

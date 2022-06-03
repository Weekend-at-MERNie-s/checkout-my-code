// COPIED FROM ACTIVITIES AND NOT UPDATED YET. CHANGE THOUGHT TO COMMENT.

const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        title: String
        email: String
        userGithub: String

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
    }


    type Auth {
        token: ID
        user: User
      }

      type User {
          _id: ID
          username: String
          email: String
          userCreated: String
          userGithub: String
          comments: [Comment]
      }

      type Query {
          me: User
          comments: [Comment]
          comment(_id: ID!): Comment
      }
      



    type Mutation {
        updateUser(firstName: String, lastName: String, email: String, image: String, about: String, favorite: String): User
        addUser( username: String!, email: String!, password: String!,userGithub: String!): Auth
        login(email: String!, password: String!): Auth
        addComment(commentText: String!): Post
        removeComment( commentId: ID!): Post
    }
`;

module.exports = typeDefs;

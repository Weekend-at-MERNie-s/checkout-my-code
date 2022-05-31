// COPIED FROM ACTIVITIES AND NOT UPDATED YET. CHANGE THOUGHT TO COMMENT.

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    comments: [Comment]
  }

  type Mutation {

    removeComment( commentId: ID!): Comment
    addComment(commentId: ID!, commentText: String!): Comment


  }
`;

module.exports = typeDefs;



//COPIED FROM ACTIVITIES AND NOT UPDATED YET. CHANGE THOUGHT TO COMMENT.

const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Post {
        _id: ID
        title: String
        createdAt: String
        postContent: String 
    }
    type Comments {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
        comments: [Comment]!
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
    }

    type Mutation {
        addComment(commentText: String!): Post
        removeComment( commentId: ID!): Post
    }
`;

module.exports = typeDefs;

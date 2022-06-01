// COPIED FROM ACTIVITIES AND NOT UPDATED YET. CHANGE THOUGHT TO COMMENT.

const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        userGithub: String 
        friendCount: Int
    }

    type Query {
        me: User
    }
`;

module.exports = typeDefs;

import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
   posts(username: $username) {
        _id: ID
        title: String 
        postContent: String
        postRepoLink: String
        deployedApplication: String
        createdAt: String
        username: String 
       comments {
        commentText
        createdAt
        username
       
      }
    }
  }
`;

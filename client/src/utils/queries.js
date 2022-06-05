import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
   posts(username: $username) {
        _id
        title
        postContent
        postRepoLink
        deployedApplication
        createdAt
        username
     
    }
  }
`;

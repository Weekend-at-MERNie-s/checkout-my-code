import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    thoughts(username: $username) {
      _id
      title
      postContent
      postRepoLink
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
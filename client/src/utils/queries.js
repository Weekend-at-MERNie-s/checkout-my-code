import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query Posts {
  posts {
    _id
    title
    postContent
    username
    postRepoLink
    deployedApplication
    createdAt
    comments{
      _id
      commentAuthor
      commentText
      createdAt
    }
  }

    }
  
`;

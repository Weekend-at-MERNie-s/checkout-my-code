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
    commentCount
    comments{
      _id
      username
      commentAuthor
      commentText
      createdAt
    }
  }

    }
  
`;

export const QUERY_POST = gql `
query Post($id: ID!) {
  post(_id: $id) {
    _id
    title
    postContent
    postRepoLink
    deployedApplication
    createdAt
    username
    commentCount
    comments {
      commentText
      username
      createdAt
    }
  }
}`
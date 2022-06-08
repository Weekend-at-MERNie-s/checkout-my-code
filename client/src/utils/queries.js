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
      commentText
      createdAt
    }
  }

    }
  
`;

export const QUERY_POST = gql`
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
}`;

export const QUERY_ME = gql`
  {
  me {
    _id
    username
    email
    userGithub
    bio
    friendCount
    post {
      _id
      title
      postContent
      postRepoLink
      deployedApplication
      createdAt
      username
      commentCount
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
    friends {
      _id
      username
    }
  }
}
`
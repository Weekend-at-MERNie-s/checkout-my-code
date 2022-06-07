import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String! $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $userGithub: String!, $email: String!, $password: String!) {
    addUser(username: $username,userGithub:$userGithub, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $postContent: String!, $postRepoLink: String!, $deployedApplication: String) {
    addPost(title: $title, postContent: $postContent, postRepoLink: $postRepoLink, deployedApplication: $deployedApplication) {
      _id
    }
  }
`;

// export const ADD_FRIEND = gql`
//   mutation addFriend($id: ID!)
// `
export const ADD_COMMENT = gql`
mutation addComment($postId: ID!, $commentText: String!) {
  addComment(postId: $postId, commentText: $commentText) {
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
      _id
      username
      createdAt
    }
  }
}
`
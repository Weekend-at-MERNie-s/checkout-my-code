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
  mutation addUser($username: String!, $userGithub: String!, $email: String!, $password: String!, $bio: String) {
    addUser(username: $username,userGithub:$userGithub, email: $email, password: $password, bio: $bio) {
      token
      user {
        username
      }
    }
  }
`;

export const EDIT_USER = gql`
mutation updateUser($username: String, $userGithub: String, $email: String, $bio: String) {
  updateUser(username: $username, userGithub: $userGithub, email: $email, bio: $bio) {
    _id
    username
    email
    userGithub
    bio
  }
}`

export const ADD_POST = gql`
  mutation addPost($title: String!, $postContent: String!, $postRepoLink: String!, $deployedApplication: String) {
    addPost(title: $title, postContent: $postContent, postRepoLink: $postRepoLink, deployedApplication: $deployedApplication) {
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

export const EDIT_POST = gql`
mutation editPost($postContent: String!, $postRepoLink: String!, $title: String, $deployedApplication: String) {
  editPost(postContent: $postContent, postRepoLink: $postRepoLink, title: $title, deployedApplication: $deployedApplication) {
    _id
    title
    postContent
    postRepoLink
    deployedApplication
  }
}
`

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
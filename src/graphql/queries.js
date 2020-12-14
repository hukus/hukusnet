/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPosts = /* GraphQL */ `
  query GetPosts($id: Int!) {
    getPosts(id: $id) {
      content
      id
      postDate
      userId
    }
  }
`;
export const getUserByName = /* GraphQL */ `
  query GetUserByName($name: String!) {
    getUserByName(name: $name) {
      email
      id
      name
    }
  }
`;
export const getUserPosts = /* GraphQL */ `
  query GetUserPosts($userId: Int!) {
    getUserPosts(userId: $userId) {
      content
      id
      postDate
      userId
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: Int!) {
    getUsers(id: $id) {
      email
      id
      name
    }
  }
`;
export const listPostss = /* GraphQL */ `
  query ListPostss {
    listPostss {
      content
      id
      postDate
      userId
    }
  }
`;
export const listUserss = /* GraphQL */ `
  query ListUserss {
    listUserss {
      email
      id
      name
    }
  }
`;

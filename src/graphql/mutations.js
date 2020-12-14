/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPosts = /* GraphQL */ `
  mutation CreatePosts($createPostsInput: CreatePostsInput!) {
    createPosts(createPostsInput: $createPostsInput) {
      content
      id
      postDate
      userId
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers($createUsersInput: CreateUsersInput!) {
    createUsers(createUsersInput: $createUsersInput) {
      email
      id
      name
    }
  }
`;
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts($id: Int!) {
    deletePosts(id: $id) {
      content
      id
      postDate
      userId
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers($id: Int!) {
    deleteUsers(id: $id) {
      email
      id
      name
    }
  }
`;
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts($updatePostsInput: UpdatePostsInput!) {
    updatePosts(updatePostsInput: $updatePostsInput) {
      content
      id
      postDate
      userId
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers($updateUsersInput: UpdateUsersInput!) {
    updateUsers(updateUsersInput: $updateUsersInput) {
      email
      id
      name
    }
  }
`;

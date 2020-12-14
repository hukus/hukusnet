/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deletePosts = /* GraphQL */ `
  mutation DeletePosts($id: Int!) {
    deletePosts(id: $id) {
      id
      userId
      postDate
    }
  }
`;
export const createPosts = /* GraphQL */ `
  mutation CreatePosts($createPostsInput: CreatePostsInput!) {
    createPosts(createPostsInput: $createPostsInput) {
      id
      userId
      postDate
    }
  }
`;
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts($updatePostsInput: UpdatePostsInput!) {
    updatePosts(updatePostsInput: $updatePostsInput) {
      id
      userId
      postDate
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers($id: Int!) {
    deleteUsers(id: $id) {
      id
      name
      email
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers($createUsersInput: CreateUsersInput!) {
    createUsers(createUsersInput: $createUsersInput) {
      id
      name
      email
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers($updateUsersInput: UpdateUsersInput!) {
    updateUsers(updateUsersInput: $updateUsersInput) {
      id
      name
      email
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

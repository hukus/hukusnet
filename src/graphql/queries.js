/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPosts = /* GraphQL */ `
  query GetPosts($id: Int!) {
    getPosts(id: $id) {
      id
      userId
      postDate
    }
  }
`;
export const listPostss = /* GraphQL */ `
  query ListPostss {
    listPostss {
      id
      userId
      postDate
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: Int!) {
    getUsers(id: $id) {
      id
      name
      email
    }
  }
`;
export const listUserss = /* GraphQL */ `
  query ListUserss {
    listUserss {
      id
      name
      email
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;

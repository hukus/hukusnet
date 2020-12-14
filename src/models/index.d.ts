import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Posts {
  readonly id: number;
  readonly userId: number;
  readonly postDate?: string;
  constructor(init: ModelInit<Posts>);
}

export declare class Users {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  constructor(init: ModelInit<Users>);
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}
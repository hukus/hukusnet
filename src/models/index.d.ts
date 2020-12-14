import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Posts {
  readonly content?: string;
  readonly id: number;
  readonly postDate?: string;
  readonly userId: number;
  constructor(init: ModelInit<Posts>);
}

export declare class Users {
  readonly email: string;
  readonly id: number;
  readonly name: string;
  constructor(init: ModelInit<Users>);
}


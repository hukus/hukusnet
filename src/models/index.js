// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Posts, Users } = initSchema(schema);

export {
  Todo,
  Posts,
  Users
};
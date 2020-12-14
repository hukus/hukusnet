// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Posts, Users } = initSchema(schema);

export {
  Posts,
  Users
};
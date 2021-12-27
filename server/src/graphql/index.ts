import { GraphQLSchema } from 'graphql';
import { Mutations } from './mutations';
import { Queries } from './queries';
import { Subscription } from './subscription';

export const schema = new GraphQLSchema({
  query: Queries,
  mutation: Mutations,
  subscription: Subscription,
});

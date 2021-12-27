import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { pubsub } from './pubsub';

export const Subscription = new GraphQLObjectType({
  name: 'Subscription',
  fields: () => ({
    messages: MESSAGES,
    newMessage: NEW_MESSAGE,
  }),
});

const MESSAGES: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(GraphQLString),
  subscribe: () => {
    return pubsub.asyncIterator(['MESSAGES']);
  },
};

const NEW_MESSAGE: GraphQLFieldConfig<any, any, any> = {
  type: GraphQLString,
  subscribe: () => {
    return pubsub.asyncIterator(['NEW_MESSAGES']);
  },
};

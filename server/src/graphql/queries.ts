import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { getMessages } from '../data';

export const Queries = new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({
    getAllMessage: GET_ALL_MESSAGES,
  }),
});

const GET_ALL_MESSAGES: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(GraphQLString),
  async resolve() {
    return getMessages();
  },
};

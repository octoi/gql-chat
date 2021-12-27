import { GraphQLFieldConfig, GraphQLObjectType, GraphQLString } from 'graphql';
import { addMessage } from '../data';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    sendMessage: SEND_MESSAGE,
  }),
});

const SEND_MESSAGE: GraphQLFieldConfig<any, any, any> = {
  type: GraphQLString,
  args: {
    msg: { type: GraphQLString },
  },
  resolve(_: any, { msg }: { msg: string }) {
    addMessage(msg);
    return msg;
  },
};

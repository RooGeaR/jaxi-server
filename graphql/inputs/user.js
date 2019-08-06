import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

import { ProjectInput } from './project';

const UserInput = new GraphQLInputObjectType({
  name: 'userInput',
  fields: () => ({
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      email: { type: GraphQLString },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      avatar: { type: GraphQLString },
      created_at: { type: GraphQLString },
      projects: { type: new GraphQLList(ProjectInput) }
  })
});

const UserInputUpdate = new GraphQLInputObjectType({
  name: 'userInputUpdate',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});

export { UserInput, UserInputUpdate };

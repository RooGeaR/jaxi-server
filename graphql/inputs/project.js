import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export const ProjectInput = new GraphQLInputObjectType({
  name: 'projectInput',
  fields: () => ({
      user_id: { type: GraphQLID },
      title: { type: GraphQLString },
      status_project: { type: GraphQLInt },
      created_at: { type: GraphQLString }
  })
});

export const ProjectInputUpdate = new GraphQLInputObjectType({
  name: 'projectInputUpdate',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  })
});

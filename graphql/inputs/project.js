import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'projectInput',
  fields: () => ({
      user_id: { type: GraphQLID },
      title: { type: GraphQLString },
      status_project: { type: GraphQLInt },
      created_at: { type: GraphQLString }
  })
});

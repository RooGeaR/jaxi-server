import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import ProjectInput from './project';

export default new GraphQLInputObjectType({
  name: 'userInput',
  fields: () => ({
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      password: { type: GraphQLString },
      avatar: { type: GraphQLString },
      created_at: { type: GraphQLString },
      projects: { type: new GraphQLList(ProjectInput) }
  })
});

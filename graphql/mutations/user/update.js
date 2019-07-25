import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import models from '../../../models';
import User from '../../types/user';

export default {
  type: User,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (source, args) {
    return models.project
      .findByPk(args.id)
      .then((project) => {
        return project.update({ 
          first_name: args.first_name,
          last_name: args.last_name,
          password: args.password
        });
      });
  }
};

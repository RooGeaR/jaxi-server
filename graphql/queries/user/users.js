import {
  GraphQLList,
  GraphQLInt,
} from 'graphql';

import models from '../../../models';
import User from '../../types/user';

export default {
  type: new GraphQLList(User),
  args: {
    first: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
    },
  },
  resolve(root, args) {
    const offset = args.offset || 0;
    const limit = args.first || 10;
    delete args.offset;
    delete args.first;
    return models.users.findAll({where: args, include: [ { model: models.project } ], offset, limit});
  }
};

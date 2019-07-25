import {
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import models from '../../../models';
import User from '../../types/user';

export default {
  type: User,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve (source, args) {
    return models.users
      .findByPk(args.id)
      .then((user) => {
        return user.destroy({ force: true });
      });
  }
};

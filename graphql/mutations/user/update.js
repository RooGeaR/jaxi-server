import models from '../../../models';
import User from '../../types/user';
import { UserInputUpdate } from '../../inputs/user';

export default {
  type: User,
  args: {
    user: {
      type: UserInputUpdate
    }
  },
  resolve (source, args) {
    return models.users
      .findByPk(args.user.id)
      .then((user) => {
        return user.update({
          first_name: args.user.first_name,
          last_name: args.user.last_name,
          email: args.user.email,
          username: args.user.username,
          password: args.user.password
        });
      });
  }
};

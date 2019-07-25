import {
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import models from '../../../models';
import Project from '../../types/project';

export default {
  type: Project,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve (source, args) {
    return models.project
      .findByPk(args.id)
      .then((project) => {
        return project.destroy({ force: true });
      });
  }
};

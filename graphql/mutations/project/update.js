import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import models from '../../../models';
import Project from '../../types/project';

export default {
  type: Project,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    status_project: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve (source, args) {
    return models.project
      .findByPk(args.id)
      .then((project) => {
        return project.update({ 
          title: args.title,
          status_project: args.status_project,
          user_id: args.user_id
        });
      });
  }
};

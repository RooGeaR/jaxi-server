import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models';
import Project from '../../types/project';

export default {
    type: Project,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.project.findByPk(args.id);
    }
};

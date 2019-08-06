import models from '../../../models';
import Project from '../../types/project';
import { ProjectInputUpdate } from '../../inputs/project';

export default {
  type: Project,
  args: {
    project: {
      type: ProjectInputUpdate
    }
  },
  resolve (source, args) {
    return models.project
      .findByPk(args.project.id)
      .then((project) => {
        return project.update({ 
          title: args.project.title,
          status_project: args.project.status_project,
          user_id: args.project.user_id
        });
      });
  }
};

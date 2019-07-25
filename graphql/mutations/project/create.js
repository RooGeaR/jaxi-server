import models from '../../../models';
import Project from '../../types/project';
import ProjectInput from '../../inputs/project';

export default {
    type: Project,
    args: {
        project: {
            type: ProjectInput
        }
    },
    resolve (source, args) {
        return models.project.build({
            user_id: args.project.user_id,
            title: args.project.title,
            created_at: args.project.created_at,
        }).save().then(function(newproject) {
            return models.project.findByPk(newproject.id);
        });
    }
};
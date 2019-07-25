import models from '../../../models';
import User from '../../types/user';
import UserInput from '../../inputs/user';

export default {
    type: User,
    args: {
        user: {
            type: UserInput
        }
    },
    resolve (source, args) {
        return models.users.build({
            first_name: args.user.first_name,
            last_name: args.user.last_name,
            password: args.user.password,
            created_at: args.user.created_at,
        }).save().then(function(newuser) {
            const projects = args.user.projects || [];
            projects.forEach((project) => {
              models.project.create({
                user_id: newuser.id,
                title: project.title,
                created_at: project.created_at
              });
            });

            return models.users.findByPk(newuser.id);
        });
    }
};

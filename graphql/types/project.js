import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} from 'graphql';

import User from './user.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'project',
    description: 'Project',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "project ID",
                resolve (project) {
                    return project.id;
                }
            },
            user: {
                type: User,
                description: "User responsible for project",
                resolve (project) {
                    if (project.hasOwnProperty('user')) {
                      return project.user;
                    }
                    return models.users.findByPk(project.user_id);
                }
            },
            title: {
                type: GraphQLString,
                description: "title",
                resolve (project) {
                    return project.title;
                }
            },
            status_project: {
                type: GraphQLInt,
                description: "status project",
                resolve (project) {
                    return project.status_project;
                }
            },


        };
    }
});

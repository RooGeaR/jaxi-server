import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import Project from './project';
import models from '../../models';

export default new GraphQLObjectType({
    name: 'user',
    description: 'User',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "user's ID",
                resolve (user) {
                    return user.id;
                }
            },
            first_name: {
                type: GraphQLString,
                description: "user's first name",
                resolve (user) {
                    return user.first_name;
                }
            },
            last_name: {
                type: GraphQLString,
                description: "user's last name",
                resolve (user) {
                    return user.last_name;
                }
            },
            email: {
                type: GraphQLString,
                description: "user's email",
                resolve (user) {
                    return user.email;
                }
            },
            username: {
                type: GraphQLString,
                description: "user's username",
                resolve (user) {
                    return user.username;
                }
            },
            password: {
                type: GraphQLString,
                description: "user's password",
                resolve (user) {
                    return user.password;
                }
            },
            avatar: {
                type: GraphQLString,
                description: "user's avatar",
                resolve (user) {
                    return user.avatar;
                }
            },
            projects: {
                type: new GraphQLList(Project),
                description: "user's projects",
                resolve(user) {
                    if (user.hasOwnProperty('projects')) {
                      return user.projects;
                    }
                    return models.project.findAll({ where: { user_id: user.id } });
                }
            }
        };
    }
});

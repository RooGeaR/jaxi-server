'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    }).then(() => {
      return queryInterface.createTable('project', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status_project: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        }
      });
    }).then(() => {
      return queryInterface.addConstraint('project', [ 'user_id' ], {
        type: 'FOREIGN KEY',
        name: 'FK_project-users',
        references: {
            table: 'users',
            field: 'id'
        },
        onDelete: 'cascade'
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('project', 'FK_project-users').then(function() {
      return queryInterface.dropTable('project');
    }).then(function() {
      return queryInterface.dropTable('users');
    });
  }
};

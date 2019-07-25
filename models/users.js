'use strict';
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        avatar: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    user.associate = function(models) {
        models.users.hasMany(models.project, { foreignKey: "user_id", sourceKey: "id" });
    }

    return user;
}
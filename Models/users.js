const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {

        role_id: {
            type: Sequelize.INTEGER,
        },
        users_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        users_level: {
            type: Sequelize.STRING,
            allowNull: true
        },
        users_pas: {
            type: Sequelize.STRING,
            allowNull: false
        },
        profilePic: {
            type: Sequelize.STRING,
            allowNull: true
        }
    })
    users.associate = model => {
        users.belongsTo(model.role, {
            foreignKey: 'role_id'
        });
    }
    return users;
};
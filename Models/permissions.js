const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports=(sequelize, Sequelize)=>{
    const permissions= sequelize.define("permissions",{
        perm_name:{
            type: Sequelize.STRING,
            allowNull :false,
        },
        perm_description:{
            type: Sequelize.STRING,
            allowNull :false,
        },

    })
    permissions.associate=model=>{
        permissions.belongsToMany(model.role, {
            through: 'RolePermission',
            as: 'roles',
            foreignKey: 'perm_id'
          });

    }
    return permissions;
};
const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");


module.exports=(sequelize, Sequelize)=>{
    
    const role= sequelize.define("Role",{
        role_name:{
            type: Sequelize.STRING,
            allowNull :false,
        },
        role_description:{
            type :Sequelize.STRING,
            allowNull :false
        },
        
    })
    role.associate=model=>{
        role.hasMany(model.User, {
            foreignKey: 'role_id',
            as: 'users'
          });
          role.belongsToMany(model.Permission, {
            through: 'RolePermission',
            as: 'permissions',
            foreignKey: 'role_id'
          });
    }
    return role;
};
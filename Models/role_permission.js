const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");


module.exports=(sequelize, Sequelize)=>{
    const RolePermission= sequelize.define("RolePermission",{
        role_id:{
            type: Sequelize.INTEGER,
        },
        perm_id:{
            type: Sequelize.INTEGER,
        },
        
    })
    return RolePermission;
};
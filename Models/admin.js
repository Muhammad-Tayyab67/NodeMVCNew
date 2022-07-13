const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports=(sequelize, Sequelize)=>{
    const admin= sequelize.define("admin",{
        admin_ID:{
            type: Sequelize.INTEGER,
            allowNull :false,
            unique : true
        },
        admin_name:{
            type :Sequelize.STRING,
            allowNull :true
        },
        admin_level:{
            type :Sequelize.STRING,
            allowNull :true
        }
    })
    return admin;
};
const DBconfig=require('../Config/DBconfig.js')

const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');

const sequelize = new sequelize(
  DBconfig.DB,
  DBconfig.USER,
  DBconfig.PASSWORD,
  {
    host: DBconfig.HOST,
    dialect: DBconfig.dialect,
    operatorsAliases: false,

    pool: {
      max: DBconfig.pool.max,
      min: DBconfig.pool.min,
      acquire: DBconfig.pool.acquire,
      idle: DBconfig.pool.idle
    }
  }
);

const db={};

db.sequelize= sequelize;
db.Sequelize= Sequelize;

db.admin=require('./admin.js')(sequelize,Sequelize);

module.exports = db;

const DBconfig=require('../Config/DBconfig.js')

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
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

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})



const db={};

db.sequelize= sequelize;
db.Sequelize= Sequelize;

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


db.users=require('../Models/users.js')(sequelize,Sequelize);
db.role=require('../Models/roles.js')(sequelize,Sequelize);
db.permissions=require('../Models/permissions.js')(sequelize,Sequelize);
db.rolepermission=require('../Models/role_permission.js')(sequelize,Sequelize);



module.exports = db;

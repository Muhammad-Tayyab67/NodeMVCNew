const express = require("express");
const cors = require("cors");

const app = express();

db.sequelize.sync({force:false});

var corsOptions = {
  origin: "http://localhost:8081"
 };

 app.use(cors(corsOptions));
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 app.get('/',function(res,req){
console.log('hello ')
}
)

 const PORT=process.env.PORT || 8088

 app.listen(PORT,()=>
 {console.log('server running on Port :'+PORT)});
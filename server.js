const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

const db=require('./Models')


const router = require('./Routers/adminrouter.js')
app.use('/api/admin', router)


 app.use(express.urlencoded({ extended: true }));

 app.get('/',function(res,req){
console.log('hello')
}
)

 const PORT=process.env.PORT || 6066

 app.listen(PORT,()=>
 {console.log('server running on Port :'+PORT)});
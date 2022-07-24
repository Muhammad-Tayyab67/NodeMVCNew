const express = require("express");
const cors = require("cors");
const fileupload=require('express-fileupload')

const app = express();
app.use(express.json());
app.use(fileupload());
const db=require('./Models')


const router = require('./Routers/usersrouter.js')
const signac=require("./Routers/authroute.js")
const RolePerm=require("./Routers/RolePermissionRoute.js")

app.use('/api/users', RolePerm)
app.use('/api/users', router)
app.use('/api/users', signac)


app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));

 app.get('/',function(res,req){
console.log('hello')
}
)

 const PORT=process.env.PORT || 6066

 app.listen(PORT,()=>
 {console.log('server running on Port :'+PORT)});
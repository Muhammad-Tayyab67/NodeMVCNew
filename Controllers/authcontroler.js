const config=require('../Config/DBconfig.js');
const db=require('../Models');

const admin=db.admin;
var jwt = require("jsonwebtoken");


const signup=async(req,res)=>{

  
    let info = {
      admin_ID: req.body.admin_Id,
     admin_name:req.body.admin_name,
     admin_level:req.body.admin_level
  }
  
  const admin = await admin.create(info)
  .then(admin => {
    res.send({ message: "admin registered successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
  
  }

  const signin=async(req,res)=>{
    const Admin =await admin.findOne({
        where: {
          admin_name: req.body.admin_name
        }
      })
        .then(Admin => {
          if (!Admin) {
            return res.status(404).send({ message: "admin Not found." });
          }
    
          
    
          if (Admin.admin_pass!=req.body.admin_pass) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }
    
          var token = jwt.sign({ id: admin.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
    
            res.status(200).send({
              id: Admin.admin_ID,
              adminname: Admin.admin_name,
              admin_pass: Admin.admin_pass,
              accessToken: token
            });
            
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
  

}

  module.exports={
    signup,
    signin
  }
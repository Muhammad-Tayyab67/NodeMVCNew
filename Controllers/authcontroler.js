const config=require('../Config/auth.config');
const db=require('../Models');
const user=db.users;
var jwt = require("jsonwebtoken");




const signup=async (req,res)=>{
  

    let info = {
     users_name :req.body.users_name,
     users_pas: req.body.users_pas,
     users_level:req.body.users_level,
     profilePic: req.file.path
  }
  
  const users = await user.create(info)
  .then(users => {
    res.send({ message: "users registered successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
  
  }

  const signin=async(req,res)=>{
    const users =await user.findOne({
        where: {
          users_name: req.body.users_name
        }
      })
        .then(users => {
          if (!users) {
            return res.status(404).send({ message: "users Not found." });
          }
    
          
    
          if (users.users_pass!=req.body.users_pass) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }
    
          var token = jwt.sign({ id: users.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
    
            res.status(200).send({
                message:"Wellcome Page",
              id: users.users_ID,
              usersname: users.users_name,
              users_pass: users.users_pass,
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
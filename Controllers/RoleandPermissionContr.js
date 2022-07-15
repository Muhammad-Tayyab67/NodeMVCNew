const { where } = require('sequelize/types');
const { role, admin } = require('../Models');
const db=require('../Models')

const role=db.role;

const permissions=db.permissions;


const addrole=async(req,res)=>{

    var info={
        Role: req.body.Role,
        admin_name:req.body.admin_name,

    }
    const arole= await role.create(info).then(
        arole=>{
            if(!arole){
                return res.status(404).send({ message: "Role Not Set." });
            }
            return res.status(200).send({ message: "Role  Set." });

        }
    )
}

const editrole=async(req,res)=>{

   let Id=req.body.id;
   const arole = await role.update(req.body,{ where: { id: Id }})
   .then(
        arole=>{
            if(!arole){
                return res.status(404).send({ message: "Role Not Edited." });
            }
            return res.status(200).send({ message: "Role  Edited." });

        }
    )
}

const deleterole = async (req, res) => {

    let id = req.params.id
    
    await role.destroy({ where: { id: id }} )
  
    res.status(200).send('admin is deleted !')
  
  }

  const addper=async(req,res)=>{

    var info={
        adminpages: req.body.adminpages,
        studentpages:req.body.admi,
        anamyse:req.body.anamyse,
        permissions: req.body.permissions,
        Role :req.body.Role


    }
    const arole= await role.create(info).then(
        arole=>{
            if(!arole){
                return res.status(404).send({ message: "Role Not Set." });
            }
            return res.status(200).send({ message: "Role  Set." });

        }
    )
}
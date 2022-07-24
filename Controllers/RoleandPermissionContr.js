const db=require('../Models')

const Role=db.role;

const Permission=db.permissions;


const addrole=async(req,res)=>{

    var info={
        role_name: req.body.role_name,
        role_description:req.body.role_description,
    }
    const arole= await Role.create(info).then(
        arole=>{
            if(!arole){
                return res.status(404).send({ message: "Role Not Set." });
            }
            return res.status(200).send({ message: "Role  Set." });

        }
    )
}

const editrole=async(req,res)=>{

    let id = req.params.id;
   const arole = await Role.update(req.body,{ where: { id: id }})
   .then(
        arole=>{
            if(!arole){
                return res.status(404).send({ message: "Role Not Updated." });
            }
            return res.status(200).send({ message: "Role  Updated." });

        }
    )
}

const deleterole = async (req, res) => {

    let id = req.params.id
    
    await Role.destroy({ where: { id: id }} )
  
    res.status(200).send('Role is deleted !')
  
  }

  const addper=async(req,res)=>{

    var info={
        perm_name: req.body.perm_name,
        perm_description:req.body.perm_description,
        
    }
    const aper = await Permission.create(info)       
    .then(
        aper=>{
            if(!aper){
                return res.status(404).send({ message: "Permissions Not ." });
            }
            return res.status(200).send({ message: "Permissions  Set." });

        }
    )
}

const editper=async(req,res)=>{

    let id = req.params.id;

    const editper= await Permission.update(req.body,{where: { id: id }}).then(
        editper=>{
            if(!editper){
                return res.status(404).send({ message: "Permissions Not Updated ." });
            }
            return res.status(200).send({ message: "Permissions  Updated." });

        }
    )
}

const delper=async(req,res)=>{

    let id = req.params.id;

    const delper= await Permission.destroy({where: { id: id }}).then(
        delper=>{
            if(!delper){
                return res.status(404).send({ message: "Permissions Not Deleted ." });
            }
            return res.status(200).send({ message: "Permissions  Deleted .." });

        }
    )
}
module.exports={
    addrole,
    editrole,
    deleterole,
    addper,
    editper,
    delper
}
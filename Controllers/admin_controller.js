const db=require('../Models');

const admin=db.admin;

const addAdmin=async(req,res)=>{

  
  let info = {
    admin_ID: req.body.admin_Id,
   admin_name:req.body.admin_name,
   admin_level:req.body.admin_level
}

const product = await admin.create(info)
res.status(200).send(product)
console.log(product)

}
const getAllAdmin = async (req, res) => {

  let Admin = await admin.findAll({})
  res.status(200).send(Admin)

}

const getOneAdmin = async (req, res) => {

  let id = req.params.id
  let Admin = await admin.findOne({ where: { admin_Id: id }})
  res.status(200).send(Admin)

}

const UpdateAdmin = async (req, res) => {

  let id = req.params.id;
  // var info={
  //   admin_name: req.body.a_name,
  //   admin_level: req.body.admin_level
  // }
  const Admin = await admin.update(req.body,{ where: { admin_ID: id }})
  res.status(200).send(Admin)

}
const deleteadmin = async (req, res) => {

  let id = req.params.id
  
  await admin.destroy({ where: { admin_ID: id }} )

  res.status(200).send('admin is deleted !')

}

module.exports={
  addAdmin,
  getAllAdmin,
  getOneAdmin,
  deleteadmin,
  UpdateAdmin
}
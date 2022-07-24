const db=require('../Models');

const users=db.users;


const getAllusers = async (req, res) => {

  let users = await users.findAll({})
  res.status(200).send(users)

}

const getOneusers = async (req, res) => {

  let id = req.params.id
  let users = await users.findOne({ where: { users_Id: id }})
  res.status(200).send(users)

}

const Updateusers = async (req, res) => {

  let id = req.params.id;
  // var info={
  //   users_name: req.body.a_name,
  //   users_level: req.body.users_level
  // }
  const users = await users.update(req.body,{ where: { users_ID: id }})
  res.status(200).send(users)

}
const deleteusers = async (req, res) => {

  let id = req.params.id
  
  await users.destroy({ where: { users_ID: id }} )

  res.status(200).send('users is deleted !')

}

module.exports={
  getAllusers,
  getOneusers,
  deleteusers,
  Updateusers
}
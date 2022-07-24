const userscontroller=require('../Controllers/users_controller.js');

const router=require('express').Router();

router.get('/GetAllusers',userscontroller.getAllusers);

router.get('/GetusersById/:id',userscontroller.getOneusers);

router.put('/Updateusers/:id',userscontroller.Updateusers);

router.delete('/Deleteusers/:id',userscontroller.deleteusers);

module.exports=router;
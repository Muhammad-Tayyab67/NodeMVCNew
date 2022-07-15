const admincontroller=require('../Controllers/admin_controller.js');

const router=require('express').Router();

router.get('/GetAllAdmin',admincontroller.getAllAdmin);

router.get('/GetAdminById/:id',admincontroller.getOneAdmin);

router.put('/UpdateAdmin/:id',admincontroller.UpdateAdmin);

router.delete('/DeleteAdmin/:id',admincontroller.deleteadmin);

module.exports=router;
const role_permission=require('../Controllers/RoleandPermissionContr.js');

const router=require('express').Router();

router.post('/AddRole',role_permission.addrole);

router.put('/UpdateRole/:id',role_permission.editrole);

router.delete('/DeleteRole/:id',role_permission.deleterole);

router.post('/AddPerm',role_permission.addper);

router.put('/UpdatePerm/:id',role_permission.editper);

router.delete('/DeletePerm/:id',role_permission.delper);

module.exports=router;
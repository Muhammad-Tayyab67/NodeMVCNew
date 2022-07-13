const db=require('../Models');

const admin=db.admin;

exports.createadmin=(req,res)=>{
var info={

    admin_ID: req.body.admin_id,
    admin_name : req.body.admin_name,
    admin_level : req.body.admin_level
}

admin.create(info).then(admin=>{
    res.send({ message: "Client registered successfully!" });
})
.catch(er=>{
    res.status(500).send({ message: err.message });
})
}
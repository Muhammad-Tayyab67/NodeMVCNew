const authcontroller = require('../Controllers/authcontroler.js');
const verifySignUp=require('../middleware/signupverify.js')
const upload=require('../middleware/imageupload.js')
const router = require('express').Router();
const util=require('util');
const path=require('path');


router.post('/signup' ,[
    [
        upload.single('profilePic')
    ]
    ,
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ]
], authcontroller.signup);

router.post('/fileupload', function(req, res) {
 //console.log(req.files.foo);
  var file=req.files.foo;
  var filename=file.name;
  const extension=path.extname(filename);
  const allowExtension=/png|jpg|pdf|xlsx|docx/;
  const md=file.md;
  const URL="./uploads/"+filename ;

  if(!allowExtension.test(extension)){throw "Un-Supported File Type -- Please Upload .pdf/.xlsx/.docs or .jpeg Files--"}
  else{
    util.promisify(file.mv)(""+URL);
    res.send({ message: "upload successfully!" });

  }
  
});

router.post('/signin',authcontroller.signin)

module.exports = router;
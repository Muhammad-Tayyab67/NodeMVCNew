const authcontroller = require('../Controllers/authcontroler.js');
const verifySignUp=require('../middleware/signupverify.js')
const multer=require('multer');


const router = require('express').Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);  
}
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    console.log('error 420');
    cb(null, false,);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.post('/signup' ,[
    [
        upload.single('profilePic')
    ]
    ,
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ]
], authcontroller.signup);



router.post('/signin',authcontroller.signin)

module.exports = router;
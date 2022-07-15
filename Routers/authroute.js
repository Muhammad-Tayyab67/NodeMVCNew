const authcontroller = require('../Controllers/authcontroler.js');
const verifySignUp=require('../middleware/signupverify.js')


const router = require('express').Router();


router.post('/signup', [
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ]
], authcontroller.signup);



router.post('/signin')
module.exports = router;
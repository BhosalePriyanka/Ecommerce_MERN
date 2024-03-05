const express = require('express')
const {loginUser,signupUser,forgotPassword,newPassword} = require('../controller/registerController')
const authMiddleware = require('../authMiddleware')


const router = express.Router()

//middleware auth 

// router.use(authMiddleware)
// //login route
// router.post('/login',loginUser)

//logout route
router.post('/register',signupUser)
router.post('/login',loginUser)
router.post('/reset',forgotPassword)
router.post('/password/:token',newPassword)

module.exports = router
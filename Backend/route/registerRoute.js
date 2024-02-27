const express = require('express')
const {loginUser,signupUser} = require('../controller/registerController')
const authMiddleware = require('../authMiddleware')


const router = express.Router()

//middleware auth 

// router.use(authMiddleware)
// //login route
// router.post('/login',loginUser)

//logout route
router.post('/register',signupUser)
router.post('/login',loginUser)

module.exports = router
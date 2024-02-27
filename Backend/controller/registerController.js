const User = require('../model/registerModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')
const createToken = (_id) =>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}
//login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body


//static login method
User.login = async function(email,password){
    if(!email || !password){
        throw Error("All filed are required")
    }

    const user = await User.findOne({email})

    if(!user){
        throw Error("Email id is not correct")
    }

    const userPassword  = await bcrypt.compare(password , user.password)
    if(!userPassword){
        throw Error("Password is not correct")
    }
    return user
}

    try{
        const user = await User.login(email,password)
        const useremail = user.email
        const userFullname = user.fullname
        const address = user.address
        //create token
        const token = createToken(user._id)
        res.json({userFullname,useremail, token,address})
    }
    catch(error){
       res.json({error:error.message})
    }
}


//singup user
const signupUser = async(req,res)=>{
    const{email,password,fullname,address,phone} = req.body

//static signup method

User.signup = async function(email,password,fullname,address,phone){

    if(!email || !password || !fullname || !address.city || !address.building || !address.zipcode || !phone){
        throw Error("All filed Required")
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Passowrd is not strong enough")
    }

    if(phone.length < 11){
        throw new Error('Mobile number is not valid')
    }
   const exist = await User.findOne({email})
    if(exist){
        throw Error("Email is already exist")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user= await User.create({email, password:hash,fullname,address,phone })
    return user
}

try{
    const user = await User.signup(email,password,fullname,address,phone)
   //create token
   const token = createToken(user._id)
   res.json({email,token})
}
catch(error){
  res.json({error:error.message})
}
}
module.exports = {signupUser,loginUser}
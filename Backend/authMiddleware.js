const jwt = require('jsonwebtoken')
const User = require('./model/registerModel')

const authMiddleware = async(req,res,next)=>{
const {authorization} = req.headers
   console.log(req.headers)
    if(!authorization){
        res.json({error:'Authorization Required'})
    }
    const token = authorization.split(' ')[1]
 
    try{
        const _id = jwt.verify(token,process.env.SECRET)
        console.log(_id)
        req.user = await User.findOne({_id}).select('_id')
        next()
        }
    catch(error){
          res.json({error:"Request is not authorized"})
        }
}

module.exports = authMiddleware
const mongoose  =  require ('mongoose')
const Schema = mongoose.Schema

const registerSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique : true
    },
    password:{
        type:String,
        required:true
    },
   fullname :{
        type:String,
        required:true
    },
    address:{
            city:
            {
            type:String,
            required:true
            },
            building:
            {
            type:String,
            required:true
            },
            zipcode:
            {
            type:String,
            required:true
            }
    },
    phone:{
        type:Number,
        required:true
    }
})


module.exports = mongoose.model('Cart_User', registerSchema)
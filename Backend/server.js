const express = require('express')
require('dotenv').config()
const userRoute = require('./route/registerRoute')
const mongoose = require('mongoose')
const cors = require('cors');


//express app
const app = express()

//middleware
app.use(express.json()) //all request comes in passed to req 
app.use(cors());
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// //tetsing
// app.get('/api/',(req,res)=>{
//     res.json({message:"hello api"})
// })

app.get('/api',(req,res)=>{
    res.json({message:"hello user"})
})
//routes
app.use('/api/user',userRoute)


//connect to db

mongoose.connect('mongodb+srv://nodeexpress:12341234@cluster0.urptf3l.mongodb.net/mongo?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000,()=>{
        console.log(`Connected to Server ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})
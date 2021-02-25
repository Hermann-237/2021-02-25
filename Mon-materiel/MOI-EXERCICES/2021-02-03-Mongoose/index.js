const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;
//connection to my db

mongoose.connect(process.env.URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("you are connected to your db")) // because this will give you a Promisse 
.catch(err =>{
    console.log(err)
    process.exit(1)
})

// creer the schema

const schema = new mongoose.Schema({
    iban:{
        type:String,
        required:true,
    },
    pin:{
        type:String,
        required:true,
    },
    balance:{
        type:Number
    }

})

// set the model 

const information = mongoose.connection.model("information",schema);

const  getinformation = (age)=>{
    return new Promise((resolve,reject)=>{
        information.find({age}).then(result =>resolve(result)).catch(err=>reject(err))
    })
}

app.get("/getDocument/:age",async(req,res)=>{
    res.status(200).json(await getinformation(req.params.age))
})

app.listen(port,()=>{
    console.log(`your server is running on the port:${port}`)
})
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const {check,validationResult} = require("express-validator")
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs")
app.set("views",__dirname+"/views")

const url = "mongodb+srv://user4:1234@cluster0.nvyxm.mongodb.net/today20210215?retryWrites=true&w=majority"

mongoose.connect(url,({useNewUrlParser:true,useUnifiedTopology:true}))
.then(()=>console.log("You are connected to you Database"))
.catch(e => console.log(e))

const schemaRegister = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})


const registerModel = mongoose.connection.model("register",schemaRegister)




app.get("/",(req,res)=>{
    res.status(200).render("index")
})

app.post("/",[
check("email").isEmail().withMessage("It have to be an email").custom(value =>{
    return registerModel.findOne({email:value}).then(user =>{
        if(user){
            return Promise.reject("E-mail has already in use")
        }
    })         
}),   
check("password")./* custom((value,{req}) =>{  
    if(value!==req.body.passwordconfirm){
        throw new Error (" Password confirmatin is incorrect")
    }
}).withMessage("je suis"). */matches(/\d/).withMessage("Password muss contain a number")
],(req,res)=>{
    const errors = validationResult(req)      
    console.log(errors.array())
    if(!errors.isEmpty()){
        return res.status(400).json({err:errors.array()})
    }
    else {
        const newuser = new registerModel({
            email:req.body.email,
            password:req.body.password
        })
        newuser.save().then(()=> {
            res.status(200).render("index")
            console.log("The new user has been stored")
        })
    }
})


app.listen(port,()=>console.log(port))
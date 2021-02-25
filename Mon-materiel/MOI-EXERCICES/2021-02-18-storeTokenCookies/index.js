const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const URI = "mongodb+srv://user4:1234@cluster0.nvyxm.mongodb.net/productDB?retryWrites=true&w=majority"
mongoose.connect(URI,({useNewUrlParser:true,useUnifiedTopology:true})).then(()=>console.log("You are connecting to your database")).catch(err => console.log(err))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
const schemaUser = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const Users = mongoose.connection.model("users",schemaUser) 


const schemaProducts = new mongoose.Schema({
    articleNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});


const ProductDb = mongoose.connection.model("products",schemaProducts)


const port = process.env.PORT ||8080;
  
app.set("view engine","ejs")
app.set("views",__dirname+"/views")

app.get("/",(req,res)=>{
    res.status(200).render("index")
})

app.get("/login",(req,res)=>{
    res.status(200).render("login")
})

app.get("/user",(req,res)=>{
    res.status(200).render("adduser")
})


/* function authenticationUser(req,res,next){
    const bearerHeader =
    if( bearerHeader ){
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken;
        next()
    }
    else{
        res.status(403).send("You have no access ")
    }
} */

function verifyToken(req,res,next){
 /* const authCookie = req.cookie.authCookie */
 /* console.log(authCookie) */
 if(!req.cookies || !req.cookies.authCookie) res.status(403).render("errors/errLogin",{result:`You first have to log in
 `})
 else{
     jwt.verify(req.cookies.authCookie,"secretNumber")
     next()
 }
} 


app.post("/user",(req,res)=>{
   /* const password = req.body.password, */
   var hash = bcrypt.hashSync(req.body.password, 12)
    const newUser = new Users({
        name:req.body.name,
        email:req.body.email,
        password:hash,
    })
    newUser.save().then(() =>{
        console.log("the new user has been stored")
        res.status(200).render("adduser")
    }).catch(e => console.log(e))
})

app.get("/products",verifyToken,(req,res)=>{   
    ProductDb.find({}).then(data =>{
        console.log(data)
        res.status(200).render("allProducts",{data:data})
    })
})

app.post("/login",(req,res)=>{
    Users.findOne({email:req.body.email}).then(data =>{
        if(!data) res.status(403).render("errors/errLogin",{result:`You first need to register
        `})  
        else{
            const password = req.body.password;
            const valid = bcrypt.compareSync(password,data.password)
            if(req.body.email !== data.email) res.status(403).render("errors/errLogin",{result:`Your Email is not correct
            `})
            else if( valid === false) res.status(403).render("errors/errLogin",{result:`Your Password is wrong
            `})

            else{

                const token = jwt.sign({data}, "secretNumber")
                res.status(200).cookie("authCookie",token,{httpOnly:true,maxAge:900000}).render("connectPage",{person: data.name})
                /* console.log(res.cookie("token",token,{httpOnly:true,maxAge:900000})) */
            }

        }
    })
})

 app.post("/singlepage",(req,res)=>{
    ProductDb.findOne({articleNo:req.body.seach}).then(data =>{
        res.status(200).render("singlepage",{data:data})
    })
}) 


app.listen(port,  ()=> console.log("ton site repond sur ce site : " + port))
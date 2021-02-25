const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express()
const port = 8080;
const {body,check,validationResult} = require("express-validator");
const url = "mongodb+srv://user4:1234@cluster0.nvyxm.mongodb.net/today20210215?retryWrites=true&w=majority"


app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",__dirname+"/views")

mongoose.connect(url,({useNewUrlParser:true,useUnifiedTopology:true})).then(()=>console.log("you are connecting to your database")).catch(err => console.log(err))

const schemadata = new mongoose.Schema({
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
},
})

const modeldata = mongoose.connection.model("collection2",schemadata)

app.get("/",(req,res)=>{
    res.render("index",{err:""})  
})

app.post("/",[
//condition du nom de l'article
check("articleNo").exists().isLength({min:4}).withMessage("Your article number is not valid"),
//condition du nom de l'article
check("name").exists().isLength({min:2}).withMessage("You have to specify the name"),
//condition de la description 
check("description").exists().isLength({min:2}).withMessage("You have to specify the description"),  
//condition du prix
check("price").isLength({min:3}).withMessage("Your Price is not valid") 
],(req,res)=>{    
    const errors = validationResult(req)
    if(!errors.isEmpty()){   
        console.log(errors.array())
    return res.status(422).render("index",{err:errors.array()})
    //  return res.status(422).json(errors.array()[0].msg)
    }  
    else {        
        console.log(req.body)    
        res.json(req.body)    
    }              
})   

      



app.listen(port, ()=>console.log("le server repond sur ce port: "+port))
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({extended:true}))
const URI = "mongodb+srv://user4:1234@cluster0.nvyxm.mongodb.net/today20210215?retryWrites=true&w=majority"

app.set("view engine", "ejs")
app.set("views", __dirname +"/views")
//connection
mongoose.connect(URI,({useUnifiedTopology:true,useNewUrlParser:true}))
.then(()=>console.log("You are connected to your database"))
.catch(err => console.log("il y a l'erreur"+err))
//schema

const productSchema = new mongoose.Schema({
    articleNo:{
        type:String,
        required:true,  
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
});

//Model 

const productModel = mongoose.model("collection20210215",productSchema)
//Get by products

function getAllData(){
   return productModel.find({}) 
}

app.get("/products",(req,res)=>{
    getAllData()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => console.log(err))
})

// Get by product/ :articleNo

function getByArticleNo(articleNo){
    return productModel.findOne({articleNo})
}

app.get("/products/:articleNo",(req,res)=>{
    const articleNo = req.params.articleNo 
    getByArticleNo(articleNo)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => console.log(err))
})


// post /products 

function creatArticle(articleNo,name,description,price){
    const newArticle = new productModel({
        articleNo,
        name,
        description,
        price
    })

   return newArticle.save()
}

app.get("/addProduct",(req,res)=>{
    res.status(200).render("index")
})

app.post("/addProduct",(req,res)=>{
    creatArticle(req.body.articleNo,req.body.name,req.body.description,req.body.price).then(()=>{
        res.status(200).render("index")
    })
})

app.get("/product",(req,res)=>{
    getAllData()
    .then(data => {
        res.status(200).render("product",{data})
    })
    .catch(err => console.log(err))
})


app.get("/product/:articleNo",(req,res)=>{
    const articleNo = req.params.articleNo 
    getByArticleNo(articleNo)
    .then(data =>{
        res.status(200).render("singleproduct",{data})
    })
    .catch(err => console.log(err))
})


// delete document




app.get("/delete/:articleNo",(req,res)=>{
    const articleNo = req.params.articleNo
   productModel.deleteOne({articleNo}).then(data =>{
       console.log(articleNo)
       res.status(200).render("deleted",{data:articleNo})
   })
   
})

//update




app.get("/update/:articleNo",(req,res)=>{
    const articleNo = req.body.articleNo
    productModel.findOneAndUpdate({articleNo}).then(data=>{
        console.log(data)
        res.status(200).render("update",{data:articleNo})
    })
})   

app.post("/update/:articleNo",(req,res)=>{
    const articleNo = req.params.articleNo
    productModel.findOneAndUpdate({articleNo}).then(data=>{
        console.log(data)
        res.status(200).render("update",{data:articleNo})
    })
})  
/* 
app.post("/product",(req,res)=>{
    const articleNo = req.params.articleNo
    const a = req.body
    productModel.findOneAndUpdate({articleNo},{a}).then(data=>{
        console.log(data)
        res.status(200).render("update",{data:articleNo})
    })
}) */






app.post("/singleproduct",(req,res)=>{
    const seachs =req.body.seach
    productModel.findOne({articleNo:seachs}).then(data =>{
        res.status(200).render("singleproduct",{data})
    }).catch(err => console.log(err))
})





app.listen(port,()=>console.log("le site repond ici:" + port)) 
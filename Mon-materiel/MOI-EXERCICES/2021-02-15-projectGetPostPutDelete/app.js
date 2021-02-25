const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000

const url = "mongodb+srv://user4:1234@cluster0.nvyxm.mongodb.net/today20210215?retryWrites=true&w=majority"

mongoose.connect(url,({useNewUrlParser:true,useUnifiedTopology:true}))

const productsSchena = new mongoose.Schema({
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
})

const productsModel = mongoose.connection.model("collection1",productsSchena)

// - GET /products
//         => returns all products as an array

app.get("/products",(req,res)=>{
    productsModel.find({})
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})

// - GET /products/:articleNo
//         => returns one product with :articleNo as an object

app.get("/products/:articleNo",(req,res)=>{
    const result = req.params.articleNo
    productsModel.findOne({articleNo:result})
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
})

// - POST /products
//         => creates a new product and returns it
app.post("/products",(req,res)=>{
    const newProduct = new productsModel({
        articleNo:"ht-587",
        name:"Lonovo DEll",
        description:"Tres bien pour et function sans bloquer",
        price:259.99
    })
    newProduct.save()
    .then(()=>{
        res.json(newProduct)
        console.log("The new data has been saved")
    })
    .catch(err => console.log(err))
})

// - PUT /products/:articleNo
//         => updates a product identified by :articleNo and returns the new one

function updateData(un,deux,trois,quatre,cinq){
    return new Promise((resolve,reject)=>{
        productsModel.findOneAndUpdate({articleNo:un},{deux,trois,quatre,cinq},{new:true})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

app.put("/productss/:articleNo",(req,res)=>{
    const result = req.params.articleNo;
    console.log(result)
    res.json(req.body.name)/*  
    const price = parseInt(req.body.price) */
   /* await productsModel.findOneAndUpdate({articleNo:result},{articleNo:req.body.articleNo,name:req.body.name,description:req.body.description},{useFindAndModify:false}).then(()=>{
        res.send("you updated")
    }).catch(e => console.log(e)) */
   
})  
    



// - DELETE /products/:articleNo
// => deletes a product identified by :articleNo and returns nothing

app.delete("/productss/:articleNo",(req,res)=>{
    const result = req.params.articleNo
   productsModel.deleteMany({articleNo:result}).then((data)=>{
      res.status(200).send("The article has been deleted")
    }).catch(err => console.log(err))
})




app.listen(port,()=>{
    console.log("here is the listening port "+port)
}) 
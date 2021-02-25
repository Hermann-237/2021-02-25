const db = require('../db/connection')
const mongoose = require('mongoose')
// set up the schema

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

//set up the model

const productsModel = mongoose.model("products",productSchema);

//creat products()

function creatProduct(articleNo,name,description,price){
  return new Promise((resolve,reject)=>{
     db.connectDB().then(()=>{
          const newproduct = new productsModel({
              articleNo,
              name,
              description,
              price
          });
          newproduct.save().then((data)=>{
            resolve(data)
          }).catch(err => reject(err))
      }).catch(err => reject(err))
  })
};
//get all products
function getProduct(){
    return new Promise((resolve,reject)=>{
     db.connectDB().then(()=>{
     productsModel.find({}).then(data =>{
         resolve(data)
     }).catch(err => reject(err))
     }).catch(err => reject(err))
    })
}

// get product by articleNo


function getProductByArticleNumber(articleNo){
    return new Promise((resolve,reject)=>{
     db.connectDB().then(()=>{
     productsModel.findOne({articleNo}).then(data =>{
         resolve(data)
     }).catch(err => reject(err))
     }).catch(err => reject(err))
    })
}

//find and delete
function findAndDeleteByArticleNumber(id){
    return new Promise((resolve,reject)=>{
     db.connectDB().then(()=>{
     productsModel.findByIdAndRemove({id}).then(data =>{
         resolve(data)
     }).catch(err => reject(err))
     }).catch(err => reject(err))
    })
}

//update  tehe product by articleNo

function updateProductByArticleNumber(articleNo){
    return new Promise((resolve,reject)=>{
        db.connectDB().then(()=>{
        productsModel.updateOne({articleNo}).then(data =>{
          resolve(data)
        }).catch(err => reject(err))
        }).catch(err => reject(err))
    })
}

// delete product by articleNo

function deleteProductByArticleNumber(id){
    return new Promise((resolve,reject)=>{
        db.connectDB().then(()=>{
         productsModel.deleteOne({id}).then(data => {
             resolve(data)
         }).catch(err => reject(err))
        }).catch(err => reject(err))
    })
}

module.exports = {
    creatProduct, 
    getProduct,
    getProductByArticleNumber,
    updateProductByArticleNumber,
    deleteProductByArticleNumber,
    findAndDeleteByArticleNumber
}

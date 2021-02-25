const express = require('express');
const route = express.Router();
const controller = require('../controllers/controller') 
const app = express()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

route.get("/",(req,res)=>{
    res.status(200).render("index")
   })
route.post("/",(req,res)=>{
 controller.creatProduct(req.body.name,Date.now()).then(data =>{
     res.status(200).render("index")
 }).catch(err => console.log(err))
})

route.get("/products",(req,res)=>{
    res.status(200).render("products")
    console.log("asdfsadfdsf")
    controller.getProduct().then(data=>{
        console.log(data)
    })
   })
// route.post("/products",async (req,res)=>{
//  await controller.getProduct().then(data =>{
//      console.log(data)
//      /* res.status(200).render("products",{data}) */
//  }).catch(err => console.log(err))
// })


module.exports= route;


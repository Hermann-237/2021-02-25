const express = require('express')
const Router = require('express').Router()
const controller = require('../controllers/controller')
const app = express()
/* app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); */


module.exports = ()=>{
    Router.get("/",(req,res)=>{
        res.status(200).render("index")
    });
    Router.post("/",(req,res)=>{
        controller.creatProduct(req.body.articleNo,req.body.name,req.body.description,req.body.price).then(()=> {
            res.status(200).render("index")
        })
    })

    /* _id
:
6025386066f7839e6d092065
articleNo
:
"hw-0002"
name
:
"Lenovo ThinkPad"
description
:
"high-end-business notebook for the power-user who does not need a work..."
price
:
1295.95
 */
    Router.get("/products",(req,res)=>{
        controller.getProduct().then(data=>{
            res.status(200).render("products",{data})
        }).catch(err => console.log(err))
    });
    Router.get("/products/:id",(req,res)=>{
        controller.findAndDeleteByArticleNumber(req.params.id).then(data=>{
            res.status(200).redirect("products")
        }).catch(err => console.log(err))
    }); 

    Router.post("/",(req,res)=>{
        let articleNo = "hw-0005";
        let name = "Mac-2021";
        let description = "il fonction tres bien"
        let price = "2999"
       controller.creatProduct(articleNo,name,description,price).then(data=>{
         res.status(200).send(data)
       }).catch(err => console.log(err))
    })
    return Router;
}
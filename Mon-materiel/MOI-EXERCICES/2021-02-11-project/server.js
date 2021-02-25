require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const productsRouter = require('./routers/products')
const productsRouters = require('./routers/routes')
const app = express()

const port = process.env.PORT || 5000
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",productsRouter()) 


app.listen(port,()=>console.log(`Your server is running on : http://localhost:${port}`))
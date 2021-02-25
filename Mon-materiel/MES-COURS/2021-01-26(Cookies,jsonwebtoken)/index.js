const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const app = express()
const bodyParser = require('body-parser')

 app.use(bodyParser.urlencoded({extended:true}))
 app.use(cookieParser())


 const secret = "asdfasdfsadfdsgfhh45766"
    app.post("/",(req,res)=>{
        let token = jwt.sign({data: 'foobar'}, secret);
        res.cookie("nomducookie", token,{httpOnly:true,maxAge:60000}).status(200).send("The cookie has been sent")
    })


const port = 5001;
     

app.listen(port,()=>{
    console.log('Your server running on http://localhost:5001')
})
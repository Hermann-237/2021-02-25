const express = require('express')
const body_parser = require('body-parser')
/* const app = express()
app.use(body_parser.urlencoded({ extended: true }))


const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
 res.status(200).send(req.body)
})

app.get("/blog",(req,res)=>{
    res.status(200).send(req.body.text)
    console.log(req.body.text)
   })
app.listen(port,()=>{
    console.log(`Mon site repond a l'adresse suivante: http://localhost/${port}`);
}) */

var getCss = require('get-css')

var options = {
  timeout: 5000
}

getCss('http://github.com', options)
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.error(error)
  })
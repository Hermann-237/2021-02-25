
let member = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

const express = require('express');
const { fstat } = require('fs');
const app = express();
const path = require('path')
const fs = require("fs")
const port = 8080;


app.use(express.static(path.join(__dirname,'public')))
app.get("/api/member",(req,res)=>{
res.json(member)
}
)
app.listen(port,()=>{
    console.log(`mon application repond sur le port ${port}`)
  
})







/* const express = require('express')
const app = express();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database.json')
const db = low(adapter)

app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.send('You are now in the home page')
})
app.get("/posts/:id",(req,res)=>{
    res.statusCode = 200;
   let idCode = parseInt(req.params.id);
   res.send(db.get('posts').find({id:idCode}).value())
})
app.get("/users/:id",(req,res)=>{
    res.statusCode = 200;
    let idCode = parseInt(req.params.id);
    res.send(db.get('users').find({id:idCode}).value())
    console.log("this is a request",req.params)
})

app.listen(8080) */

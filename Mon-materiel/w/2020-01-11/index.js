const http = require("http");
const fs = require("fs");
const axios = require("axios");
const app = require("express")();

app.get("/blog",(req,res)=>{
    fs.readFile("./index.html","utf-8",(err,data)=>{
        if(err) throw err
        res.send(data);
        res.end()
    })
}).listen(8080)
/* app.get("/",(req,res)=>{
    res.send("salut les gent")
}).listen(8080) */

/* console.log("simo")
const server = http.createServer((req,res)=>{
if(req.method === "GET" && req.url==="/contact"){
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile("./index.html","utf-8",(err,data)=>{
        if(err)throw err;
        res.write(data);
        res.end();
    })
}
}).listen(8080); */

/* const options = {
    url:"http://cat-fact.herokuapp.com/facts",
    method : "post",
    body:{
        "nom":"Tamouya Totim",
        "prenom":"Hermann",
        "age": 32
    }
}
axios(options).then((err,data)=>{
    if(err) throw err
    console.log(data.body)
}) */

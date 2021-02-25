const express = require('express');
const app = express();
const path = require("path")
const port = process.env.PORT || 8080;

/* app.use(express.static(path.join(__dirname,"public"))); */


app.get('/',(req,res)=>{
    res.status(200).sendFile(`${__dirname}/index.html`);
})

app.get('/message',(req,res)=>{
    res.status(200).send(`
    <h1 style ='text-align:center; margin-top:300px; color:blue' >Notre soucis majeur est votre satisfaction</h1>`);
    })


app.get('/profile',(req,res)=>{
    res.status(200).write(`<h1 style ='text-align:center; margin-top:300px; color:blue' >Hermann Tamouya Totim</h1>`);
    })

app.get('/exit',(req,res)=>{
    res.status(200).write(`<h1 style ='text-align:center; margin-top:300px; color:red' >Bye Bye ...!</h1>`);
    })



 

/* app.get('/',(req,res)=>{
    res.status(200).sendFile(`${__dirname}/index.html`);
})

app.get('/message',(req,res)=>{
    res.status(200).sendFile(`${__dirname}/public/message.html`);
    })


app.get('/profile',(req,res)=>{
    res.status(200).sendFile(`${__dirname}/public/profile.html`);
    })

app.get('/exit',(req,res)=>{
    res.status(200).sendFile(`${__dirname}/exit/profile.html`);
    }) */

    app.listen(port,()=>{
        console.log("your server is responding on " + port);
    }) 
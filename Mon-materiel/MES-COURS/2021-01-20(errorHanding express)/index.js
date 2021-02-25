const express = require('express')
const creatError = require('http-errors')
const app = express()
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.status(200).send('You are on my Homepage');
});

app.get('/Blog',(req,res)=>{
    res.status(200).send('Welcom to my Blog Page');
});

app.use( async (req,res,next)=>{
    next(creatError(405,"Tu as fait une erreur"))
})

app.use(async(err,req,res,next)=>{
    res.status(err.status || 404)
    res.send(err.message)
    /* res.send({
        error:{
            status:err.status|| 500,
            message: err.message,
        }
    }) */
})

app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})
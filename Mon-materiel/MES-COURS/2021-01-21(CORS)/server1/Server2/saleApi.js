const express = require('express')
const app = express();
const cors = require('cors')
const port = 1179;
app.use(cors())

app.get('/api/animals',(req,res)=>{
    res.json({
        nom:"hermann",
        country:"Germany"
    })
})

app.listen(port,()=>{
    console.log(`This server respond on the url: http://localhost:${port}`)
})
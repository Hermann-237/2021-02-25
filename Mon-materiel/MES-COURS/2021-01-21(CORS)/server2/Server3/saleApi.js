const express = require('express')
const app = express();
const cors = require('cors')
const port = 2222;
app.use(cors())


app.get('/api/animals',(req,res)=>{
    res.json({
        firstName:"Hermann",
        lastName:"Tamouya Totim",
        country:"Germany",
        status:"active"
    })
}) 

app.listen(port,()=>{
    console.log(`This server respond on the url: http://localhost:${port}`)
})
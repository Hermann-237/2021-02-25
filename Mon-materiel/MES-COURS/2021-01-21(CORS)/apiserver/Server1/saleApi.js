const express = require('express')
const app = express();
const cors = require('cors')
const port = 2001;
const corsOption = {
    origin:["http://facebook.com","http://localhost:2002"],
    optionsSuccessStatus:200,
}
app.use(cors(corsOption))


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
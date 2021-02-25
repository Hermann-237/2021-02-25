const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 2002

app.use(express.static(path.join(__dirname,"public")))

  

app.listen(port,()=>{
    console.log(`the server responding on the url: http://localhost:${port}`)
})
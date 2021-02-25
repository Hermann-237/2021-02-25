
const creatError = require('http-errors')
const variab = require('./controllers/variable')
const authen = require('./controllers/authentification')
const transf = require('./controllers/tranfert')
const withd = require('./controllers/withdraw')
const blce = require('./controllers/balance')
const ifAmount = require('./middleware/ifAmount')
const ifToken = require('./middleware/ifToken')
const routerfunction = require('./routes/route')
const express = require('express');
const body_parser = require('body-parser');
const { urlencoded } = require('express');
const app = express()

// debut
/* const aa = require('./routes/route');
const bb = require('./routes/route');
const cc = require('./routes/route');
const dd = require('./routes/route'); */
//fin
app.use(body_parser.urlencoded({extended:true}))
// Ceci est le router
/* app.use('/saad', aa.a());
app.use('/saad', bb.b());
app.use('/saad', cc.c());
app.use('/saad', dd.d());

app.use('/hermann', aa.a());
app.use('/hermann', bb.b());
app.use('/hermann', cc.c());  
app.use('/hermann', dd.d()); */

app.use('/',routerfunction())
/* app.use((req,res,next)=>{
    if(!req.body.amount)
}) */


app.listen(1179,()=>{
    console.log("Mon site repond a l'adresse suivante: http://localhost:1179")
})
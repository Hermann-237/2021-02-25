const transf = require('./transfer')
const auth = require('./authentication')
const varia = require('./variable')



const removeF = (req,res)=>{
    if(req.body.token == auth.token && req.body.amount ){
         res.status(200).send(`your actuall solde is : $${varia.variable.currentSolde - parseInt(req.body.amount)} 
     `);
     varia.variable.currentSolde = varia.variable.currentSolde -parseInt(req.body.amount);
    }
else res.status(200).send(`Systhem error you try to pirate our systhem
`)
}

module.exports = {removeF};

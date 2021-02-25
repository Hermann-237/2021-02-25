const authen = require('./authentication')
const varia = require('./variable')
// balance
let addmoney;
let solde = 0;
const transferF = (req,res)=>{
    if(req.body.token == authen.token && req.body.amount){
        addmoney = parseInt(req.body.amount)
        
         solde =  varia.variable.currentSolde + addmoney;
        res.status(200).send(`your actuall solde issssss : $${solde}
    `);
    varia.variable.currentSolde = solde;
    }
else res.status(200).send(`Systhem error you try to pirate our systhem your token is : ${authen.token}
`)
}  

module.exports = {transferF, solde};
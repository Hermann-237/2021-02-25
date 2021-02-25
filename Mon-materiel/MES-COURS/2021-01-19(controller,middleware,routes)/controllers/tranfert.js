

const variab = require('./variable')
const transfert = (req,res)=>{
    if(!req.body.amount) return res.status(200).send('You have to enter your Amount');
    else {
        res.status(200).send(`You have now : $${variab.variable.currentBalance + parseInt(req.body.amount)} into your account`);
        variab.variable.currentBalance = variab.variable.currentBalance + parseInt(req.body.amount);
    } 
}

module.exports = {transfert}
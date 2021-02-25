const variab = require('./variable')

const balance = (req,res)=>{
    if(!req.body.token) return res.status(200).send('You have to enter your Token');
    if(req.body.token!= variab.variable.token) return res.status(200).send('Your Token is not fine');
    else {
        res.status(200).send(`Your new balance is: $${variab.variable.currentBalance}`);
    }  
}

module.exports = {balance}
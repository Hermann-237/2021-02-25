const variab = require('./variable')

const authentification = (req,res)=>{
    if(!req.body.IBAN) return res.status(200).send('You have to enter your IBAN');
    if(!req.body.pincode) return res.status(200).send('You have to enter your pincode');
   else return res.status(200).send(`${variab.variable.token}`)
}

module.exports = {authentification}
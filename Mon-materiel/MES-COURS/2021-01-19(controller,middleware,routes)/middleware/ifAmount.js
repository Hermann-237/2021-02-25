
const variab = require('../controllers/variable')

const ifAmount = (req,res,next)=>{
    if(!req.body.amount)  res.status(200).send('You have to enter your Amount');
    
    next();
}

module.exports = {ifAmount}
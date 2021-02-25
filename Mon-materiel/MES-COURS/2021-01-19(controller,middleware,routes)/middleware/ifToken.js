const variab = require('../controllers/variable')


const ifToken = (req,res,next)=>{
    if(!req.body.token)  return res.status(200).send('You have to enter your Token');
    if(req.body.token!= variab.variable.token) return res.status(200).send('Your Token is not fine');
    next();
}
module.exports = {ifToken}
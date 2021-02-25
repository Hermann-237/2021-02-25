const authen = require('./authentication')
const transf = require('./transfer')
const varia = require('./variable')




const balanceF = (req,res)=>{
    if(req.body.token == authen.token  )
    res.status(200).send(`your actuall solde is :$${varia.variable.currentSolde}
`)
else res.status(200).send(`Systhem error you try to pirate our systhem
`)
}

module.exports ={ balanceF};


const router = require('express').Router();
const authen = require('../controllers/authentification')
const transf = require('../controllers/tranfert')
const withd = require('../controllers/withdraw')
const blce = require('../controllers/balance');
const ifAmount = require('../middleware/ifAmount')
const ifToken = require('../middleware/ifToken')

module.exports = ()=>{
    router.post('/authentification', authen.authentification);
    router.post('/transfert',ifAmount.ifAmount,ifToken.ifToken,transf.transfert);
    router.post('/withdraw', ifAmount.ifAmount,ifToken.ifToken,withd.withdraw);
    router.post('/balance',blce.balance);
    return router;
}

/* const a = ()=>{
  return  router.post('/authentification', authen.authentification);
}
const b = ()=>{
   return router.post('/transfert',ifAmount.ifAmount,ifToken.ifToken,transf.transfert);
}
const c = ()=>{
  return  router.post('/withdraw', ifAmount.ifAmount,ifToken.ifToken,withd.withdraw);
}
const d = ()=>{
   return router.post('/balance',blce.balance);
}

module.exports = {a,b,c,d} */
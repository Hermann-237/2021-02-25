let token = "";
for (let i = 1; i < 2; i++) {
  token += Math.round(Math.random() * 9);
}


let iban = "DE58472563201458";
let pincode = "1234";
const authentication = () => { 
    return token;
 };
 const authenticationF = (req, res) => {
    if(req.body.IBAN == iban && req.body.pincode == pincode)
        res.status(200).send(`${authentication()}
`)
    else res.status(200).send(`your authentication is not correct
`) 
}

module.exports = {authenticationF,token};
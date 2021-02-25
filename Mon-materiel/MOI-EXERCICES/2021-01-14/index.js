const express = require("express");
const app = express();
const body_parser = require("body-parser");
const balanceF = require("./controller/balance");
const authen = require('./controller/authentication');
const transf = require('./controller/transfer')
const remo = require('./controller/withdraw')
const balan = require('./controller/balance')

app.use(body_parser.urlencoded({ extended: true }));

const port = process.env.PORT || 7000;

app.post("/authentication", authen.authenticationF);
app.post("/transfer", transf.transferF);
app.post("/withdraw", remo.removeF );
app.post("/balance", balan.balanceF);

app.listen(port, () => {
  console.log(
    `utilise ce lien pour acceder au server: http://localhost/${port}`
  );
});


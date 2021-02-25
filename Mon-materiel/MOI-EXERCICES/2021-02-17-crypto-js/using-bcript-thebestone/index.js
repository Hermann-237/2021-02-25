const bcrypt = require("bcrypt")

// in the register page i will do

const password = "monMotDePasse"
const userName = "Hermann"

// pour scripter mon mot de passe je fais

const hash = bcrypt.hashSync(password,10);

console.log(hash)

const user = {
    userName,
    hash,
}

console.log(user)

// when you want to login, you need to compare your password store into the database

const reqBodyPassword = "monMotDePasse" //(req.body.password)

const valid = bcrypt.compareSync(reqBodyPassword,hash)

console.log({ valid })
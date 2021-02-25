const sha256 = require("crypto-js/sha256")
require("dotenv").config()

const password = "ceciestmonmotdepasses" 

const hash = sha256(password).toString();
console.log(hash)

// pour rendre le mot de passe encore plus difficil a trouver, tu peux faire ceci:

/* 
- tu peux store ton propre mot de passe dans le dossier .env et a chaque fois qu'un utilisateur devra s'enregister dans ton siteweb tu dois devoir ajouter ton mot de passe sur sa part avant de l'enregistrer dans ta base de donnee

*/

const salt = Math.random()
const userName = "Hermann"

const hash1 = sha256(password +   process.env.PIPPER).toString()

console.log(hash1)

const user = {
userName,
hash1
} 
console.log(user)

if(user.hash1 === "3a9972b92c6846be289518feecffab082b9943c91d9e18affcffe4b51b62251b") console.log("You are log in")
else console.log("You entered te wrong password")
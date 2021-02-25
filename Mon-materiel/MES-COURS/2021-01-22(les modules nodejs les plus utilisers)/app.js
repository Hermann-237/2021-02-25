/* 
//express

avec express tu peux creer un server 


//axios 
il functione comme  fetch en javascript pour recuperer les donnees dans une base de donnees

// Lowdb

on l'utilise pour faire fonctionner notre ordinateur comme une base de donnee c'est a dire lorsque tu changes la variable il se comporte comme une base de donnee


// uuid 

on l'utilise pour atribuer les id de facon abitraire de faxon radom


//nodemon

il nous permet de relancer notre server a tout moment et pour le relancer il faut aller dans le fichier package.json et tu changes le fichier scrip en start: "nodemon index.js"

// body-parser

on utilise xa lorsquon utilise le post request et apres on noublie:
app.use(body-parser.urlencoding({encore:true})) 

//http-errors

on utilise xa pour creer une erreur message qui sera afficher si jamais le lien n'existe pas

// lodash

on l'utilise pour manipuler beaucoup de chose dans le javascript par example: string, array, object...

//Cors

il permet de donner les permissions a l'access de mon API . je dois speciefier  les differents site qui auront acces a mes apis que j'ai creer


// Cookie-parser ne pas confondre a Cookies-parser

nous l'utilisons pour creer des cookies coter clien et laccompagner tant qu'il sera connecter


// Jsonwebtoken

on l'utilise pour crypter le token avant de l'envoyer chez le clien dans ses cookies

// dotenv 

on l'utilise pour importer les element dans le fichier .env(environnement) par example lorsque tu veux creer un port et que tu dans le ficher .env tu met PORT = 5000 dans ton fichier index il faut faire : 
const env = require("dotenv").config()
xa fait que si tu fais:

const port = process.env.PORT || 3000; le serveur doit utiliser le port 5000 et s'il ne parvient pas a importer le fichier .env dans le fichier index, il utilisera le port 3000

// ejs

c'est un template qui te permet d'integrer les variables a linterieur de ton html
1- Comment l'utiliser:

  - mettre ces lignes de code dans ton serveur.js

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

  2- Creer un dossier views dans ton repertoire et mettre tous tes fichier .ejs a linterieur 


//express-validator
 On l'utilise pour valider le formulaire coter serveur la syntaxe est la suivante:

const {check,validationResult} = require("express-validator")

 app.post("/",[
//condition du nom de l'article
check("articleNo").exists().isLength({min:4}).withMessage("Your article number is not valid"),
//condition du nom de l'article
check("name").exists().isLength({min:2}).withMessage("You have to specify the name"),
//condition de la description 
check("description").exists().isLength({min:2}).withMessage("You have to specify the description"),  
//condition du prix
check("price").isLength({min:3}).withMessage("Your Price is not valid") 
],(req,res)=>{    
    const errors = validationResult(req)
    if(!errors.isEmpty()){   
        console.log(errors.array())
    return res.status(422).render("index",{err:errors.array()})
    //  return res.status(422).json(errors.array()[0].msg)
    }  
    else {        
        console.log(req.body)    
        res.json(req.body)    
    }              
}) 


const { validationResult, check } = require('express-validator')

exports.resultsValidator = (req) => {
  const messages = []
  if (!validationResult(req).isEmpty()) {
    const errors = validationResult(req).array()
    for (const i of errors) {
      messages.push(i)
    }

//express-storage

je ne sais pas encore comment il fonction je vais chercher apres comment il fonctionne 



//crypto-js

on l'utilise pour hasher le mot de passe et l'enregister dans la base de donnee.
cette library fait la meme chose que le bcript mais de preference utilise le car il es le plus securiser






//bcrypt

on l'utilise pour crypter le mot de passe dans la base de donnee lorsque l'utilisateur veut creer son compte et de le comparer lorsque l'utilisateur voudra se connecter dans ton site web



*/
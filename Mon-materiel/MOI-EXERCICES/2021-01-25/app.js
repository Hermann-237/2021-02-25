/* 
// le fichier CONTROLLER

le fichier CONTROLLER doit contenir tous les fichier qui seront dans la fonction get, post,... example:
- Dans le fichier controller/controller1.js

function controller1(req,res){
    res.status(200).send('bonjour')
}
- Dans app.js tu mets(n'oublie pas d'importer et d'exporter le fichier controller dans le controller/controller1.js)
app.get('/',controller1)


// fichier ROUTES

dans ce fichier tu dois specifier ceci: 

const express = require('express')
const router = express.ROUTER()


- Tu supprimes la ligne app.get("/",controller1) dans app.js tu  mets dans routes/route.js et tu change le app par router c'est a dire:

router.get("/",controller1)
router.get("/a",controller2)
router.get("/b",controller3)
router.get("/c",controller4)

module.exports = router; // noublie pas de l'exporter apres comme j'ai fais sur cette ligne


//le fichier MIDDLEWARE

le middleware est ou tu mets touts tes conditions imagine que dans controler1, controller2,controller3 et controller4 tu as une condition genre if(!req.body.nom) res.status(400).send("veillez entrer le Nom ") si j'ai cette condition dans toutes les controller il est important de le mettre dans un middleware la syntaxe est la suivante:

function middle1(req,res,next){
   if(!req.body.nom) res.status(400).send("veillez entrer le Nom ")
   next()//n'oublie pas d'ecrire cette ligne a la fin
}
module.exports = middle1

dans le fichier ROUTES tu ecrits:

router.get("/",middle1,controller1)
router.get("/a",middle1,controller2)
router.get("/b",middle1,controller3)
router.get("/c",middle1,controller4)



// dans le fichier app.js qui se trouve dans ta racine:

const express =require("express")
const bodyParser = require("body-parser")
const app = express()

app.use("/hermann",router)// donc le site sera accessible a localhost:port/hermann/a ou .../b ou .../c

app.use(bodyParser.urlencod({encod:true})) // toujour le mettre si tu fais le port request 

app.use(express.static(path.join(__dirname,"public"))) permet de rendre le contenu du dossier public static si il ya le dossier app.html pour acceder a cette page il suffit de faire http://localhost:port pour acceder a la page app.html.



pour plus d'information regarde l'example dans le fichier courant







*/
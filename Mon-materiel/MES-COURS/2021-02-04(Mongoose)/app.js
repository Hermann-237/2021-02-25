/* 
// Les etapes pour utiliser mongoose
- creer un cluster sur mongodb
-creer un database
-creer une collection
-permettre laccess a ce database en utilisant user1 et le mot de passe
- copier le lien du milieu car tu dois l'utiliser dans ton vscode et remplacer database par le nom de ta base de donnee et username par user1 etc...

1- connection 

ici la syntaxe est la suivante:

const mongoose = require("mongoose")

mongoose.connect(urlDeTonMomgodb, { // lui il va retournee une promesse
    userparser:true,
    usertopo:true
}).then(()=>console.log("tu es connecter a ton mongodb"))
  .catch(err => console.log(err))

  2- creer le schema

  const schema = new mongoose.Schema({ // ceci est comme un template si ta collection tu as just nom et age tu dois faire ceci et si tu as plus tu dois mettre plus!
      nom:{
          type:String,
          required:true,
      },
      age:{
          type:Number,
          required:true,
      }
  })


  3- connecter le model

  const databaseNameModel = mongoose.connection.model("collectionName", schema);

// apres avoir fait xa tu peux maintenant avoir tout les collection database, ajouter une collection, supprimer une collection


I- Avoir tous les collections

databaseNameModel est la variable a la ligne 37.


I-1- avoir tous les collections

databaseNameModel.find({}).then(result => console.log(result)).catch(err => console.log(err))

I-2- avoir  les collections en function du nom 

ici je peux utiliser la methode filter ou map de javascript

databaseNameModel.find({}).then(result => {
    let tout = result.filter(element=>{
        element.nom == "hermann" || element.nom =="sandra"
    })
    console.log(tout)
}).catch(err => console.log(err))


II- ajouter une collection

const newCollection = new databaseNameModel({
    nom:"hermann",
    age:31,
})

newcollection.save().then(result=>console.log("tu as reussi a enregistrer ")).catch(err=> console.log(err))

III- supprimer la collection

databaseNameModel.deleteOne({nom:"hermann"})// ceci supprimera la collection ou le nom est egal a "hermann"



NB: lorsque tu veux utiliser toutes ces differente methode pour acceder a ton serveur c'est a dire si tu veux l'ecrire a linterieur d'une Get ou d'un Post methode tu dois les mettre dans une fonction et il doit toujours retourner une promesse et remplacer les console.logs par les resolve lorsqu'il n'y aura erreur et reject lorsqu'il y aura les erreurs

example pour la function avoir toutes les collection:

function getCollection(){
    return new promesse((resolve,reject)=>{
        databaseNameModel.find({}).then(result => resolve(result)).catch(err => reject(err))
    })
}


app.get("/collection",asyn(req,res)=>{
res.status(200).json(await getCollection())
})

*/
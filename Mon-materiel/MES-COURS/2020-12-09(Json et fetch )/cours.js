/* 
// JSON

ici je peux transformer un object en json et vis versa

// tranformer object en json


pour transformer un object en json on utilise JSON.stringify
example:

let object =  {
        a: 1,
        b: 2
    };

 pour le tranformer en json je fais: 
 let json = JSON.stringify(object);    


// transformer un json en object

pour transformer un json en object on doit faire : JSON.parse(json)


dans l'example precedent pour transformer le json en object on doit faire 


let object1 = JSON.parse(json)



/// FETCH ou axios(si tu utilises express)

la methode fetch est une methode qui marche avec les promesses et qui permet de recuperer les donnees quelque part xa peux etre dans la base de donnee ou alors dans un fichier json qui se trouve dans mon ordinateur.

les etapes a suivre sont:
- fetch(le lien)
-.then(reponse=>reponse.json()) car tu veux avoir les donner sous forme de paquet json ou alors tu peux aussi faire .then(reponse => reponse.text()) si tu veux avoir les donnees sous forme de text

Nb: il faut retenir que lorsque tu utilse fetch(lien) tu tappe .then jusqua ce que tu sois capable d'avoir access dans la console. example:

fetch(lien).then(response=>response.json()).then(data=>console.log(data))// essaye de faire console.log dans toutes les etapes.








/// async function and await 

lorsque tu utilises cette function xa veux dire que tous les autres eleemnt de la page vont sexecuter avant et tous les elememts a linterieur de la function async vont s'executer une fois que la promise sera disponible 

*/

/* 
///PROMISE
(dans les promesse nous avont toujour deux parti la premiere parti est la partie declaration et la seconde parti est la partie utilisation )


la promesse prend un callback function avec deux paramettres resolve et reject ces deux parametres sont a leur tour des promesses aussi example:
la parti declaration est:
 let a = new Promise((resolve, reject)=>{
     let x = 0;
     if (x==0){
         resolve("la page est disponible")
     }
     if(x!=0){
         reject("la page n'est pas disponible")
     }
 })
 "puisque tu as utiliser new Promise en haut, tu peux utiliser "then" en mettant juste le ".""
 .then((result)=> console.log(result))// le result ici renvois a ce qui entre parenthere dans le fonction resolve c'est a dire "la page es disponible".
 pour le reject je peux utiliser "then", je peux aussi utiliser "catch", dans le cas ou tu utilise "then", la premier "then" est toujours reserver a la fonction ou au parametre "resolve" le second "then" a la fonction ou au parametre "reject". mais c'est plus mieux d'utiliser "catch lorsque la promesse est "reject""




one utilise la promesse pour renvoyer une erreur si l'utilisateur n'a pas acces a la page rechercher par example supposons que j'ai un site internet qui prend les informations et les affiche dans mon site il peux arriver que le site ne soit plus disponible dans ce cas j'aurais besoin de la promesse pour dire si la page n'est pas disponible, envois ce message d'erreur a l'utilisateur :

exercise: je vais creer une promesse qui ecrit "bravo vous etes connecter" lorsque la page est disponible et "une erreur est survenu " lorsque la page n'est pas disponible.
parti declaration:
const monSite = new Promise((resolve,reject)=>{
    let pageDisponible = true;
    if(pageDisponible== true){
        resolve("bravo vous etes connecter")
    }
    if(pageDisponible== false){
        reject("une erreur est survenu")
    }
})
partie utilisation:
.then((result)=>console.log(result))
.catch((error)=>console.log(error))


*/

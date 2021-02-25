//  TRY , THROW, CATCH, FINALLY
/*
Si tu ecris un code et tu ne sais pas si tous les navigateurs doivent supporter ton code, il est preferable de l'ecrire dans un TRY c'est a dire tu peut faire appel a ce topic. c'est la ou ce topic est tres important
On l'utilise lorsque  tu veux que la valeur de l' erreur soit printer dans la console. par example:

try{
   throw "hermann";
   console.log("cette ligne ne s'affichera pas dans la console car le throw stopera la continuter.")
}catch(error){
    console.log("la valeur de  l'erreur est :", error) // il printera la valeur de throw a la place de error c'est a dire la reponse sera: la valeur de l'erreur est: hermann
}finally{
    console.log(" ceci sera la suite du code")
}

// si j'enleve la ligne de throw, la valeur de error sera xa "console.log("cette ligne ne s'affichera pas dans la console car le throw stopera la continuter.")" c'est a dire comme ceci:

try{
   console.log("cette ligne ne s'affichera pas dans la console car le throw stopera la continuter.")
}catch(error){
    console.log("la valeur de  l'erreur est :", error) // il printera la valeur de throw a la place de error c'est a dire la reponse sera: la valeur de l'erreur est: cette ligne ne s'affichera pas dans la console car le throw stopera la continuter.
}finally{
    console.log(" ceci sera la suite du code")
}

On peut utiliser comme throw message un objet c'est a dire throw {name:"romeo",premom:"merlin"} en prenant l'example passer xa donne ceci:

try{
    throw {name:"romeo",prenom:"merlin"}
   console.log("cette ligne ne s'affichera pas dans la console car le throw stopera la continuter.")
}catch(error){
    console.log("la valeur de  l'erreur est :", error.name, error.prenom) // ici la valeur de error est :{name:"romeo",premom:"merlin"}. la reponse sera donc: la valeur de l'erreur est: romeo merlin // ceci sera la suite du code
}finally{
    console.log(" ceci sera la suite du code")
}

// THROW NEW ERROR 

C'est la meme chose avec ce que nous avons fait precedament mais on utilisera pas les crochets mais plutot les paratheses.
regarde l'example.

try{
    throw new Error ("ceci est le message d'erreur")
   console.log("cette ligne ne s'affichera pas dans la console car le throw stopera la continuter.")
}catch(error){
    console.log("la valeur de  l'erreur est :", error.name, error.prenom) // ceci doit etre afficher: la valeur de l' erreur est : Error ceci est le message d'erreur
}finally{
    console.log(" ceci sera la suite du code")
}

*/


//liens
/*
https://www.youtube.com/watch?v=_am9rKw4vWw 
https://www.youtube.com/watch?v=diE6oYo6sog
*/
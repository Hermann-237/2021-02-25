/* 
le module est une technique qui nous permet d'importer les fichiers javascripts que nous voulons utiliser par example supposons que nous avons c'est different file:
//// METHOSE STANDART
//HTML(index.html)
ici tu ne dois pas oublier de mettre le lien js dans la balise script qui est dans notre cas app.js et n'oublie pas de specifier le type= "module" c'est a dire: 
<script src="app.js" type="module"></script>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="app.js" type="module"></script>
  </body>
</html>

//calcul.js
ici je dois creer toutes les functions, les variables ou les class object que je veux exporter dans le file app.js qui es le file sur lequel je travail en faisant ceci:


function sum(a, b) {
  return a + b;
}
function div(a, b) {
  return a / b;
}
function soustr(a, b) {
  return a - b;
}
const demo = 2

export { sum , div , soustr };

//app.js
pour inporter les fonctions precedente je doit faire :
import { sum,div,soustr } from "./calcul.js";

console.log(sum(10, 5));// ici la reponse sera 15
console.log(div(10, 5));// ici la reponse sera 2
console.log(soust(10, 5));// ici la reponse sera 5

/// EXPORTER EN CHANGANT LE NOM DES FONCTIONS

-le index.html doit rester pareil 
-L'exportation dans le calcul.js sera maintenant: export {sum as laSomme, div as laDivision, soustr as laSoustraction}
-L'importation dans le app.js sera maintenant : import {laSomme,laDivision,laSoustraction}from "./calcul.js"
si je fais ensuite: console.log(laSomme(10,5))//ceci donnera 15

/// IMPORTER EN CHANGANT LE NOM DES FONCTIONS

-le index.html doit rester pareil 
-L'exportation dans le calcul.js sera maintenant: export {sum, div , soustr}
-L'importation dans le app.js sera maintenant : import {sum as laSomme, div as laDivision, soustr as laSoustraction}from "./calcul.js"

si je fais ensuite: console.log(laSoustraction(10,5))//ceci donnera 5


/// INPORTER TOUS ET LE METTRE DANS UN MODULE OBJECT
 
-le index.html doit rester pareil 
-L'exportation dans le calcul.js sera maintenant: export {sum, div , soustr}
-L'importation dans le app.js sera maintenant : import * hermann from "./calcul.js"(ici le * signifie que selection tout et tu le mets dans un object nommer "hermann" et pour avoir acces on aura a faire le nom de l'object qui est dans notre cas hermann.function_name ) example:
si je fais ensuite: console.log(hermann.sum(10,5))//ceci donnera 15

/// EXPORT DEFAUT 

on l'utilise pour exporter un simple element par example une variable example :
 si je veux exporter demo dans le fichier calcul.js je dois faire : 
 - export default demo
 - importer nous avons deux maniere de le faire :
 1) soit: import demo from "./calcul.js"
 2) soit ceci: import {default as demo} fron "./calcul.js"




*/

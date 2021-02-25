// Handlebars
/* 
la prmiere des choses a faire:
-tu copies le script handlebars et tu le met dans ton html
-tu crees un le template qui doit contenir le text html avec les variable que tu veux afficher example:
let template = Handlebars.compile("ici tu met le text avec les {{{variable}}")
- tu definit maintenant la variable dans un object example :
let a = template({variable:"ta_variable"})
-enfin il faut l'integrer dans ton html en siblant un element et mettre la "a" a l'interieur example:
document.getElementById("id").innerHTML = a
*/

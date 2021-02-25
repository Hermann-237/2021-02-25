/* 
// ADDEVENTLISTENER
On l'utilise pour qu'il fasse quelque chose lorsque un evernement est fait prenom cette example:
html
<button>hermann</button>
<a href="google.com"> cliquez ici </a>
<input type= text >

let button = document.querySelector("button")
let a = document.querySelector("a")
let input = document.querySelector("input")

button.addEventListener("click",maFunction)

function maFunction(event){
    console.log(event.target)// la reponse sera toute la balise "button" c'est a dire l'element que tu as cliquer dessus;
    console.log(event.type)// la reponse sera "click";
}

button.add("click", aFunction)

function aFunction(event){
    console.log(event.target)// ici target c'est pour retourner l'element que tu as cliquer dessus
    console.log(event.type)// ici sera "click"
    si button a un href="google.com", lorsque tu vas cliquer dessus il va se dirriger dans google. pour stopper cela il faut ceci :
    event.preventDefault();

    event.preventDefault(): permet de stopper le lien de s'ouffrir, on l'utilise generalement dans les a tag et les form tag
}

// les events utiliser dans le input
input: lorsque tu ecris une lettre dans le input, l'execution se fait
blur: lorsque tu clique sur l'endrois pour remplir le text et tu clique en dehor
change: lorsque tu ecris le text et tu clique en dehors

// les events utiliser dans le bouton submit
ici on met levenement sur la balise "form"
et on utilise l'event submit
*/

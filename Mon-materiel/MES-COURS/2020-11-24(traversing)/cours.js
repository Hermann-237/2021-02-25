//https://www.youtube.com/watch?v=Pr4LLrmDLLo

/* 
// CHILDREN

tu peux regrouper tous les enfants d'un parent juste en tappant: parend.children example:

html 
<ul class="papa">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>

    CSS

let ul = document.querySelector("ul")
console.log(ul.children) va te donner toute la liste de ses enfant dans la console.

//PARENTELEMENT

de la meme facon que le "children" tu peux acceder dirrectement a sont parent juste en disant:
 enfant.parentElement
 example:
  let li = document.querySelector("li") ceci selectionnera le premier "li";

  console.log(li.parentElement)

  // Selectionner un enfant specifique

  par example:
let ul = document.querySelector("ul")
let tousLesEnfant = ul.children;
console.log(tousLesEnfant[0]) selectionera le 1er "li"
console.log(tousLesEnfant[1]) selectionera le 2em "li"
console.log(tousLesEnfant[2])selectionera le 3em "li"
  



// CLOSEST

cette methode te permet de selectionner un parent a partir d'un parent specifique example:

let premierLi = document.querySelector("li")

je peux selectionner le body en faisant: 
premierLi.closest("body")


// nextElementSibling

cette methode permet de selectionner son frere suivant ou sa soeur suivante example:

let li = document.querySelector("li")
let frereSuivant = li.nextElementSibling
frereSuivant.textContent = 10
le deuxieme enfant doit changer de textContent a "10"

// previousElementSibling

il fonction comme le nextElementSibling sauf qu'il permet de selectionner son frere ou sa soeur precedente
example:
let ul = document.querySelector("ul")
let secondChild = ul.children[1]
let enfantPrecedent = secondChild.previousElementSibling
enfantPrecedent.textContent = "100";
xa veux dire que la valeur du premier "li" sera changer de "1" a "100"
*/

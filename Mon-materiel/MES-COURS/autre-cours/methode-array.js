/* 
// FILTER

le methode filter est utiliser seulement dans les arrays,  et utilise le callback function qui prend seulent une valeur, et apres le => tu mets la condition sa syntaxe est le suivant:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
on aura cette response
expected output: Array ["exuberant", "destruction", "present"]

// REDUCE

nous utilisons cette methode lorsque nous voulons utiliser tous les items a linterieur de notre array il utilise le callback function et prend deux valeur, laccumulateur et la valeur courante sa syntaxe est la suivante:
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
 on aura cette reponse
 10

 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));// ici avant que laction ne commance laccumulateur aura deja la valeur de 5

 on aura cette response
  15

  // MAP

  nous utilisons la methode map lorsque nous voulons modifier tous les items dans un array, il prend le callback function et peux prendre valeur , la valeur du item et lindex du item
  la syntaxe est la suivante:

  let array = [1,2,3,4,5,6];
  let result = array.map(item => item*2);
  on aura cette reponse:
  [2,4,6,8,10,12]

  exemple:
  let b = ["camerounais","senegalais","ghana"]
let result2 = b.map(on => on.slice(1).concat(on[0].toUpperCase()).concat("TOTO"));
console.log(result2)











*/
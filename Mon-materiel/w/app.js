/* import { add, sub, mult } from "moduleParent.js"; */
/* let calcul = require("./calcul"); */

// console.log(calcul.add(5, 10));
const { add, sub, mult } = require("./calcul.js");

console.log(add(5, 8));
console.log(sub(5, 8));
console.log(mult(5, 8));

console.log(add(5, 10));
console.log(sub(5, 10));
console.log(mult(5, 10));

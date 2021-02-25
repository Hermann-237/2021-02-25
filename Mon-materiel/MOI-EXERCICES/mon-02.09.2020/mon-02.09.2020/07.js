console.log(!(3!="3"))
console.log(3 =="3")
/* -!= and == didn't compare the type just the value 
- No there is not a different because these both oparators compare just the value not the type to solve this problem we will use the !== and ===*/
console.log(!(3!=="3"))
console.log(3 ==="3")
// console.log(3 ="3")
/* if we use the = signe, we will get a error message because we use it to set the value to the variable*/
variable1=true
console.log(!variable1)


let firstName, givenName;

firstName = 'Stacey';
// givenName = 'toto';
let name = givenName || firstName || 'John'; 

console.log(name);
/* console logging return the value of the first value defind */
/* 
# Objects: Part 2

**1. Check if a number is within a given range.**
Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

Examples:

- 4, { min: 0, max: 5 }) ➞ true
- 4, { min: 4, max: 5 }) ➞ true
- 4, { min: 6, max: 10 }) ➞ false
- 5, { min: 5, max: 5 }) ➞ true*/
console.warn("**************1. Check if a number is within a given range.**************");


function checkNumber(nber,object){
    let arr = Object.values(object);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= nber && arr[i+1] >=nber ) return true;
    }
return false;
}

console.log(checkNumber(4, { min: 0, max: 5 }));
console.log(checkNumber(4, { min: 4, max: 5 }));
console.log(checkNumber(4, { min: 6, max: 10 }));
console.log(checkNumber(5, { min: 5, max: 5 }));

let ob = { min: 0, max: 5 };
let nbe = 4;
if(ob.min <= nbe && ob.max >= nbe) console.log(true) ;
else console.log(false);

console.warn("***************2. Scrabble.**.**************");
/***2. Scrabble.**
Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
Example:
[
{ tile: "N", score: 1 },
{ tile: "K", score: 5 },
{ tile: "Z", score: 10 },
{ tile: "X", score: 8 },
{ tile: "D", score: 2 },
{ tile: "A", score: 1 },
{ tile: "E", score: 1 }
]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28*/


let objectScrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
  ]
  let obArray = [];
  for(let i = 0; i< objectScrabble.length; i++){
    obArray.push(objectScrabble[i].score);
  }

  let sum = obArray.reduce((total,elem)=> total + elem);
  console.log(sum);

console.warn("****************3. Is it an empty object?***************");


/***3. Is it an empty object?**
Write a program that returns true if an object is empty, and false if otherwise.

Examples:

- {} ➞ true
- {a: 1} ➞ false*/
function emptyObject(object){
 let objArr = Object.keys(object);
 if(objArr[0]) return false;
 return true;
}
console.log(emptyObject({}));

console.warn("****************4. Counting Letters.****************");

/***4. Counting Letters.**
Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

Example:

- countLetters("tree") ➞ {t: 1, r: 1, e: 2}*/
let as = "tree";
let b = as.split('');
console.log(b)
let be = Object.assign({}, b); // {0:"a", 1:"b", 2:"c"}
let bi = Object.entries(be);
console.log(bi)
for(let i = 0; i < i.length; i++){
 console.log(bi[i].map(elen=> elen.reverse())) 
  
}
let ass = "tree";
let bs = ass.split('');
let ta= []
let tb=[]
let tc = []
for(let i = 0; i < bs.length; i++){
  ta.push(bs[i]);
 }
 for(let i = 0; i < bs.length; i++){
  tb.push(i+1);
 }
 console.log(ta)
 console.log(tb)
 tc.push(ta)
 tc.push(tb)
 let r = Object.fromEntries(tc)
 console.log(tc)


console.warn("****************5. Free Shipping.***************");

/***5. Free Shipping.**
Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

Examples:

- freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
- freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
- freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false*/

function freeChipping(object){
 let arrValues = Object.values(object);
 let result = arrValues.reduce((total,element)=> total + element);
 if(result > 50) return true;
 else return false;
}
console.log(freeChipping({ "Sponge": 3.50, "Soap": 5.99 }));
console.log(freeChipping({ "Surround Sound Equipment": 499.99 }));
console.log(freeChipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));

console.warn("******************6. Programming Object.****************");

/***6. Programming Object.**

```javascript
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
```

-- Write the command to add the language "Go" to the end of the languages array.

-- Change the difficulty to the value of 7.
-- Using the delete keyword, write the command to remove the jokes key from the programming object.
-- Write a command to add a new key called isFun and a value of true to the programming object.
-- Using a loop, iterate through the languages array and console.log all of the languages.
- Using a loop, console.log all of the keys in the programming object.
- Using a loop, console.log all of the values in the programming object.
- Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

**Bonus**:
- Make sure that any other code cannot delete or change properties of the object. */

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
  
};
//  -- Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
//  -- Change the difficulty to the value of 7.
programming.difficulty = 7;
//  -- Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
//  -- Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
//  -- Using a loop, iterate through the languages array and console.log all of the languages.
for(let i = 0; i < programming.languages.length; i++){
  console.log(programming.languages[i]);
}
//  - Using a loop, console.log all of the keys in the programming object.
//  - Using a loop, console.log all of the values in the programming object.
/* let arKeys = Object.keys(programming);
for(let i = 0; i < arKeys.length; i++){
  console.log(arKeys[i]);
} */

for(const prop in programming){
  console.log(prop)
}
//  - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

let programmings = {
  languages: [ 'JavaScript', 'Python', 'Ruby', 'Go' ],
  isChallenging: true,
  isRewarding: true,
  difficulty: 7,
  isFun: true,
 get add()  {
    if(this.isChallenging == true || this.isRewarding == true) return `Learning the programing languages: ${programmings.languages.join(',')}`  ;
  }
}
console.log(programmings.add);


function adds(){
  if(programming.isChallenging == true|| programming.isRewarding == true ) return  `Learning the programing languages: ${programmings.languages.join(',')}`;
}
console.log(adds())


 
//  **Bonus**:
//  - Make sure that any other code cannot delete or change properties of the object. */
Object.freeze(programming);
programming.isFune = 2;

 console.log(programming) 

 function a(object){
  return Object.entries(object);
 }
 console.log(a({a:1,b:2}))

 let c= {a:1};
 let bss = Object.create(c);
 console.log(bss)


 let obj4 = {
   aa:"hermann",
   bb:"totim",
   c:"tamouya"
 }
 const {aa,bb} = obj4;
 console.log(aa);
 console.log(bb);
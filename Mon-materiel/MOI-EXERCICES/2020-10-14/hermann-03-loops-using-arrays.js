/* 1. **sumOfNumbers.** Create a program that adds up the numbers in an array (of at least 3 numbers). **Bonus**: Print to screen both the sum and the product of these numbers. */
console.log("*******************1. **sumOfNumbers.******************")
function add(arr){
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log(add([2,5,8,7,4,5]));


function mult(arr){
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}
console.log(mult([2,5,8,7,4,5]));

console.log("*********************2..Hello Frien******************")


/* 
2. **Hello Frien** Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array. */
let arr = ["Hermann", "Romeo","Merlin","Dany","Marie","Jean"];
let newarr = []
for(let i = 0; i < arr.length; i++){
  console.log("Hello " + arr[i] + "!");
  newarr.push(arr[i] +" is "+ " at index "+ (i+1) + " of my friends array");
}

console.log(newarr);

console.log("********************* **3..City Names.********************")


/* 3. **City Names.** Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome". */

let arr1 = ["Douala","Berlin","Bandjoun","Leipzig"];
let newarr1 = "";
for(let i = 0; i < arr1.length; i++){
   newarr1 = newarr1 + arr1[i] + " ";
}
console.log(newarr1);


console.log("********************* ****4..Odds and Evens.*********************")

/* 
4. **Odds and Evens.** Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
* [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
* [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19] */

/* let arr2 = [3, 5, 2, 4];
let newarr2 = [];
for(let i = 0; i < arr2.length; i++){
   if(arr2[i] % 2 !==0)  newarr2.push(arr2[i]+1)
   else  newarr2.push(arr2[i]-1)
 }
 console.log(newarr2) */

 function odds(arr2){
    let newarr2 = [];
for(let i = 0; i < arr2.length; i++){
   if(arr2[i] % 2 !==0)  newarr2.push(arr2[i]+1)
   else  newarr2.push(arr2[i]-1)
 }
 return newarr2
 }
 console.log(odds([3, 5, 2, 4]));
 console.log(odds([6, 9, 10, 20]));

 console.log("********************* ******5..Capitalize.***********************")

 /* 
 5. **Capitalize.** Create a program that capitalises the first letter of each element in an array of names. Examples:
* ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
* ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
* ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"] */

function capitalizem(arr){
    let tostr = (arr.toString()).toUpperCase();
    let result = [];
    result.push(tostr[0])
    for(let i = 1; i < tostr.length; i++){
    if(tostr[i-1]==",") result.push(tostr[i].toUpperCase());
    else result.push(tostr[i].toLowerCase());
}
let result1 = (result.join('')).split(',');
return result1;
}
console.log(capitalizem(["matt", "sara", "lara"]));
console.log(capitalizem(["Cynthia", "Karen", "Jane", "Carrie"]));
console.log(capitalizem(["samuel", "MARIA", "luke", "mary"]));

/* let a = ["Cynthia", "Karen", "Jane", "Carrie"];
let b = a.toString();
let d = b.toUpperCase();
console.log(d)
let c = [];
c.push(d[0]);
for(let i = 1; i < d.length; i++){
    if(d[i-1]==",") c.push(d[i].toUpperCase());
    else c.push(d[i].toLowerCase());
}
let e = c.join("")
let f = e.split(",")
console.log(f); */

console.log("********************* *****6. **No Duplicates!*************************")


/* 
6. **No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
* [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

* [1, 6, 6, 9, 9] ➞ [1, 6, 9]
* [2, 2, 2, 2, 2, 2] ➞ [2]
* [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25] */

function noDuplicates(arr){
    let result =[]
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1]!== arr[i]) result.push(arr[i])
    }
    return result
}
console.log(noDuplicates([1, 6, 6, 9, 9]))
console.log(noDuplicates([1, 4, 4, 7, 7, 7]))
console.log(noDuplicates([2, 2, 2, 2, 2, 2]))


console.log("********************* *****7 *Repeat it.*************************")

/* 
**Repeat it.** Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.

* Example: ("example", 3) ➞ ["example", "example", "example"] */

function repeatIt(text, nber){
    let result = [];
    for(let i = 1; i <= nber; i++){
        result.push(text);
    }
    return result;
}
console.log(repeatIt("example", 5))


console.log("********************* *****8**Factors.**************************")

/* **Factors.** A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
[3, 6, 12, 36]

* // 3 is a factor of 6 (3 * 2 = 6)
* // 6 is a factor of 12 (6 * 2 = 12)
* // 12 is a factor of 36 (12 * 3 = 36)

Create a program that determines whether or not a given array is a factor chain.
* Examples
* [1, 2, 4, 8, 16, 32] ➞ true
* [1, 1, 1, 1, 1, 1] ➞ true
* [2, 4, 6, 7, 12] ➞ false
* [10, 1] ➞ false */

/* function factor(arr){
    let result = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i+1]/2) return true;
    return false;
}
// return false;
}
console.log(factor([1, 2, 4, 8, 16, 32]));
console.log(factor([2, 4, 6, 7, 12]));
console.log(factor([10, 1]));
 */
/* 
**No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
* [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

* [1, 6, 6, 9, 9] ➞ [1, 6, 9]
* [2, 2, 2, 2, 2, 2] ➞ [2]
* [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25] */



function duplicates(arr){
    let result = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i]!== arr[i+1]) result.push(arr[i])
}
return result;
}
console.log(duplicates([1, 4, 4, 7, 7, 7]));
console.log(duplicates([1, 6, 6, 9, 9]));
console.log(duplicates([2, 2, 2, 2, 2, 2]));
console.log(duplicates([5, 10, 15, 20, 25]));

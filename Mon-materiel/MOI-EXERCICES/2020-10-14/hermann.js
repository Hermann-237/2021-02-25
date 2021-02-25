/* # Return the First Element in an Array

Create a function that takes an array and returns the first element.

## Examples

```
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
```

## Notes

The first element in an array always has an index of 0.

 */
console.warn('******First element function*****');
function getFirstValue(arr){
    return arr[0];
}
console.log(getFirstValue([1,2,3]));


/* # Reverse an Array

Write a function to reverse an array.

## Examples

```
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
```

## Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. */


console.warn('******Reverse a Array*****');
function reverse(arr){
    return arr.reverse();
}
console.log(reverse([1, 2, 3, 4]));

/* 
# Return the Last Element in an Array

Create a function that accepts an array and returns the last item in the array.

## Examples

```
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true
```

## Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
*/
console.warn('******return the last item in the array *****');
function getLastItem(arr){
    return arr[arr.length-1];
}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));


console.warn('******return the index of a given item*****');

/* 
# Find the Index (Part 1)

Create a function that finds the index of a given item.

## Examples

```
search([1, 5, 3], 5) ➞ 1

search([9, 8, 3], 3) ➞ 2

search([1, 2, 3], 4) ➞ -1
```

## Notes

If the item is not present, `return -1`.
*/

console.log("****** First result");
function as(arr,nber){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==nber) return arr.indexOf(arr[i]);
    }
    return -1;
}
console.log(as([1, 5, 3], 5) );
console.log(as([1, 2, 3], 4));


console.log("****** Second result");

function search(arr,nber){
for(let i = 0; i < arr.length; i++){
    return arr.indexOf(nber);
}
}
console.log(search([1, 5, 3], 5) );
console.log(search([1, 2, 3], 4));

console.warn('******return true or false if an array contains a particular number*****');

/* 
# Check if an Array Contains a Given Number

Write a function to check if an array contains a particular number.

## Examples

```
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false
```

## Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
*/

function check(arr,nber){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==nber)return true;
        
    }
    return false;
}
console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));


console.warn('******return a Month*****');
/* 
# Convert Number to Corresponding Month Name

Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

Number | Month Name
-------|-----------
1  | January
2  | February
3  | March
4  | April
5  | May
6  | June
7  | July
8  | August
9  | September
10 | October
11 | November
12 | December

## Examples

```
monthName(3) ➞ "March"

monthName(12) ➞ "December"

monthName(6) ➞ "June"
```

## Notes

    You can expect only integers ranging from 1 to 12 as test input.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.

*/
let month = ["janvier","fevrier","mars", "avril","mai","juin","juillet","Aout","septembre", "octobre", "novembre","decembre"]

function monthName(nber){
 for(let i =1; i<month.length+1; i++){
     if(nber===i)return month[i-1];
 }
}
console.log(monthName(2));
/* # Negate the Array of Numbers

Given an array of numbers, negate all

elements contained within.

    Negating a positive value -+n will return -n, because all +'s are removed.
    Negating a negative value --n will return n, because the first - turns the second minus into a +.

## Examples

```
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]

negate([]) ➞ []
```

## Notes

If you get an empty array, return an empty array: `[]` */

function negate(arr){
   let array=[];
   for(let i =0; i<arr.length; i++){
     array.push(-1*arr[i])
    }
    return array;

}
console.log(negate([1, 2, -3, 4]));
console.log(negate([-1, 2, -3, 4]));
console.log(negate([]));

/* # Difference of Max and Min Numbers in Array

Create a function that takes an array and returns the difference between the biggest and smallest numbers.

## Examples

```
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.
``` */

function diffMaxMin(arr){
    let sortArray = arr.sort((a,b)=>a-b);
    let result = sortArray[sortArray.length-1]-sortArray[0]
    return result
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))
console.log(diffMaxMin([44, 32, 86, 19]))

// console.log(diffMaxMin[diffMaxMin.length-1]-diffMaxMin[0])

/* # Unlucky 13

Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

## Examples

```
unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.
``` */

function unlucky13(arr){
    let result = [];
    for(let i =0; i<arr.length; i++){
          if(arr[i]%13!==0)  result.push(arr[i]);
        }
        return result;
}
console.log(unlucky13([53, 182, 435, 591, 637]));
console.log(unlucky13([24, 316, 393, 458, 1279]));
console.log(unlucky13([104, 351, 455, 806, 871]));


console.warn('******01-arrays-2-3-md*****');
console.log("****************1. The Greater Numbers.**************")

/* **1. The Greater Numbers.**
Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

i.e.

findGreatest([3, 4, 5], 4) ➞ 5

findGreatest([10, 20, 30], 12) ➞ 20, 30

findGreatest([0, 10, 3], 4) ➞ 10 */
 function findGreatest(arr, nber){
     let result = [];
     for(let i = 0; i < arr.length; i++){
        if(arr[i] > nber)  result.push(arr[i]);
      }
      return result.join(',');
 }
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));


console.log("****************2. For the longest word.************")

/* **2. For the longest word.**
Create a function to find the longest word in a given string.

i.e. longestWord("this is a web development course") ➞  "development" */
function longestWord(string) {
    let  str = string.split(" ");
    let  longest = 0;
    let  word ;
    for (let i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord("this is a web development course"));



console.log("****************3. Reverse.************")
/* **3. Reverse.**
Create a function to reverse a number.

i.e. reverse(34532) ➞ 23543 */

function reverseFunction(nber){
let result = (((nber.toString()).split('')).reverse()).join('')
return result;
}
console.log(reverseFunction(2541));

console.log("***************4. AEIOU: Vowels.**********")
// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

// i.e. findVowels("this is a string") ➞ 4
function findVowels(str){
 let strSplit = str.split(' ');
 return strSplit.length;
} 
console.log(findVowels("this is a string"));

console.log("*************5. Missing Number.********")
/* 
**5. Missing Number.**
Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

Examples:
* missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
* missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
* missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
*/


function missingNums(arr){
    let sortarr= arr.sort((a,b)=>a-b);
for(let i = 0; i < sortarr.length + 1; i++){
  if(i+1 === sortarr[i]) continue;
  else return i+1
}
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

console.log("***************6. Cubed.**.********")


/* **6. Cubed.**
Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples:
* sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes([2]) ➞ 8
* sumOfCubes([]) ➞ 0 */

function sumOfCubes(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i]**3;
    }
    return result;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));



console.log("***************7. Dictionary.**********")


/* 
**7. Dictionary.**
Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

Notes:
* If none of the words match, return an empty array.
* Keep the filtered array in the same relative order as the original array of words.

Examples:
* dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
* dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
* dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
*/
/* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); */

function dictionary(word,arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].startsWith(word)) result.push(arr[i]);
    }
    return result;
}
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

console.log("************8. Even Number Generator.************")


/* 
**8. Even Number Generator.**
Create a function that finds all even numbers from 1 to the given number.

Examples:
* evenNums(8) ➞ [2, 4, 6, 8]
* evenNums(4) ➞ [2, 4]
* evenNums(2) ➞ [2]
**Notes:**
* If there are no even numbers, return an empty array.
* Do not include 0.

**Bonus: Alphabetical Order.**
Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

i.e. alphaOrder("webdev") ➞ "bdeevw"
*/
function evenNums(nber){
    let result =[];
    if(nber===0)return 0;
    else {
         result.push(nber)
        return result
    }
    
    
}
console.log(evenNums(10));
console.log(evenNums(4));
console.log(evenNums(2));

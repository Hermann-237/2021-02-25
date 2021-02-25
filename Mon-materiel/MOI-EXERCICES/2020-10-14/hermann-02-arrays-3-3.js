
console.log("********************1. Where Have My Four Letter Words Gone?******************")
/* 
**1. Where Have My Four Letter Words Gone?**
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

Examples:

* isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
* isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
* isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]
*/
function isFourLettersss(arr){
    let arrFinal =[];
for(let i = 0; i < arr.length; i++){
    if(arr[i].length == 4) arrFinal.push(arr[i]);
   }
   return arrFinal;
}
console.log(isFourLettersss(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLettersss(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLettersss(["Dog", "Cat", "Deer"]));
/* let a = ["John", "James", "Jack", "Jeanne"];
let arrt =[];
for(let i = 0; i < a.length; i++){
    if(a[i].length == 4) arrt.push(a[i]);
   }
console.log(arrt) */
function isFourLetters(arr){
        let result = arr.filter(arr => arr.length ===4);
        return result;
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));


console.log("*********************2. Months.*****************")

/* 
**2. Months.**
Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

Examples:
* monthName(3) ➞ "March"
* monthName(12) ➞ "December"
* monthName(6) ➞ "June"
*/
function monthName(nber){
    let month = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    for(let i = 0; i <= month.length; i++){
     if(nber === i+1) return month[i];
    }

}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

/* 
**3. Amplify the Multiples of 4.**
Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

* For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
* If the number cannot be divided evenly by 4, simply return the number.
* The given integer will always be equal to or greater than 1.
* Include the given number (the number in the parameters).

Examples:
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
*/
console.log("*******************3. Amplify the Multiples of 4.*****************")

function amplify(nber){
    
    let arr = [];
for(let i = 1 ; i <= nber; i++){
    if(i%4 === 0)  arr.push(i*10);
    if(i===4)continue;
     arr.push(i);
}
return arr;
}
console.log(amplify(4))
console.log(amplify(3))

console.log("*********************4. One is not like the others...*******************")
// console.log(amplify(25))

/* 

**4. One is not like the others...**
Create a function that takes an array of numbers and return the number that's unique.

Examples:
* unique([3, 3, 3, 7, 3, 3]) ➞ 7
* unique([0, 0, 0.77, 0, 0]) ➞ 0.77
* unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0*/

function unique (arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1] && arr[i+1]== arr[i+2]   ) return arr[i];
        if(arr[i]!= arr[i+2]) return arr[i+2];
        if(arr[i+2]!= arr[i+1]) return arr[i+1];
        
    } 
}
console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));


/* let ars = [0, 1, 1, 1, 1, 1, 1, 1];
let res = ars.find(n=> n !== ars[0]);
console.log(res);
let c = ars.map(x => [x * 2]);
 let d = c.flat();
console.log(d); */




console.log("*********************5. Word Ranking.*******************")


    /* 
    
    **5. Word Ranking.**
Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
* The returned string should only contain alphabetic characters (a-z).
* Preserve case in the returned string (see 4th example above).

Examples:
* wordRank("The quick brown fox.") ➞ "brown"
* wordRank("Nancy is very pretty.") ➞ "pretty"
* wordRank("Check back tomorrow, man!") ➞ "tomorrow"
* wordRank("Today is Wednesday.") ➞ "Wednesday"*/

function wordRank(str){
    let strArray = str.split(/\W+/);
    let result = strArray.sort((a,b)=> a.length - b.length);
    return result[result.length-1];
}
console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));


console.log("*********************6. c4n y0u r34d th15?********************")


/* 
**6. c4n y0u r34d th15?**
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. **NB:** for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

Examples:
* hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
*/

/* let text = "javascript is cool";
let text1 = text.split('');
let arrays = [];
for(let i = 0 ; i < text1.length; i++){
    if(text1[i] === "a") arrays.push(4);
    else if(text1[i] === "e") arrays.push(3);
    else if(text1[i] === "i") arrays.push(1);
    else if(text1[i] === "o") arrays.push(0);
    else if(text1[i] === "s") arrays.push(5);
    else arrays.push(text1[i]);
}
let join = arrays.join("")
console.log(join); */

function hackerSpeak(arr){
let text = arr.split('');
let arrays = [];
for(let i = 0 ; i < text.length; i++){
    if(text[i] === "a") arrays.push(4);
    else if(text[i] === "e") arrays.push(3);
    else if(text[i] === "i") arrays.push(1);
    else if(text[i] === "o") arrays.push(0);
    else if(text[i] === "s") arrays.push(5);
    else arrays.push(text[i]);
}
let finalText = arrays.join("");
return finalText;
}
console.log(hackerSpeak("javascript is cool"));


console.log("*********************## Bonus Questions******************")

console.log("**********************1. Is it Symmetrical?********************")

/* ## Bonus Questions

**1. Is it Symmetrical?**
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. **NB:** A number is symmetrical when it is the same as its reverse.

Examples:
* isSymmetrical(7227) ➞ true
* isSymmetrical(12567) ➞ false
* isSymmetrical(44444444) ➞ true
* isSymmetrical(9939) ➞ false
* isSymmetrical(1112111) ➞ true */

function isSymmetrical(nber){
 let reversenber = ((((nber.toString()).split("")).reverse()).join(""));
 let asnumber = parseInt(reversenber);
 if(asnumber === nber) return true;
 else return false;
}
console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(44444444));
console.log(isSymmetrical(9939));
console.log(isSymmetrical(1112111));


console.log("************************2. snake_case ➞ camelCase*********************")

/* 
**2. snake_case ➞ camelCase**
Create a function toCamelCase() that takes a single string in `snake_case` and converts it into `camelCase`.

Examples:
* toCamelCase("hello_world") ➞ "helloWorld"
* toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"
*/

function toCamelCase(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === "_")continue;
        result.push(str[i])
    } 
   let resultfinal=result.join('');
    return resultfinal;
}
console.log(toCamelCase("hello_world"));
console.log(toCamelCase("javascript_is_fun"));


console.log("**************************3. Pig Latin Translation.***********************")

/* 
**3. Pig Latin Translation.**
Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

* Move the first letter of each word to the end of the word.
* Add "ay" to the end of the word.
* Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.

**Extra Practice**
* Preserve proper capitalization as in the examples below.

Examples:
* pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
* pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
* pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."
*/


/* let text = "Cats are great pets.";
let textTrim = text.trim();
let textFinal = textTrim.slice(0,textTrim.length-1)
console.log(textFinal)
let textArray = textFinal.split(' ');
let arr = [];
for(let i = 0; i < textArray.length; i++){
    if(textArray[i][0] == "a"||textArray[i][0] == "e"||textArray[i][0] == "i"||textArray[i][0] == "o"||textArray[i][0] == "u") arr.push(textArray[i].concat('way'))
   else arr.push(((textArray[i].slice(1)).concat(textArray[i][0].toLowerCase())).concat('ay'))
}
arr.push(".")
let strf = arr.join(' ')
let finalArray = strf.replace(strf[0].toLowerCase(),strf[0].toUpperCase())
console.log(finalArray) */



function pigLatin(text){

let textTrim = text.trim();
let textFinal = textTrim.slice(0,textTrim.length-1)
let textArray = textFinal.split(' ');
let arr = [];
for(let i = 0; i < textArray.length; i++){
    if(textArray[i][0] == "a"||textArray[i][0] == "e"||textArray[i][0] == "i"||textArray[i][0] == "o"||textArray[i][0] == "u") arr.push(textArray[i].concat('way'));
   else arr.push(((textArray[i].slice(1)).concat(textArray[i][0].toLowerCase())).concat('ay'));
}
arr.push(".");
let strf = arr.join(' ');
let finalArray = strf.replace(strf[0].toLowerCase(),strf[0].toUpperCase());
return finalArray;
}

console.log(pigLatin("Cats are great pets."))
console.log(pigLatin("Tom got a small piece of pie."))
console.log(pigLatin("He told us a very exciting tale."))
/* let a = "je ne suis pas au cameroun.";
if(a[a.length-1]=="."){

    let b = a.slice(0,a.length-1)
    console.log(b)
}
else console.log(a)
 */





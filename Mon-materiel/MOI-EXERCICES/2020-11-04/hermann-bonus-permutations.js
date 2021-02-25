// # Permutations

// Create a function that takes one parameter "word" (string).

// And returns an array of strings, which represent every possible combination of the letters of the given word.

// Hint: Most likely it will be a recursive approach.

// ## Signature

// `permutate(word: string): array[string]`

// ## Example

// ```javascript
// permutate("abc");
// /* => [
// 	'abc',
// 	'acb',
// 	'bac',
// 	'bca',
// 	'cab',
// 	'cba'
// ]
// ```

// ## Bonus

// Make the elements of the returned array unique. In other words, if there are some elements doubled, remove the duplicates.

/* const permutate = (str)=>{
let a = str.split('');
let b = a.filter(element => )

}
console.log(permutate("hermann")); */

/* let str = "hermann";
let a = str.split('');
let b = a.sort();
let arr = [];

for(let i = 0; i < b.length; i++){
    if(b[i]==b[i+1]) arr.push(b[i]);
    else arr.push(b[i]);
}
console.log(arr); */
//#endregion


function month(str) {
    if (str.length === 1) { //""+ s +""+e +""+w+""+e+L
        return str[0];
    } else
        return  str[str.length - 1] + month(str.slice(0, str.length - 1));//[L]
}
console.log("Answer for number 3 (Recursion Version)");
console.log(month("Lewes"));
console.log(""+ "s" +""+"e" +""+"w"+""+"e"+"L")
console.log("hermann"+2);
console.log(typeof(2+"hermamm"+2));
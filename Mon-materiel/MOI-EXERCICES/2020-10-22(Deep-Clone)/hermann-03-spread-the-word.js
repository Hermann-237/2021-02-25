// # Spread the Word

// ## 1. Combining Arrays

//     Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
//     Once again create two arrays. Save all elements of both arrays to another variable.

let euroCountries = ["France","Germany","Italy","Spain"];
let asianCountries = ["China","Japan","Philipin","Emirat"];
let Countries = euroCountries.concat(asianCountries);
let arr = [];
arr.push(Countries);
console.log(arr);

// ## 2. Copying Arrays

//     Copy an array using the spread operator. Store the copied array in another variable.

let arr1 = [1,2,3,4];
let arrCopy = [...arr1];
console.log(arrCopy)

// ## 3. Find the Largest...

//     Create a function to find the largest number in an array.

function findLargest(arr){
    let result = arr.sort((a,b)=> b-a);
    return result[0];
}
console.log(findLargest([58,47,89,62,32,1,23]));

// ## 4. Find the Smallest

//     Create a function to find the smallest number in an array.

function findSmallest(arr){
    let result = arr.sort((a,b)=>a-b);
    return result[0];
}
console.log(findSmallest([58,47,89,62,32,12,23]));
// ## 5. Clone and Merge

//     Given two objects:

//     ```
//     const person = {name: "John"}
//     const job = {role: "Teacher"}
//     ```

//     5.1 Clone the person object.

        const person = {name: "John"};
        const job = {role: "Teacher"};
        let merge = Object.assign(person,job);
        console.log(merge);
//     5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

 let employee = {...merge};
 console.log(employee);

//     5.3 Then change the values of the properties in the employee object.
employee.name = 'Hermann';
employee.role = 'Web-dev';
console.log(employee);

// ## Bonus: 6. Is the average a whole number?

// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

// ### Examples

// ```
//     isWhole(1, 2, 3, 4);
//     // ➞ false

//     isWhole(9, 2, 2, 5);
//     // ➞ false
// ```

function isWhole(a,b,c,d){
    if(Number.isInteger(a/10 && b/10 && c/10 && d/10)) return true;
    return false;
}

console.log(isWhole(20,30,40,50))
console.log(isWhole([2,1,4,5.2]));
// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

/* it is not working  */



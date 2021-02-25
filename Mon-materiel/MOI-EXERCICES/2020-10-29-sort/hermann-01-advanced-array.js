// # Map, Filter, Reduce
console.log("******************1. Get total orders************************");
// #### 1. Get total orders
// * Return the total amount of orders.

// ```javascript
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];
// ```
const orders = [
      { amount: 250 },
      { amount: 400 },
      { amount: 100 },
      { amount: 325 }
    ];
    const getTotal = (arr)=>{
        return arr.reduce((total,current)=> total + current.amount,0);
    }
console.log(getTotal(orders));


console.log("******************2. Increment by 1************************");

// #### 2. Increment by 1
// ```javascript
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ```
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

const increment = (arr)=>{
    return arr.map(element => ++element);
}
console.log(increment([3, 45, 6, 56, 7, 9]));

console.log("******************3. Filter Evens************************");

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// ```

const filterEvens = (arr)=>{
    return arr.filter(element => element % 2 === 0);
}
console.log(filterEvens([1,2,3,11,12,13]));


console.log("******************4. Filter Friends************************");

// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```
const filterItems = (arr, str)=>{
    return arr.filter(element=> element.includes(str));
}
console.log(filterItems(["rika", "jenna", "bleda", "oliver", "itamar"], "ka"));
console.log(filterItems(["rika", "jenna", "bleda", "oliver", "itamar"], "e"));


console.log("******************5. Sum Up************************");

// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers.

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```

const sum = (arr)=>{
    return arr.reduce((total,currentNumber)=> total + currentNumber,0)
}
console.log(sum([1,2,3,4,5]));
console.log(sum([6,7,7]));


console.log("******************6. Square Root************************");

// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const squareNumber = (arr)=>{
    return arr.map(element => Number((Math.sqrt(element)).toFixed(2)));
}
console.log(squareNumber([1,3,4,5,9,16]));


function employee(nom,prenom){
 this.nom= nom;
 this.prenom= prenom;
}

let user = new employee("hermann","totim");
console.log(user.nom)
user.age = 31;
console.log(user.age)
console.log(user)
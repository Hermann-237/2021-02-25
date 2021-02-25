
console.warn("**************1. Object Person. **************");

/* 
# Objects: Part 1

Please print each of your answers to the console.

## 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.*/
 let person = {
     firstName : "Hermann",
     lastName : "Tamouya Totim",
     age : 31
 }
 for( property in person){
     console.log(property);
 }
 for( property in person){
    console.log(person[property]);
}
console.warn("**************2. Get Values.**************");

/*## 2. Get Values. Create a function that returns an array of all values of an object's properties.

    Examples:

```
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```

### Expected output:

```
["tea", "coffee", "milk"]*/

function getObjectValues(object){
    for(property  in object){
        return Object.values(object);
    }
}
console.log(getObjectValues({choice1: "tea",choice2: "coffee",choice3: "milk"}));


console.warn("**************3.Add A Method.**************");



/*## 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

    Example

let person = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: Paris
}

### Example of Expected Output:

```
Michael Smith is a 20 year old driver in Paris.
```*/
let person1 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris"
  }

  console.log(`${person1.firstName} ${person1.lastName} is a ${person1.age} year old ${person1.job} in ${person1.city}`);


console.warn("**************Bonus exercice**************");

console.warn("**************1. Convert keys and values into an array**************");
/*---
## Bonus Questions

## 1. Convert keys and values into an array

Create a function that converts an object into an array of keys and values.

### Examples:

```
objectToArray({
  A: 1,
  B: 2,
  C: 3
})
```

Expected output:

```
[["A", 1], ["B", 2], ["C", 3]]
```

```
objectToArray({
  cats: 1,
  dogs: 2,
  turtles: 4
})
```

Expected output:

```
[["cats", 1], ["dogs", 2], ["turtles", 4]]
```*/
function objectToArray(object){
    return Object.entries(object);
}
console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
  }));


  console.log(objectToArray({
  cats: 1,
  dogs: 2,
  turtles: 4
}));


console.warn("**************2. List Properties**************");

/*## 2. List Properties

Create a function that returns an array of properties of a javascript object.

### Example

```
let student = {
  name: "Mike",
  class: "4A"
  course: "English"
}
```

Expected output:

```
["name", "class", "course"]
```*/

function arrProp(object){
    return Object.keys(object);
}
console.log(arrProp({
    name: "Mike",
    class: "4A",
    course: "English"
  }));


console.warn("**************3. Merge**************");

/*## 3. Merge

Create a function that takes two objects as its parameters and merges them together into a new object.

Example

```
let first = {firstName: "John"}
let last = {lastName: "Smith"}
```

Expected output:

```
{firstName: "John", lastName: "Smith"}
```

Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.*/

// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
function mergeObject(object1,object2){ 
    return Object.assign(object1,object2);
}
console.log(mergeObject({firstName: "John"},{lastName: "Smith"}));






/*## 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

Example:

```
let person = {
  name: "John",
  job: "teacher"
}
```

Expected Output:

```
{"John": name, "teacher": job}
```*/
console.warn("**************4. Switch Keys and Values.**************");

function switchKeysValue(object){
    let objectEntries = Object.entries(object);
    let proRevers = objectEntries.map(element => element.reverse());
    let fromentries = Object.fromEntries(proRevers);
    return fromentries;
}
console.log(switchKeysValue({ a: 1, b: 2, c: 3 }));




console.warn("**************5. Return Keys and Values**************");

/*## 5. Return Keys and Values

Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

Examples:

```
{ a: 1, b: 2, c: 3 }
// ➞ [["a", "b", "c"], [1, 2, 3]]

{key: true}
//➞ [["key"], [true]]
```

*/

function returnKeyValues(object){
    let keysArr = Object.keys(object);
    let valuesArr = Object.values(object);
    let array = [];
    array.push(keysArr);
    array.push(valuesArr);
    return array;
}
console.log(returnKeyValues({ a: 1, b: 2, c: 3 }));



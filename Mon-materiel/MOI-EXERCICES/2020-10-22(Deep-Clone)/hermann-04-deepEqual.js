/* 

# Deep comparison

The `==` operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces `object` for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces `object`.

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

Ecrivez une fonction deepEqual qui prend deux valeurs et renvoie true uniquement si elles ont la même valeur ou sont des objets avec les mêmes propriétés, où les valeurs des propriétés sont égales par rapport à un appel récursif à deepEqual.

```
// Your code here.

let obj = {
    here: {is: "an"},
     object: 2
    };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj,{here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"},object: 2}));
// → true
```*/
/* function deepEqual(obj1,obj2){
    if(JSON.stringify(obj1)=== JSON.stringify(obj2)) return true;
    else return false;
} */

function deepEqual(obj1,obj2){
    if(obj1 === obj2) {
        return true;
    } else if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object' && Object.keys(obj1).length === Object.keys(obj2).length ){
        if(Array.isArray(obj1) === Array.isArray(obj2)){
            for ( let key in obj1){
                if(key in obj2){
                    if(!deepEqual(obj1[key],obj2[key])){
                        return false;
                    }
                } else {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}










let obj = {
    here: {is: "an"},
     object: 2
    };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj,{here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"},object: 2}));
// → true



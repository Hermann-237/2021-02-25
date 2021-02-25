/* 
# Deep Clone

Create a function `deepClone(original)` which returns a deep clone of the original object.

A recursively implemented function will be handy.

## Hint:

```
typeof null
// => object
// and
typeof SOME_OBJECT;
// => object

// both are objects.
``` */

function cloneDeep(object) {
    let newobject = {};

    for (prop in object) {
        newobject[prop] = object[prop];
        if (typeof newobject[prop] == 'object' && newobject[prop] != null) {
            newobject[prop] = cloneDeep(newobject[prop]);
        } 
    }

    return newobject;
}

let list = {
           a:1,
           b:2,
           c:{
               d:3,
               e:{
                   f:4
                }
            }
        };
let cloneList = cloneDeep(list);
cloneList.c.e.f=10;
cloneList.a = 2
console.log(list);
console.log(cloneList);

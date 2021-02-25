function flatten(array){
    let arr = [];
    function helper(array){
        for(let i = 0; i < array.length; i++){
            if(Array.isArray(array[i])){
                helper(array[i]);
            }else {
                arr.push(array[i]);
            }
        }
    }
    helper(array);
    return arr;
}
console.log(flatten([1,2,[3,4,[5,[1,2,3,[4,5,2,48,[8,7,4,5,[4,2,5]]]]]]]));

let newArray = [];
const nomFunction = array =>{
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            nomFunction(array[i])
        }
        else newArray.push(array[i]);
    }
    return newArray;
}
console.log(nomFunction([1,2,[3,4,[5,[1,2,3,[4,5,2,48,[8,7,4,5,[4,2,5]]]]]]]));

let newArr = [];
const nameFunction = objet =>{
let arrEntries = Object.entries(objet)
/* console.log(arrEntries);
let arrke = Object.keys(objet)
console.log("keys are :",arrke)
let arrva = Object.values(objet)
console.log("values are:",arrva) */
 for(let i = 0; i < arrEntries.length; i++){
 
    for(let j = 0; j < arrEntries[i].length; j++){
    if(typeof arrEntries[i][j] === Number ||typeof arrEntries[i][j] === String) {
        newArr.push(arrEntries[i][j]);
    }
     
    else  nameFunction(arrEntries[i][j]);
    
    }
 }
 return newArr;
}

console.log(nameFunction({a:1, b:{c:2,d:3,e:{f:4,g:5}}}));

/* let s = {a:1, b:{c:2,d:3,e:4}};
console.log(Object.entries(s)); */

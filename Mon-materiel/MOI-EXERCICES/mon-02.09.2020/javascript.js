function addAndSoustr(a,b){
    console.log("addition")
    function add(){
        let result= a+b;
        return result;
    }
    console.log("soustraction")
    function soustr(){
        let result=a-b;
        return result;
    }
    console.log(add());
    console.log(soustr());
}
addAndSoustr(15,7)


/* 

Functions Exercises

Print your answers to the console.

​

1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

​

Examples:

​

sumIntFrom1ToN(4) ➞ 10

sumIntFrom1ToN(13) ➞ 91

sumIntFrom1ToN(600) ➞ 180300 

*/

const addNumber = (a)=>{
    let result = 0;
    for(let i = 0; i <= a; i++){
     result = result + i;
    }
    return result;
}
console.log(addNumber(4));



function deux(a){
    for(let i = 0; i < a.length; i++){
        if(a.length("i"))
    }
}

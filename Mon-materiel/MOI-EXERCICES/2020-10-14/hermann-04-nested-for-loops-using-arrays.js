
console.log("********************* 1. Write a program to construct the following pattern:**************************")

/* 
# Programming Basics: Nested Loops (Using Arrays)

**Use NESTED LOOPS in each instance**

1. Write a program to construct the following pattern:

```
*
* *
* * *
* * * *
``` */

let str = "*";
let result = '';
for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
        result = result + '*' +' ';
    console.log(result);
    }
    
}


console.log("***2. Write a program which prints the elements of the following array:*******************")


/* 
2. Write a program which prints the elements of the following array:
```
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
```
And creates the following output:
```
row 0
 1
 2
 1
 24
row 1
``` */
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i = 0; i < arr.length; i++){
    console.log('row '+ i)
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
    
}

console.log("***3. Write a program that will output the following using loops:*******************")


/* 

3. Write a program that will output the following using loops:
```
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
```*/

console.log('*******************1 1 1 2 2 2 3 3 3 4 4 4**************')
let final = '';
for(let i = 1; i < 5; i++){
    for(let j = 0; j < 3; j++){
        final = final + i + ' ';
    }
}
console.log(final);

console.log('*******************0 1 2 3 4 0 1 2 3 4 0 1 2 3 4**************')


let resultat = '';
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
        resultat = resultat + j + ' ';
    }
}
console.log(resultat);
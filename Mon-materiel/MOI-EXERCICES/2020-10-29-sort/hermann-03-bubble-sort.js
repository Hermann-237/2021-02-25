// # Bubble Sort

// Please implement the sorting algorithm "Bubble Sort" inside of a function `bubbleSort(arr)` which takes the array to be sorted as its single parameter, it should return the sorted array.

// For a description refer to:
// https://en.wikipedia.org/wiki/Bubble_sort

// ## sample code:

// ```javascript
// let numbers = [9, 5, 7, 1, 0, 2, 4, 1, 6, 3, 8];
// // the "1" is doubled to have a test case

// function bubbleSort(arr) {
// 	// TODO: implement
// }

// console.log(bubbleSort(numbers));
// ```

let numbers = [9, 5, 7, 1, 0, 2, 4,4,5,4,4,4,4,4, 1, 6, 3, 8,8,8];
// // the "1" is doubled to have a test case

 function bubbleSort(arr) {
// 	// TODO: implement
  let sortArr = arr.sort((a,b) => a -b);
  let result = [];
  for(let i = 0 ; i < sortArr.length; i++){
   if(sortArr[i]=== sortArr[i+1]) continue;
   else result.push(sortArr[i])
  }
  return result;

 }

 console.log(bubbleSort(numbers));


// # Logical Thinking III

// Write pseudo-code for the following exercises on pen and paper.

console.log("******************1. Lowest to Highest************************");


// #### 1. Lowest to Highest

// Given an array of numbers from 1-9:

// ```javascript
// [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
// ```

// Sort the array from lowest value to highest.
const sortArray = (arr)=>{
    return arr.sort((a,b)=> a-b);
}
console.log(sortArray([4, 5, 3, 9, 7, 1, 8, 2, 6]));

function sortArr(arr){
	let result = [];
	for(let i = 1; i < arr.length; i++){
    if(arr.includes(i)) result.push(arr[i])
	}
	return result
}
console.log(sortArr([4, 5, 3, 9, 7, 1, 8, 2, 6]));

const lowToHigh = (arr) => { 
	for (var i = 1; i < arr.length; i++) {
		for (var j = 0; j < i; j++){ 
			if (arr[i] < arr[j]) { 
				[arr[i], arr[j]] = [arr[j], arr[i]]; 
	}
}
} 
return arr; 
}; 
/* 
2 < 4, [2,4]= [4,2]
*/
console.log(lowToHigh([4, 2, 5, 3, 9, 7, 1, 8, 2, 6])); //console.log(lowToHigh(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"])); 


console.log("******************2. Alphabetical Order************************");


// #### 2. Alphabetical Order

// Given an array of names:

// ```javascript
// ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
// ```

// Sort the array based on alphabetical order from `a → z`.

let arr = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi", "bleda"];
function sortFunction(a, b) {
	let aLowercase = a.toLowerCase();
	let bLowercase = b.toLowerCase();

	if (aLowercase < bLowercase) return -1;
	if (aLowercase > bLowercase) return 1;
	return 0;
}
arr.sort(sortFunction);
console.log(arr);

console.log("****************** **Bonuses**************************");

// **Bonuses**

console.log("****************** **Bonus-1**************************");

const sortArrayStr = (arr)=>{

    function sortFunction(a, b) {
		let aLowercase = a.toLowerCase();
		let bLowercase = b.toLowerCase();
	
		if (aLowercase < bLowercase) return -1;
		if (aLowercase > bLowercase) return 1;
		return 0;
	}
	arr.sort(sortFunction);
	return arr;
}
console.log(sortArrayStr(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi", "bleda"]))

// 1. Once you've wrote down your pen and paper solutions, create functions to solve the problems above with javascript.

console.log("****************** **Bonus-2**************************");

// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.

const sortLength = (arr)=>{
	return arr.sort((a,b)=> a.length - b.length)
}
console.log(sortLength(["Hermannnn", "L", "Ale", "Jenna", "Bleda", "Hadi", "bl"]));

let a = [1,2,3,5,4,8];
let b = a.pop();
console.log(b)
console.log(a)


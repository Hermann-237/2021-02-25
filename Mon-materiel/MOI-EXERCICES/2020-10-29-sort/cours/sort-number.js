let arr = [4, -8, 0, 7, 74, 23, -89];
let result = arr.sort((a,b)=> a-b);
console.log(result)


/* const shiftToLeft = (x, y) => y ? shiftToLeft(x * 2, y - 1) : x; */
//const shiftToLeft = (x, y) => y ? 2 * shiftToLeft(x, --y) : x
function shiftToLeft(x, y) {
	// recursive code here
	if(y === 1) return x * 2;
	else return 2 * shiftToLeft(x, y-1)
}
console.log(shiftToLeft(-31,2))
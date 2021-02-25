let arr = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi", "bleda"];
function alphabeticComparison(a, b) {
	aLowercase = a.toLowerCase();
	bLowercase = b.toLowerCase();

	if (aLowercase < bLowercase) return -1;
	if (aLowercase > bLowercase) return 1;
	return 0;
}
arr.sort(alphabeticComparison);
console.log(arr);
console.warn("****Calculating sum/average/median*****");

let sign = process.argv[2];
let arr = process.argv.splice(3);
let array = [];
let string = [];
for (let i = 0; i < arr.length; i++) {
  if (Number.isNaN(parseFloat(arr[i])) == true) {
    string.push(arr[i]);
  } else {
    array.push(parseFloat(arr[i]));
  }
}
let sum = array.reduce((ac, cur) => ac + cur);
let avg = parseFloat((sum/array.length).toFixed(2));
let result;
let medianArray = array.sort((a,b)=>a-b);
let median ;
if(medianArray.length % 2 != 0){
median = medianArray[(medianArray.length-1)/2]
}
if(medianArray.length % 2 == 0){
  median = (medianArray[(medianArray.length/2)-1] + medianArray[(medianArray.length/2)])/2
  }
function calculating(){
    if(sign == "sum")result = `The sum is ${sum}`;
    if(sign == "avg")result = `The average is ${avg}`;
    if(sign == "med")result = `The median is ${median}`;
    if(sign !="sum" && sign != "avg" && sign !="med") result = "I cannot calculate that, please type either 'sum' (to calculate the sum) or 'avg' (To calculate the Average)";
     if(string.length !== 0){
        if(string.length == 1) result = `Sorry, the argument "${string.join()}" is not a number, please try again`;
        if(string.length > 1) result = `Sorry, the arguments "${string.join(", ")}" are not the numbers, please try again`;
        
    }
 return result;
}
calculating()
console.log("Result: ",result)
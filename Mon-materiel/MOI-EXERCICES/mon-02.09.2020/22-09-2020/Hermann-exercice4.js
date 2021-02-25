/*
**1. Add Up.**
Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples:
* sumIntFrom1ToN(4) ➞ 10
* sumIntFrom1ToN(13) ➞ 91
* sumIntFrom1ToN(600) ➞ 180300


Examples:
* sumIntFrom1ToN(4) ➞ 10
* sumIntFrom1ToN(13) ➞ 91
* sumIntFrom1ToN(600) ➞ 180300*/
/*function sumIntFrom1ToN(number){
    let result = 0;
    for(let i = 1; i <=number; i++){
     result = result +i
    }
    console.log(result);
}
sumIntFrom1ToN(4)
sumIntFrom1ToN(13)
sumIntFrom1ToN(600)*/

/*
**2. Cubed.**
Create a function that takes in three numbers and returns the sum of its cubes.

Examples:
* sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes(2) ➞ 8
* sumOfCubes() ➞ 0
*/
 
/*function sumOfCubes(a,b,c){
    let result;
    if (a&&b&&c){
        result1=a**3+b**3+c**3;
        console.log(result1);
    }
    else if (a&&b){
        result2=a**3+b**3;
        console.log(result2);
    }
   else if (a){
    result3=a**3;
    console.log(result3);
    }
    else if(a!==false){
        console.log(0)
    }
    console.log(result)

}
sumOfCubes()*/


/*
**5. Count Occurrences.**
Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

i.e.
countOccurrences("this is a string", "i") ➞ 3
*/
/*function countOccurrences (text,letter){
    let num=0;

}
function calcBaseToExponent(a,b){
    var result = a**b;
    return result;
}
let sum = calcBaseToExponent(5,5);
console.log(sum)*/


/*

**10. Pie.**
Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

* Total number of slices.
* Number of recipients.
* How many slices each person gets.

Examples:
* isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices


* isEqualSlices(8, 3, 2) ➞ true
* isEqualSlices(8, 3, 3) ➞ false
* isEqualSlices(24, 12, 2) ➞ true
*/

/* 

**11. XO**
Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:

* Return a boolean value (true or false).
* The string can contain any character.
* When neither an x nor an o is in the string, return true.

Examples:
* isEqualNumXandO("ooxx") ➞ true
* isEqualNumXandO("xooxx") ➞ false
* isEqualNumXandO("ooxXm") ➞ true (case insensitive)
* isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
* isEqualNumXandO("zzoo") ➞ false
*/

/*function isEqualNumXandO(text){
    let resultO=0;
    let resultX=0;
    for(let i=0; i<text.length; i++){
     if(text[i]=== "o"|| text[i]==="O")resultO++;
    else if(text[i]=== "x"|| text[i]==="X")resultX++;
    else if(text[i]!=="o" && text[i]!=="x") true
    }
    let result = (resultO===resultX )? true:false;
    return result;
}
console.log(isEqualNumXandO("ssfo"))*/


/*
**12. isPrime?**
Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:
* isPrime(7) ➞ true
* isPrime(9) ➞ false
* isPrime(10) ➞ false
*/

/*function isPrime(x){
    let result;
 for(let i=2; i<x; i++){
    if(x%i===0) return false;
 }
 return true
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(19));
console.log(isPrime(29));
// isPrime(10);*/


/***13. Validate Email.**
Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

* The string must contain exactly one "@" character.
* The string must contain at least one "." character.
* The "." and the "@" must be in the appropriate places.
* e.g. "." cannot be the last character.
* e.g. "." cannot be directly before or after "@"
* e.g. there cannot be consecutive "." characters
* e.g. "@" must have at least one character in front of it.
* e.g. "j@example.com" is valid while "@example.com" is invalid.
* e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
* e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.
*/

// function day(second){            // if seconds > 86400 let day = seconds / 865000 
//     if (second<60){
//         return second + " equals "+ second +" seconds"
//     }          
//     else if(second===60){
//         return second + " equals 1 min and 0 seconds"
//     }
//     else if(second>60 && second<3600){
//       return second + " seconds equals " + Math.floor(second/60)+ " min and "+ (second%60)+ " seconds";
//   }
//   else if(second===3600){
//       return second + " equals 1 hour"
//   }
//   else if(second>3600 && second<86400){
//       return second + " seconds equals " + Math.floor(second/3600)+ " hours and "+ Math.floor((second%3600)/60)+ " minutes and " +  Math.floor(((second%3600)/60)%60) + " seconds";
//   }   
//   else if(second===86400){
//       return second + " equals 1 day"
//   } 
//   else if(second > 86400){
//       return second + " seconds equals " + Math.floor(second/86400) + " days and " + Math.floor((second%86400)/3600)+ " hours "+ Math.floor(((second%86400)%3600)/60)+ "minutes " + Math.floor(((second%86400)%3600)%60) +" seconde " ;
  
//   }
//   }
  
//   console.log(day(960000))
//   // it will return 11 days , 2hours, 40 minutes and 0 seconde because <=> 11*86400+2*3600+40*60 = 960000


/*function emailFunction(text){
    for(let i = 0; i < text.length; i++){
        if(!text.includes(".") ) return false;
        if(!text.includes("@")) return false;
        // if(text.indexOf(".")=== -1 ) return false;
        // if(text.indexOf("@")=== -1 ) return false;
        if((text.charAt(text.length-1)===".") || (text.charAt(text.length-1)==="@")) return false;
        if(text[i]=== "@" && text[i+1]=== ".") return false;
        if(text[i]=== "." && text[i+1]=== "@") return false;
        if(text[i]=== "." && text[i+1]=== ".") return false;
        if(text[0]=== "@") return false;
        if(text.indexOf(".com")!== (text.length-4)) return false;
    }
    return true;
}
console.log(emailFunction("hermann@gmail.com"))*/


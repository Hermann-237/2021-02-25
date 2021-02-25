// ___________WARM UP EXERCISE_______________//

    /* [if-else] Write a JavaScript program that prompts for an employee name, 
    SSN, rate of pay, and hours worked, and computes the total pay for the employee. 
    If the hours worked is greater than 40, use one and the half (x1.5) for overtime rate 
    (for hours beyond 40) and compute accordingly.

HINT: var name = prompt("Employee's Name", "Name");
francais:
Écrivez un programme JavaScript qui demande le nom d'un employé,
     SSN, taux de rémunération et heures travaillées, et calcule la rémunération totale de l'employé.
     Si le nombre d'heures travaillées est supérieur à 40, utilisez une heure et demie (x1,5) pour le taux d'heures supplémentaires
     (pendant des heures au-delà de 40) et calculez en conséquence.
 */

var name = prompt("Employee's Name", "Name");
var ssn = prompt("Social Security Number for " + name, "000-00-0000");
var wage= prompt("Hourly wage for" + name, "5.25");
var hours = prompt("How many hours did" + name + " work?", "40");
var total;
if (hours <= 40)
	total = hours * wage;
else
	total = (40 * wage) + (hours - 40) * wage * 1.5;


 let entrerYourName = prompt("Enter your name");
 console.log(entrerYourName);
 let entrerYourSsn = prompt("Enter your SSN");
 console.log(entrerYourSsn);
 let rateOfPay = prompt("Enter your rate of pay");
 console.log(rateOfPay);
 let hoursWorked = prompt("Enter your hours worked");
 console.log(hoursWorked);
 if (hoursWorked > 40){

 }else if (hoursWorked < 40){}

//Taimur's solution:

//program that prompts for:
// employee name
var name = prompt("Employee's Name", "Name"); //anythin after a comma in a prompt function, is the pla
// employee's SSN
var ssn = prompt("Social Security Number for " + name, "000-00-0000");
// employee's wage
var wage= prompt("Hourly wage for" + name, "5.25");
// number of hours worked
var hours = prompt("How many hours did" + name + " work?", "40");
//to calculate the wage
var total;
//IF emplyee worked less than or equal 40 hours
if (hours <= 40)
    total = hours * wage;
//  IF the hours worked is greater than 40, use one and the half (x1.5) for overtime rate 
// (for hours beyond 40) and compute accordingly.
else
	total = (40 * wage) + (hours - 40) * wage * 1.5;

console.log(total);
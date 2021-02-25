/* 
// TRANSFORMER UN OBJECT EN ARRAY

let obj = {
    name : "hermann",
    age :31
}
si nous voulons convertir les proprietes en array nous pouvoir faire: 
Object.keys(obj); donnera:[name,age]

si nous voulons convertir les valeur enn array nous pouvons faire:
Object.values(obj); donnera:[name,age]
 
si nous voulons faire combiner les deux :
Object.entries(obj); on aura donc: [["name","hermann"],["age",31]]

si nous voulous convertir un tableau en object nous utilisons :
Object.fromentries(obj); on aura donc : {name:"hermann",age:31}

// EXEMPLE TAIRMUR
var employee = {
    //define the properties here
    // set data values
    //these below are the properties of the object
    name: {
        firstName: 'Taimur',
        lastName: 'Khan',
    },
    age: 26,
    designation: 'Trainer',
    //function to display name of the employee
    //these below are the methods of the object
    displayName(){
        console.log("Name is Taimur");
    }
}

// using for...in to iterate over the porpoerties
for (x in employee) {
    if(x === "name")console.log(employee.name['lastName']);
}



// ARRAY-OBJECT
example:
 a = [{a:1,b:2,c:3},{d:4,b:5,f:6}];
let aArray =[];
for(let i = 0; i< a.length; i++){
  aArray.push(a[i].b);
}
let resultu = aArray.reduce((total,elem)=> total+elem)
console.log(resultu)


*/
let a = [
  { a: 1, b: 2, c: 3 },
  { d: 4, b: 5, f: 6 },
];

let b = [];
for (let i = 0; i < a.length; i++) {
  for (let item in a[i]) {
    b.push(a[i][item]);
  }
}
console.log(b);



// LE FOREACH

/*on utilise le foreach dans les tableaux(nous avons besoin du callback function) et il prend trois variable (element,index,array)et sa  sytnaxe du forEach est le suivant:
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element,index,array)=> console.log(element,index,array));
on aurra cette response: 
a,0,['a', 'b', 'c']
b,1,['a', 'b', 'c']
c,2,['a', 'b', 'c']

// LE FOR..of

on utilise le for..of dans les tableaux et on na pas besoin du callback function sa syntaxe est la suivante:

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
on aurra cette response:
a
b
c

exemple 1:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.


function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}


// FOR IN
on utilise le for in dans les objects et nous navons pas besoin du callback function la sytaxe est la suivante:
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

nous aurrons ceci comme reponse:
"a: 1"
"b: 2" 
"c: 3"






































*/

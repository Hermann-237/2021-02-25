dogIsBeter=true
catIsBetter=false
console.log(dogIsBeter && catIsBetter)
console.log(dogIsBeter || catIsBetter)
console.log(!(dogIsBeter && catIsBetter))
atoms=5
sandGrains=10
starsInSky=15
console.log(atoms>starsInSky && atoms>sandGrains)
console.log(atoms!=sandGrains)
console.log(!(atoms==sandGrains))
console.log(starsInSky<sandGrains || starsInSky>atoms)
console.log(atoms>starsInSky && atoms>sandGrains)
console.log(atoms>=10 && sandGrains<=10)
console.log(atoms*starsInSky<100 ||atoms* sandGrains>100)
/*- && the only case that we can get the true result is when the both condition are true, if one of them is true or both of them false the result will be false
-|| if one of the both is true, the result will be true */
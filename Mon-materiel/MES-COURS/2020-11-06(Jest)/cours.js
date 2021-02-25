// JEST

/*
Jest est une librairie javascript.
Nous utilisons le jest lorsque nous voulons tester les elements en javascripts et pour le faire la syntaxe est la suivante:

- Creer un un folder
- a l'interieur du folder tapper npm init -y(cette commande doit creer le package.json)
- dans le package.json tu mets la ligne "test":"jest" et si tu veux afficher mieux de detail sur le navigateur
 utilise("test":"jest --coverage") dans le package.json
- tu installes jest en entrant le code npm install --save-dev jest(Cette ligne tu n'es pas obliger de le faire)
- creer un fichier.js avec la function que tu veux tester et n'oublie pas de l'exporter(modules.exports = nom-de-la-function ) si il ya plusieur functions (modules.exports = {nomFunction1,nomFunction2,nomFunction3 } )
-creer un fichier avec l'extension .test.js et n'oublie pas d'importer la function que tu veux tester(const nom-de-la-function = require('./ou-le-fichier-est-localiser)) si il ya plusieur functions (const {nomFunction1,nomFunction2,nomFunction3 } = require ('./ou-le-fichier-est-localiser)))
- ecrire dans le meme fichier .test.js deci:
test('si 2+2 est egal a 4', ()=>{
    expert(nom-de-la-function(a,b)).toBe(4)
})

-npm test dans le terminal pour voir si c'est verifier


// AUTRES POSIBILITER


- Creer un un folder
- a l'interieur du folder tapper npm init -y(cette commande doit creer le package.json)
- dans le package.json tu mets la ligne "test":"jest"
- tu install jest en entrant le code npm install --save-dev jest(Cette ligne tu n'es pas obliger de le faire)
- creer un fichier avec la function ou les functions que tu veux tester comme ceci:
const nom-big-function = {
    nomFunction1:(a,b)=> return a+b;
    nomFunction2:(a,b)=> return a-b;
    nomFunction3:(a,b)=> return a/b;
}
-creer un fichier avec l'extension .test.js et n'oublie pas d'importer la function ou les functions que tu veux tester comme ceci:
const nom-big-function = require ('./ou-le-fichier-est-localiser))
- ecrire dans le meme fichier .test.js deci:
test('si 2+2 est egal a 4', ()=>{
    expert(nom-de-la-function(a,b)).toBe(4)
})

-npm test dans le terminal pour voir si c'est verifier



//les liens
1- https://www.youtube.com/watch?v=FgnxcUQ5vho&t=174s
2- https://www.youtube.com/watch?v=7r4xVDI2vho&t=1279s
*/
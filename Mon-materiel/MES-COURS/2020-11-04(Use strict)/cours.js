// "use strict"
/*lorsque tu mets "use strict" au debut d'une page ou alors dans un scope, ca veux dire que tu veux que les conditions soient vraiment strict c'est a dire une variable que tu appelles et que tu n'as jamais creer tu recevras un message d'erreur. par example:*/

function canYouSpotTheProblem() {
     "use strict";
    // declaring a variable => requires "let"
    for (counter = 0; counter < 10; counter++) {
    // for (let counter = 0; counter < 10; counter++) { // <- that is the fix
        console.log("Happy happy");
    }
}


canYouSpotTheProblem();

/* ce code te donnera une erreure mais si tu enleve le "use strict" lerreur partiras par example:*/

function canYouSpotTheProblem() {
    // "use strict";
    // declaring a variable => requires "let"
    for (counter = 0; counter < 10; counter++) {
    // for (let counter = 0; counter < 10; counter++) { // <- that is the fix
        console.log("Happy happy");
    }
}


canYouSpotTheProblem();


// "RECHERCHER UNE ERREUR DANS LE CODE A PARTIR DU TERMINAL"

/* dans ce cas lorsque tu executes un code et que tu constates que tu as obtenu une erreur la premiere des choses est de regarder dans ton terminal tu verras la la colone ou l'erreur se trouve et la ligne  */
















/* SOLUTION USING FOR LOOP*/

const game = ()=>{
    let ramdomNumber = Math.round(Math.random()*10);
let enterNumber = window.prompt('Guess a number between 1 - 10');

for(let i = 0; i < 3; i++){
    if(enterNumber != ramdomNumber){
        enterNumber =  window.prompt('Wrong!!! Try Again');
    }
}

if(enterNumber == ramdomNumber){
    window.alert(`Success, the number was ${enterNumber}! Attempts : ${ramdomNumber}` );
}else{
    window.alert(`Sorry,you faliled to guess the number in  three attempts. The number was ${ramdomNumber}` );
}
}

game();




/* SOLUTION USING WHILE LOOP*/

/* 
const game = ()=>{
    let ramdomNumber = Math.round(Math.random()*10);
let essais = 3;
let enterNumber = window.prompt('Guess a number between 1 - 10');
while(essais > 0){
    essais--
    
    if(enterNumber != ramdomNumber){
        enterNumber =  window.prompt('Wrong!!! Try Again');
    }
}
if(enterNumber == ramdomNumber){
    window.alert(`Success, the number was ${enterNumber}! Attempts : ${ramdomNumber}` );
}else{
    window.alert(`Sorry,you faliled to guess the number in  three attempts. The number was ${ramdomNumber}` );
}
}

game();  */



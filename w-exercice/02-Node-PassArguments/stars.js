const stars = function(){
let arrayProcess = process.argv.slice(2)
let result;
let arr =[];
let starsString;
if(arrayProcess.length == 0){
    result = "**********\n hi\n**********"
}else{
    for(let i = 0; i< arrayProcess[0]; i++){
        arr.push("*")
    }
    starsString = arr.join("");
    result = starsString+"\n"+ arrayProcess[1]+"\n"+starsString;
}
return result;
}

module.exports = stars;
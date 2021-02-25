const axios = require("axios");
let key = "1ff40b814306c049c20de29964f121fb";
let arrProcess = process.argv.slice(2);

arrProcess.forEach(element => {
    const options = {
        url:`http://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${key}`,
        methode:"get"
    } 
    axios(options).then(res=>{
        console.log(`It is now ${Math.round((res.data.main.temp-273.15) )} °C in ${res.data.name},${res.data.sys.country} The current weather conditions are: ${res.data.weather[0].description} `);
    })
 });





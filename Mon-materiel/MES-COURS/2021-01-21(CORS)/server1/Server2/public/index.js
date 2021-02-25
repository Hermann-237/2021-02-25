const url = "http://localhost:2001/api/animals";

fetch(url).then(res=>res.json()).then(data=>{
    var name = `${data.firstName} ,${data.lastName}`;
    var country = data.country;
    document.getElementById('result').innerHTML = `You are ${name} and living in ${country}`

})

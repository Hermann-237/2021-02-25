//setTimeout(executionTime, 0);


document.querySelector("body").style.fontSize= "17px";
document.querySelector('.title').style.textAlign = "center";
 
let main = document.querySelectorAll(".main");
main.forEach(el=>{
   el.style.display = "flex";
    el.style.justifyContent = "center";
    el.style.justifyContent = "space-around";
});
console.log(main)
 /* document.querySelector("main:nth-child(1)").style.backgroundColor = "red";  */
 let a = document.getElementsByClassName("food-category");
 for(let i = 0; i < a.length; i++){
     if(i == 0){
         a[i].style.backgroundColor= "red";
     }
      if(i == 1){
        a[i].style.backgroundColor= "yellow";
    }
    if(i == 2){
        a[i].style.backgroundColor= "blue";
    }
 }

 



let bigCategory = document.querySelectorAll(".food-category");
bigCategory.forEach(el=>{
    //el.style.background = "red";
    el.style.width = "30%";
    el.style.height = "11vh";
    el.style.margin = "0 2%";
});

let eachCategory = document.getElementsByClassName(".food-category");

let titleChild = document.querySelectorAll(".category");
titleChild.forEach(el=>{
el.style.fontSize = "20px";
el.style.textDecoration = "underline";
el.style.textDecoration = "italic";
});

// the first section 
document.getElementById("warning").style.fontSize = "25px";
document.getElementById("warning").style.textAlign = "center";
/* let section1 = document.querySelectorAll("#warning");section1.forEach(el=>{
el.style.textAlign = "center";
el.style.marginTop = "30px";
}) */
// class allergies
let b =  document.querySelector(".allergy-warning")
b.style.textAlign = "center";

let c = document.querySelector(".allergies")
c.style.listStyleType= "none";
for(let i = 0; i < c.length; i++){
    if(i%2 == 0){
        c[i].style.backgroundColor = "red"
    }
}
//footer
let footer = document.querySelectorAll(".footer");
footer.forEach(el=>{
    el.style.display = "flex";
    el.style.marginTop = "80px";
    el.style.justifyContent = "center";
});

// class food-desc

let foodDesc = document.querySelectorAll(".food-desc");
foodDesc.forEach(el=>{
    el.style.display ="flex";
    el.style.justifyContent ="center";
    el.style.alignItems ="center";
    el.style.margin =" 0 20px";
    el.style.width =" 100px";
    el.style.height =" 100px";
    el.style.borderRadius =" 100px";
    el.style.border = "8px solid yellow"
})



  const fs = require("fs")
  let arrfile = fs.readdirSync(__dirname)
  fs.writeFile("toto.txt", "je suis un camerounais","utf-8",(err,data)=>{
      /* if(err) throw err
      console.log("the file has already been created") */
  })
fs.appendFile("./toto.txt", "et toi tu es d'ou","utf-8",(err,data)=>{
/*     if(err) throw err
    console.log("je viens dajouter") */
});
if(arrfile.includes("maman")){
    fs.rmdirSync("maman", { recursive: true });
}else{

    fs.mkdir("./maman", (err,data)=>{
    
    })
}

/* // Cookie-Parser 

on utilise xa pour stoker les informations du clien dans le cookie: la syntaxe est le suivant:

const cookieParser = require("cookie-parser")
app.use(cookieParser())

app.post("/",(req,res)=>{
    res.cookie("nomDuCookie", "laValeurDuCookie",{httpOnly:true,maxAge:6000000}).status(200).send("the cookie has been sent")
})


// Jsonwebtoken

xa permet just de crypter une information la syntaxe est la suivante:

const jwt = require("jsonwebtoken")

const secret = "dsfsadfsafdsdfsdffd"

app.post("/",(req,res)=>{
    let token = jwt.sign({data: 'foobar'}, secret, { expiresIn: '1h' });
    res.cookie("nomducookie", token,{httpOnly:true})
})


pour plus d'information regarde l'example dans le fichier index.js


*/


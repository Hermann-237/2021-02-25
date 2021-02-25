/* 
// ERROR HANDLING
cette technique permet que si ton url a les problem tu dois renvoyer le message que toi meme tu veux . c'est le module http-errors qui le fait facilement il faut l'installer en faissant npm i http-errors.
les etapes pour le faire sont les suivantes:

-creer l'erreur: 

app.use( async (req,res,next)=>{
    next(creatError(405,"Tu as fait une erreur"))
})

- attribuer l'erreur 

app.use(async(err,req,res,next)=>{
    res.status(err.status || 500)
    res.send(err.message)
    
})

-resultat:
xa veux dire que si tu as ce path 
app.get('/Blog',(req,res)=>{
    res.status(200).send('Welcom to my Blog Page');
});

* la page localhost:port/Blog donnera // Welcom to my Blog Page

* la page localhost:port/Blog/adasdfs donnera // Tu as fait une erreur // et le status sera a 405



voici comment xa se passe:

const creatError = require("http-errors")

*/
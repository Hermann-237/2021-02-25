// CORS

/* 
on utilise CORS l'orsque tu veux creer un server API et mettre des restriction pour avoir access a tes donnees par example tu as un site qui vent les images et lorsque quelqu'un paye il a access a ton API qui contient ses images:

example: we have 04 servers: server1, server2 ,  server3 and apiServer, apiserver est le server qui contient les donnees a vendre et les autre vons devoir payer pour avoir access une fois qu'il paie il me suffit de mettre ceci sur apiserver et specifier les sitesweb ou server qui aurons access a apiserver. 
- si je veux que tout les site aient access a ce site il me suffit de mettre dans mon apiserver: 
       const cors = require('cors')

       app.use(cors())

- si je veux specifier les sites qui pourrons avoir access je fais:

     const cors = require('cors')
     
      
     const corsOption = {
    origin:["http://localhost:(portserver1)","http://localhost:(portserver2)"],// ici seul le server1 et server2 auront access
    optionsSuccessStatus:200,
}
app.use(cors(corsOption))


    
Pour plus de detail regarde les differents folde dans ce me directory


*/
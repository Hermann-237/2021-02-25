/* 
// CLASSLIST ET CLASSNAME

 tu peux ajouter une classe dans une balise en faisans 
 let a = document.creatElement("div");
 a.classList = "one,two...";

 * tu peux aussi faire en une seul ligne :
 a.classList.add("one");

 * tu peux aussi supprimer une class :
 
 a.classList.remove("one")


 // INNERTEXT
 on l'utilise pour ajouter du text dans une balise example:
 let a = document.creatElement("p")
 a.innerText = "ceci est le contenu de la balise p que je viens de creer"

 // INNERHTML
 on l'utilise aussi pour ajouter du text dans la balise mais la difference entre lui et le innerText est que lui il est plus puissant il peux aussi contenir des balises example:
 let a = document.creatElement("p")
 a.innerHTML ="ceci est le contenu de la <strong>balise</strong> p que je viens de creer"

 // DOCUMENT.WRITE 
 dans mon experience il fonctionne un peu comme le INNERHTML mais est encore plus puissant car tu peux faire la concatenation avec lui example:
 let age = 31;
 let a = document.creatElement("p")
 let b = document.write("j'ai "+ age+ " ans");
 tu peux aussi utiliser les balises directement avec leur proprietes:
 document.write("<p class = one style='color:red'> je suis un camerounais</p>" ) 




 // CREATELEMENT

 tu peux creer un element et decider de ou cet element doit etre inserer et tu ne peux l'inserer que avant example :
<body>
    <h1>Close and oppen</h1>

    <script>
      let h1 = document.querySelector("h1");
      let a = document.createElement("p");
      a.innerHTML = "ceci est mon element p";
      document.body.insertBefore(a, h1);
    </script>


    // APPENDCHILD AND APPEND 

    on l'utilise pour joindre un element nouvelement creer en javascript avec un eleement qui existe deja dans le html syntaxe = parent.appendChild(enfant) ,example:

    <body>
    <h1>Close and oppen</h1>

    <script>
    let h1 = document.querySelector("h1")
    let a = document.creatElement("p")
    a.innerHTML = "j'ajoute ce texe dans mon html"
    h1.appendChild(a);
    </script>
    </body>


// APPEND

    la difference entre le appendChild et le append c'est que le append peut meme contenir le text example:
    <body>
    <h1>Close and oppen</h1>

    <script>
    let h1 = document.querySelector("h1")
    h1.appendChild("j'ajoute ce texe dans mon html");
    </script>
    </body>
*/

/* 
avec le Jquery tu peux faire la meme chose que tu le fais dans javascript.
/// JQUERY ALS EVENT LISTENER JAVASCRIPT

1)  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
  <h1 id="one"> comment tu vas </h1>#


  <div id="flip">Click to slide down panel</div>
  <div id="panel">Hello world!</div>


    <script src="app.js"></script>
  </body>
</html>


pour commencer il te faux copier ce lien jquery dans la balise body:<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>

2) app.js

dans le dossier app.js tu peux siblier le h1 et dire lorsque je clique sur xa il change de couleur et devient rouge:
 $("h1").click(function(){
     $(this).css("color","red")
     $(this).html("le text h1 sera maintenant ceci")
     $(this).attr("class","two");
     $(this).hide()// si je clique il disparait
     $(this).hide(1000)// si je clique il disparait dans 1s
     $(this).show()// si je clique il montre lelement cacher precedament
     $(this).show(1000)// si je clique il montre lelement cacher precedament dans 1seconde
     $(this).toggle()// si je clique il disparait tu clique encore il apparait;
     $(this).toggle(1000)// si je clique il disparait tu clique encore il apparait mais dans 1seconde


 })

$("#flip").click(function(){
    $("#panel").slideDown("slow");// lorsque tu cliqueras sur "flip","panel " s'affichera de faxon lente
    $("#panel").slideDown("fast");// lorsque tu cliqueras sur "flip","panel " s'affichera de faxon rapide
})


*/

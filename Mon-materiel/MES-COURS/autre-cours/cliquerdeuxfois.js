let isRoteted = false;

$(".image").click(function () {
  if (isRoteted) {
    $(this).css("transform", "rotate(0deg)");
    isRoteted = false;
  } else {
    $(this).css("transform", "rotate(20deg)");
    isRoteted = true;
  }
});

// si il est faux(n'est pas roter) tu le rote et tu le met a vrai et si il est alors vrai tu le le met a 0 degres et tu le met a faux

// using toggle

/* $("#box").on("click ", function () {
        $("#my-box").toggle();
      }); */
$("#box").click(function () {
  $("#my-box").toggle();
});

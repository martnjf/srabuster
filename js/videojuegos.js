$(".card-ex:first").hide();
$(".card-ex2:first").hide();

fetch("../JSON/peliculas.json").then(function (response) {
  response.json().then(function (datos) {
    datos[0].items.forEach((item) => {
      var cards = $(".card-ex:first").clone();
      $(cards).find(".imagen").attr("src", item.image);
      $(cards).show();
      $(cards).appendTo($("#firstBox"));
    });

    datos[1].items.forEach((item2) => {
      var card = $(".card-ex2:first").clone();
      $(card).find(".imagen2").attr("src", item2.image);
      $(card).show();
      $(card).appendTo($("#secondBox"));
    });
  });
});

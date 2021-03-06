$(".card-ex:first").hide();
$(".card-ex2:first").hide();
$(".card-ex3:first").hide();
$(".card-ex4:first").hide();
$(".card-ex5:first").hide();

fetch("../../JSON/peliculas.json").then(function (response) {
  response.json().then(function (datos) {
    datos[0].items.forEach((item, index) => {
      var cards = $(".card-ex:first").clone();
      $(cards).find(".imagen").attr("src", item.image);
      $(cards).attr("id", index);
      $(cards).attr("value", "populares");
      $(cards).show();
      $(cards).appendTo($("#firstBox"));
    });

    datos[1].items.forEach((item2, index) => {
      var card = $(".card-ex2:first").clone();
      $(card).find(".imagen2").attr("src", item2.image);
      $(card).attr("id", index);
      $(card).attr("value", "tendencias");
      $(card).show();
      $(card).appendTo($("#secondBox"));
    });

    datos[2].items.forEach((item3, index) => {
      var card = $(".card-ex3:first").clone();
      $(card).find(".imagen3").attr("src", item3.image);
      $(card).attr("id", index);
      $(card).attr("value", "comedia");
      $(card).show();
      $(card).appendTo($("#thirdBox"));
    });

    datos[3].items.forEach((item4, index) => {
      var card = $(".card-ex4:first").clone();
      $(card).find(".imagen4").attr("src", item4.image);
      $(card).attr("id", index);
      $(card).attr("value", "accion");
      $(card).show();
      $(card).appendTo($("#fourthBox"));
    });

    datos[4].items.forEach((item5, index) => {
      var card = $(".card-ex5:first").clone();
      $(card).find(".imagen5").attr("src", item5.image);
      $(card).attr("id", index);
      $(card).attr("value", "drama");
      $(card).show();
      $(card).appendTo($("#fifthBox"));
    });
  });
});

var modal = document.getElementById("myModal");
var element = document.getElementsByClassName("card-ex");
var span = document.getElementsByClassName("close")[0];

function showModal(item) {
  var divId = $(item).attr("id");
  var type = 0;
  //$(item).attr("value") == "populares" ? (type = 0) : (type = 1);
  if ($(item).attr("value") == "populares"){
    type = 0;
  } else if ($(item).attr("value") == "tendencias") {
    type = 1;
  } else if ($(item).attr("value") == "comedia") {
    type = 2;
  } else if ($(item).attr("value") == "accion") {
    type = 3;
  } else if ($(item).attr("value") == "drama") {
    type = 4;
  }


  modal.style.display = "block";

  fetch("../../JSON/peliculas.json").then(function (response) {
    response.json().then(function (datos) {
      var itemSelected = datos[type].items[divId];
      document.getElementById("modal-header").innerHTML = itemSelected.title;
      document.getElementById("modal-desc").innerHTML = itemSelected.body;
      document.getElementById("modal-title").innerHTML = itemSelected.price;
      $("#modal-image").attr("src", itemSelected.image);
    });
  });
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

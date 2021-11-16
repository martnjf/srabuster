$(".card-ex:first").hide();
$(".card-ex2:first").hide();

fetch("../JSON/peliculas.json").then(function (response) {
  response.json().then(function (datos) {
    datos[0].items.forEach((item, index) => {
      console.log(index);
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
  });
});

var modal = document.getElementById("myModal");
var element = document.getElementsByClassName("card-ex");
var span = document.getElementsByClassName("close")[0];

function showModal(item) {
  var DivId = $(item).attr("id");
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("demo").innerHTML = "Hello World";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

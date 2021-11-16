$(".card-ex:first").hide();
$(".card-ex2:first").hide();

fetch("../JSON/peliculas.json").then(function (response) {
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
  });
});

var modal = document.getElementById("myModal");
var element = document.getElementsByClassName("card-ex");
var span = document.getElementsByClassName("close")[0];

function showModal(item) {
  var divId = $(item).attr("id");
  var type = 0;
  $(item).attr("value") == "populares" ? (type = 0) : (type = 1);

  modal.style.display = "block";

  fetch("../JSON/peliculas.json").then(function (response) {
    response.json().then(function (datos) {
      var itemSelected = datos[type].items[divId];
      document.getElementById("modal-header").innerHTML = itemSelected.title;
      document.getElementById("modal-desc").innerHTML = itemSelected.body;
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

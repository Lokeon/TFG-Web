function getGameId() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:3000/api/admins/games/" + $("#searchId").val(),
    success: function (data) {
      $("#Name").val(JSON.stringify(data["name"]).replace(/"/g, ""));
    },
    error: function () {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No se ha podido extraer la información. Puede que la actividad que esté intentando consultar no exista o que no se esté comunicando con el servidor.",
      });
    },
  });
}

function patchGame() {
  var formData = new FormData();
  formData.append("image", $("#Image")[0].files[0]);
  $.ajax({
    url: "http://localhost:3000/api/admins/games/image/" + $("#searchId").val(),
    type: "PATCH",
    dataType: "html",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function () {
      Swal.fire({
        icon: "success",
        text: "Game succesfully inserted!",
      }).then(function () {
        location.href = "./changeImageGame.html";
      });
    },
    error: function () {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No ha podido insertarse. Compruebe su conexión con el servidor.",
      });
    },
  });
}

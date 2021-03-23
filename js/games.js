function postGame() {
  var formData = new FormData();
  formData.append("name", $("#Name").val());
  formData.append("genre", $("#Genres").val());
  formData.append("description", $("#Description").val());
  formData.append("image", $("#Image")[0].files[0]);
  $.ajax({
    url: "http://localhost:3000/api/admins/games/game",
    type: "post",
    dataType: "html",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function () {
      Swal.fire({
        icon: "success",
        text: "Insertado con éxito!",
      }).then(function () {
        location.href = "./insertGame.html";
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

function getGameId() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://tfg-recosys.herokuapp.com/api/admins/games/" + $("#searchId").val(),
    success: function (data) {
      $("#Name").val(JSON.stringify(data["name"]).replace(/"/g, ""));
      $("#Platforms").val(JSON.stringify(data["platforms"]).replace(/"/g, ""));
      $("#Genres").val(JSON.stringify(data["genre"]).replace(/"/g, ""));
      $("#Description").val(
        JSON.stringify(data["description"])
          .replace(/"/g, "")
          .replaceAll("\\r\\n", "\r\n")
      );
    },
    error: function (request, status, error) {
      Swal.fire({
        icon: "error",
        text: request.responseText,
      });
    },
  });
}

function patchGame() {
  var formData = new FormData();
  formData.append("image", $("#Image")[0].files[0]);
  formData.append("name", $("#Name").val());
  formData.append("genre", $("#Genres").val());
  formData.append("platforms", $("#Platforms").val());
  formData.append("description", $("#Description").val());

  $.ajax({
    url: "https://tfg-recosys.herokuapp.com/api/admins/games/image/" + $("#searchId").val(),
    type: "PATCH",
    dataType: "html",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function () {
      Swal.fire({
        icon: "success",
        text: "Game succesfully changed!",
      }).then(function () {
        location.href = "./changeGame.html";
      });
    },
    error: function (request, status, error) {
      Swal.fire({
        icon: "error",
        text: request.responseText,
      });
    },
  });
}

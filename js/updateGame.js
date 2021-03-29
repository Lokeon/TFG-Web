function getGameId() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:3000/api/admins/games/" + $("#searchId").val(),
    success: function (data) {
      $("#Name").val(JSON.stringify(data["name"]).replace(/"/g, ""));
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
        text: "Image game succesfully changed!",
      }).then(function () {
        location.href = "./changeImageGame.html";
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

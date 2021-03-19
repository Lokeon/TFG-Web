function login() {
  var myUrl = "http://localhost:3000/api/auth/login/admins";
  $.ajax({
    type: "POST",
    contentType: "application/json",
    crossDomain: true,
    url: myUrl,
    data: JSON.stringify({
        username: $("#forUsername").val(),
        password: $("#forPassword").val(),
    }),
    success: function () {
      Swal.fire({
        icon: "success",
        text: "Insertado con éxito!",
      }).then(function () {
        location.href = "./aa.html";
      });
    },
    error: function (xhr, status, error) {
      Swal.fire({
        icon: "error",
        text: xhr.text,
      });
    },
  });
}

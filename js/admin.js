function login() {
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:3000/api/auth/login/admins",
    data: JSON.stringify({
      username: $("#Username").val(),
      password: $("#Password").val(),
    }),
    success: function (data) {
      Swal.fire({
        icon: "success",
        text: "Logged in!",
        timer: 2000,
      }).then(function () {
        location.href = "./users/infoUser.html";
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

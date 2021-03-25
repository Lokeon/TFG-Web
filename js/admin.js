function login() {
  $.ajax({
    type: "POST",
    contentType: "application/json",
    crossDomain: true,
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
        location.href = "./users/user.html";
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

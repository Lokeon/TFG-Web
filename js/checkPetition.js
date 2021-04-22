$(document).ready(function () {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://tfg-recosys.herokuapp.com/api/admins/petition/check",
    success: function (data) {
      if (data.totalPetitions > 0) {
        $(".fa-gamepad").css({ color: "red" });
        $("#petitionsN")
          .css({
            color: "red",
            fontSize: "20px",
            marginRight: "5%",
          })
          .text(data.totalPetitions);
      }
    },
    error: function (request, status, error) {
      Swal.fire({
        icon: "error",
        text: request.responseText,
      });
    },
  });
});

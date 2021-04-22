$(document).ready(function () {
  $("#userTable").DataTable({
    ajax: {
      url: "https://tfg-recosys.herokuapp.com/api/admins/users",
      type: "GET",
      dataSrc: "",
      dataType: "json",
    },
    columns: [
      { data: "_id", title: "Id", type: "readonly" },
      { data: "username", title: "Username", type: "text" },
      { data: "email", title: "Email", type: "text" },
      { data: "date", title: "Created at", type: "date", type: "readonly" },
    ],
    dom: "Bfrtip",
    select: "single",
    responsive: true,
    altEditor: true,
    closeModalOnSuccess: true,
    buttons: [
      {
        extend: "selected",
        text: "Delete",
        name: "delete",
      }
    ],
    onDeleteRow: function (datatable, rowdata, success, error) {
      $.ajax({
        type: "DELETE",
        url: "https://tfg-recosys.herokuapp.com/api/admins/users/delete/" + rowdata["_id"],
        dataType: "text",
        success: function (response) {
          Swal.fire("Poof! User has been deleted!", {
            icon: "success",
          }).then(function () {
            location.href = "./infoUser.html";
          });
        },
        error: function (request, status, error) {
          Swal.fire({
            icon: "error",
            text: request.responseText,
          });
        },
      });
    },
  });
});

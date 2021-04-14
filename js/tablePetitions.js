$(document).ready(function () {
  $("#petitionTable").DataTable({
    ajax: {
      url: "http://localhost:3000/api/admins/petition",
      type: "GET",
      dataSrc: "",
      dataType: "json",
    },
    columns: [
      { data: "_id", title: "Id", readonly: true },
      { data: "nameGame", title: "Name Game", type: "text" },
      {
        data: "date",
        title: "Created at",
        type: "date",
        type: "readonly",
      },
    ],
    dom: "Bfrtip",
    select: "single",
    responsive: true,
    altEditor: true,
    buttons: [
      {
        extend: "selected",
        text: "Delete",
        name: "delete",
      },
    ],
    onDeleteRow: function (datatable, rowdata, success, error) {
      $.ajax({
        type: "DELETE",
        url:
          "http://localhost:3000/api/admins/petition/delete/" + rowdata["_id"],
        dataType: "text",
        success: function (response) {
          Swal.fire("Poof! Petition has been deleted!", {
            icon: "success",
          }).then(function () {
            location.href = "./petitions.html";
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

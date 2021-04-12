$(document).ready(function () {
  $("#gameTable").DataTable({
    ajax: {
      url: "http://localhost:3000/api/admins/games/",
      type: "GET",
      dataSrc: "",
      dataType: "json",
    },
    columns: [
      { data: "_id", title: "Id", readonly: true },
      { data: "name", title: "Name", type: "text" },
      {
        data: "genre",
        title: "Genres",
        hoverMsg: "Separate with commas",
        type: "text",
      },
      {
        data: "platforms",
        title: "Platforms",
        hoverMsg: "Separate with commas",
        type: "text",
      },
      { data: "description", title: "Description", type: "text" },
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
        url: "http://localhost:3000/api/admins/games/delete/" + rowdata["_id"],
        dataType: "text",
        success: function (response) {
          Swal.fire("Poof! Game has been deleted!", {
            icon: "success",
          }).then(function () {
            location.href = "./infoGame.html";
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

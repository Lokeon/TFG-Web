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
    encodeFiles: false,
    buttons: [
      {
        extend: "selected",
        text: "Edit",
        name: "edit",
      },
      {
        extend: "selected",
        text: "Delete",
        name: "delete",
      },
    ],
    onEditRow: function (datatable, rowdata, success, error) {
      $.ajax({
        type: "PUT",
        url: "http://localhost:3000/api/admins/games/update/" + rowdata["_id"],
        data: JSON.stringify({
          name: rowdata["name"],
          genre: rowdata["genre"],
          description: rowdata["description"],
        }),
        contentType: "application/json",
        success: function () {
          Swal.fire({
            icon: "success",
            text: "Game successfully updated!",
          }).then(function () {
            location.href = "./infoGame.html";
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
    },
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
        error: function (response) {
          alert(response.responseText);
        },
      });
    },
  });
});

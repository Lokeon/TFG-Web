$(document).ready(function () {
  $("#gameTable").DataTable({
    ajax: {
      url: "http://localhost:3000/api/admins/games/",
      type: "GET",
      dataSrc: "",
      dataType: "json",
    },
    columns: [
      { data: "_id", title: "Id", type: "readonly" },
      { data: "name", title: "Name", type: "text" },
      {
        data: "genre",
        title: "Genres",
        hoverMsg: "Separate with commas",
        type: "text",
      },
      { data: "description", title: "Description", type: "text" },
      {
        data: "image",
        title: "Image",
        type: "file",
        render: function (data, type, row, meta) {
          if (data)
            return `<img style='max-width:150px;max-height:150px' src=data:data:image/*;base64,${data}></img>`;
        },
      },
      { data: "date", title: "Created at", type: "date", type: "readonly" },
    ],
    dom: "Bfrtip",
    select: "single",
    responsive: true,
    altEditor: true,
    encodeFiles: false,
    closeModalOnSuccess: true,
    buttons: [
      {
        text: "Add",
        name: "add",
      },
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
    onAddRow: function (datatable, rowdata, success, error) {
      var formData = new FormData();
      formData.append("name", rowdata["name"]);
      formData.append("genre", rowdata["genre"]);
      formData.append("description", rowdata["description"]);
      formData.append("image", rowdata["image"]);
      $.ajax({
        url: "http://localhost:3000/api/admins/games/game",
        type: "POST",
        dataType: "html",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function () {
          Swal.fire({
            icon: "success",
            text: "Game successfully inserted!",
          }).then(function () {
            location.href = "./insertGame.html";
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
            location.href = "./insertGame.html";
          });
        },
        error: function (response) {
          alert(response.responseText);
        },
      });
    },
    onEditRow: function (datatable, rowdata, success, error) {
      $.ajax({
        url: "http://localhost:3000/api/admins/games/post" + rowdata["_id"],
        type: "post",
        dataType: "html",
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
            location.href = "./insertGame.html";
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
  });
});

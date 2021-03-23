$("#userTable").DataTable({
  ajax: {
    url: "http://localhost:3000/api/admins/users",
    type: "GET",
    dataSrc: "",
    dataType: "json",
  },
  columns: [
    { data: "_id" },
    { data: "username" },
    { data: "email" },
    { data: "date" },
  ],
  columnDefs: [
    {
      targets: 4,
      render: function (data, type, row, meta) {
        return (
          '<button class="delete" id=n-"' +
          meta.row +
          '"><i class="fa fa-trash"></i></button>'
        );
      },
    },
  ],
});

$("#userTable tbody").on("click", ".delete", function () {
  var id = $(this).attr("id").match(/\d+/)[0];
  var data = $("#userTable").DataTable().row(id).data();

  Swal.fire({
    title: "Are you sure you want delete this user?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancel",
    confirmButtonText: "Yes, erase!",
  }).then((deleted) => {
    if (deleted.value) {
      $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/api/admins/users/delete/" + data["_id"],
        dataType: "text",
        success: function (response) {
          Swal.fire("Poof! User has been deleted!", {
            icon: "success",
          }).then(function () {
            location.href = "./getUsers.html";
          });
        },
        error: function (response) {
          alert(response.responseText);
        },
      });
    } else {
    }
  });
});

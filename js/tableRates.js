$(document).ready(function () {
  $("#rateTable").DataTable({
    ajax: {
      url: "http://localhost:3000/api/admins/rates",
      type: "GET",
      dataSrc: "",
      dataType: "json",
    },
    columns: [
      { data: "_id", title: "Id", type: "readonly" },
      { data: "idUser", title: "Id User", type: "readonly" },
      { data: "nameGame", title: "Name Game", type: "readonly" },
      { data: "score", title: "Score", type: "readonly" },
      { data: "date", title: "Created at", type: "date", type: "readonly" },
    ],
    select: "single",
    responsive: true,
    altEditor: true,
    closeModalOnSuccess: true,
  });
});

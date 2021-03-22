$("#userTable").DataTable({
  ajax: "http://localhost:3000/api/admins/users",
  dataSrc: "users",
  columns: [
    { data: "_id" },
    { data: "email" },
    { data: "username" },
    { data: "date" },
  ],
});

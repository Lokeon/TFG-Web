$(document).ready(function () {
  $("#searchId").bind("keyup change", function () {
    var empty = false;
    $("#searchId").each(function () {
      if ($(this).val() == "") {
        empty = true;
      }
    });
    if (empty) {
      $("#btnFind").attr("disabled", "disabled");
    } else {
      $("#btnFind").removeAttr("disabled");
      $("#btnUpdate").removeAttr("disabled")
    }
  });
});

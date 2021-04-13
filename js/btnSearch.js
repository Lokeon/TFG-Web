$(document).ready(function () {
  $("#Image").bind("keyup change", function () {
    var empty = false;
    $("").each(function () {
      if ($(this).val() == "") {
        empty = true;
      }
    });
    if (empty) {
      $("#btnFind").attr("disabled", "disabled");
      $("#btnUpdate").attr("disabled", "disabled");
    } else {
      $("#btnFind").removeAttr("disabled");
      $("#btnUpdate").removeAttr("disabled");
    }
  });
})

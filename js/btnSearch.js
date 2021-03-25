(function () {
  $("#forId").bind("keyup change", function () {
    var empty = false;
    $("#forId").each(function () {
      if ($(this).val() == "") {
        empty = true;
      }
    });
    if (empty) {
      $("#btnFind").attr("disabled", "disabled");
      $("#btnUpdate").attr("disabled", "disabled");
      $("#forName").attr("disabled", "disabled");
      $("#forDescription").attr("disabled", "disabled");
      $("#forMaxAsist").attr("disabled", "disabled");
    } else {
      $("#btnFind").removeAttr("disabled");
      $("#btnUpdate").removeAttr("disabled");
      $("#forName").removeAttr("disabled");
      $("#forDescription").removeAttr("disabled");
      $("#forMaxAsist").removeAttr("disabled");
    }
  });
})();
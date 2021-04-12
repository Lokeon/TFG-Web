$(document).ready(function () {
  $("input[type='text'],input[type='file'],textarea").bind(
    "keyup change",
    function () {
      var empty = false;
      $("input[type='text'],input[type='file'],textarea").each(function () {
        if ($(this).val() == "") {
          empty = true;
        }
      });
      if (empty) {
        $("#btnSave").attr("disabled", "disabled");
      } else {
        $("#btnSave").removeAttr("disabled");
      }
    }
  );
});

// Disabled the submit button until the inputs are filled
(function () {
  $("input[type='text'],input[type='file']").bind(
    "keyup change",
    function () {
      var empty = false;
      $("input[type='text'],input[type='file']").each(
        function () {
          if ($(this).val() == "") {
            empty = true;
          }
        }
      );
      if (empty) {
        $("#btnSave").attr("disabled", "disabled");
      } else {
        $("#btnSave").removeAttr("disabled");
      }
    }
  );
})();

$(document).ready(function () {
  $("label.absolute.floating-label").on("click", function () {
    $(this).closest("div").find("input").focus();
  });
  $(".floating-label-input-wrapper input").on("change", function () {
    console.log($(this).val());
    if ($(this).val() != "") {
      if (!$(this).closest("div").find("label").hasClass("pinned")) {
        $(this).closest("div").find("label").addClass("pinned");
      }
    } else {
      $(this).closest("div").find("label").removeClass("pinned");
    }
  });
});

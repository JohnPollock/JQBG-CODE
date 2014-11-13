$(document).ready(function() {
  $("div").click(function(event) {
    event.stopPropagation();
    $(this).append("<br>You clicked me!");
  });
});








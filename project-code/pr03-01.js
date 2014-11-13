$(document).ready(function() {
  $("#make-bold").click(function(event) {
    event.preventDefault();
    $("#imp-text").addClass("bold-font");
  });
  $("#show-msg").on("click", function(event) {
    event.preventDefault();
    $("#message").append("Hi, hope you liked the important text!");
  });
});


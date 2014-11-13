$(document).ready(function() {
  $("#highlight").click(function(event) {
    event.preventDefault();
    $("#imp-text").toggleClass("highlight");
  });
  $("#make-bold").click(function(event) {
    event.preventDefault();
    $("#more-info").css("font-weight", "bold");
  });
});



$(document).ready(function() {
  $("#make-bold").click(function(event) { 
    event.preventDefault();
    $("#imp-text").addClass("bold-text");
  });
  $("#sim-make-bold").mouseenter(function() {
    $("#make-bold").trigger("click");
  });
});



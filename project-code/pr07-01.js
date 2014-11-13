$(document).ready(function() {
  $("#content").hide();
  $("#menu").hide();
  $("#mouse-div").mousedown(function(event) {
    event.preventDefault();
    if (event.which === 1) {
      $("#content").slideToggle();
    } 
    if (event.which === 2) {
      $("#menu").slideToggle();
    }
  }); 
});








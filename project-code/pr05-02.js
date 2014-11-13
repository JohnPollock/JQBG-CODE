$(document).ready(function() {
  $("#add").click(function(event) { 
    event.preventDefault();
    $(".summary").append("<p>Article by Me!</p>");
  });
});







$(document).ready(function() {
  $("#more").hide();
  $("#show-more").click(function(event) {
    event.preventDefault();  
    $("#more").slideDown("slow");
  }); 
});







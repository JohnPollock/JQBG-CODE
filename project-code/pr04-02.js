$(document).ready(function() {
  $("#move-box").click(function(event) { 
    event.preventDefault();
    $("#my-box").offset({left:100, top:50});
  });
});



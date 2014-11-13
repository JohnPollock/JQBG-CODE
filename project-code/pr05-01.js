$(document).ready(function() {
  $("#change-size").click(function(event) {
    event.preventDefault();
    $("#box").css("width", function() {
      var curWidth = parseInt($("#box").css("width")), 
          newWidth = curWidth * 4;
      return newWidth;
    });
  });
});






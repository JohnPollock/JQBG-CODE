$(document).ready(function() {
  $("#contact-form").submit(function(event) {
    var formInput = $(this).serialize();
    event.preventDefault();
    $.post("pr09-02.php", formInput, function(data) {
      $("#sub-msg").empty().append("Message sent successfully."); 
    }).error(function() {
	  $("#sub-msg").empty().append("Load Error!");
	});;
  });
});










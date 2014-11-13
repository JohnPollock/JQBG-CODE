$(document).ready(function() {
  $("#qform").submit(function(event) {
	 var $ans = $("#ans");
	 event.preventDefault();
	 $ans.removeClass("right wrong");
	 if ($ans.val() !== "here") {
	   $ans.addClass("wrong").effect("shake", 800);
	 }
	 else {
	   $ans.addClass("right").effect("bounce", 800); 	 
	 }
  });
});








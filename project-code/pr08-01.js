$(document).ready(function() {	
  var $name = $("#name"), 
	  $errName = $("#err-name"); 
  $name.blur(function() {
	var myPattern = /^[a-z ]+$/i;  
	$errName.empty();
	if (!myPattern.test($name.val())) {
	  $errName.append("Only letters and spaces are allowed");
	}
  });
});









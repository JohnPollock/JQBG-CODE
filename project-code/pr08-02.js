$(document).ready(function() {	
  var $name = $("#name"), 
	  $msgName = $("#err-name"); 
	  $num = $("#num"), 
      $msgNum = $("#err-num");
	  $cForm = $("#contact-form");
  $name.focus(function() {
	  $msgName.empty().append("Letters and spaces only");
  }).blur(function() {
	  $msgName.empty();
  });
  $num.focus(function() {
	  $msgNum.empty().append("Digits 0-9 only");
  }).blur(function() {
	  $msgNum.empty();
  });
  $cForm.submit(function(event) {
     var namePattern = /^[A-Za-z ]{2,20}$/, 
	     numPattern = /^\d+$/, 
         errors = 0, 
         fieldColor = "#FFF", 
         errColor = "#FDD";
    $(".fields").css("background-color", fieldColor);
    $(".err-msg").empty(); 
    if ($name.val().length > 0) {
      if (!namePattern.test($name.val())) {
	  $name.css("background-color", errColor);
	  $msgName.append("Must contain only letters and spaces – between " + 
                        "2 and 20 characters");
        errors += 1;
      }
    }
    if (!numPattern.test($num.val())) {
      $num.css("background-color", errColor);
      $msgNum.append("Required: Must contain only digits – between 0 and 9");
      errors += 1;
    }
    if (errors > 0) {
      $cForm.prepend('<div class="err-msg">Please edit the marked fields ' + 
                     'below to fix errors.</div>');
      event.preventDefault(); 
    }
  });
});









$(document).ready(function() {
  $(".rand-quote").chooseRandom({ weight: "bold", complete: function() {
	  $(this).fadeOut(10000);  
    }
  });
});










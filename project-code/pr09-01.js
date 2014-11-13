$(document).ready(function() {	
  var $dJP = $("#details-jp"), 
      $dKD = $("#details-kd");
  $("#author-jp").click(function(event) {
	 event.preventDefault();
	 $dJP.empty().hide().load("pr09-01-jp.html #bio", function(data) {
	   $dJP.slideDown(1000);
	 });
  });
  $("#author-kd").click(function(event) {
	 event.preventDefault();
	 $dKD.empty().hide().load("pr09-01-kd.html #bio", function(data) {
	   $dKD.slideDown(1000);
	 });
  });
});









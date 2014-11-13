$(document).ready(function() {
  $(".employees tr:first").addClass("emp-head");
  $(".employees tr:even:not(tr:first)").addClass("emp-alt");
});


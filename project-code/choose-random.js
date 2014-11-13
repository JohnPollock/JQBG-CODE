(function($) {
  $.fn.chooseRandom = function(custom) {
    return this.each(function() {
	  var defs = {
		           weight: "normal", 
			       style: "normal", 
				   hLevel: 2, 
				   hText: "Random Quote"
	             }, 
	      custOps = $.extend(defs, custom), 
          $elmt = $(this), 
		  $coll = $elmt.children("div"), 
		  items = $coll.length, 
	      rQuote = $coll.eq(Math.floor(Math.random() * items)).text();	  
	  $elmt.html('<h' + custOps.hLevel +'>' + custOps.hText + '</h' + custOps.hLevel + '><div style="font-weight:' + custOps.weight +'; font-style:' + custOps.style + ';">' + rQuote + '</div>');
	});
  }
})(jQuery);


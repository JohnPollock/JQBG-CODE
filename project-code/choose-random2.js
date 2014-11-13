(function($) {
  $.fn.chooseRandom = function(custom) {
    return this.each(function() {
      var defs = {
		       weight: "normal", 
			 style: "normal", 
                   complete: function() {}
	            }, 
	    custOps = $.extend(defs, custom), 
          $elmt = $(this), 
	    $coll = $elmt.children("div"), 
	    items = $coll.length, 
	    rQuote = $coll.eq(Math.floor(Math.random() * items)).text();	  
     $elmt.html('<h2>Random Quote</h2><div style="font-weight:' + 
     custOps.weight +'; font-style:' + custOps.style + ';">' + rQuote + '</div>');
     custOps.complete.call(this);
    });
  }
})(jQuery);



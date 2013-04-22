/*global jQuery */
/*! 
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
  
  $.fn.fitText = function( kompressor, options ) {
     
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'lines' : Number,
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
  
    return this.each(function(){

      // Store the object
      var $this = $(this);
      var $text = $this.children('span').text();

        console.log($text)
      
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));

        if ($this.parent().parent().attr("id") == "word-cloud") {
            var $i = $text.replace(/[^I]/gi, "").length;
            $length = $text.length;

            if (settings.lines > 1) {

              var $parts = $text.split(" ");
              var $longestWord = 0;

              for(var i=0; i < $parts.length; i++){
                  if($parts[i].length > $longestWord){
                      $longestWord = $parts[i].length;
                      $i = $parts[i].replace(/[^I]/gi, "").length;
                      console.log("new i = " + $i)
                  }
              }
              $length = $longestWord;
            }

            var $newSize = $this.width() / (compressor / (2.1 + ($i * 0.12))) / $length;
            $this.css('font-size', $newSize);
        }
      };

      // Call once to set.
      resizer();
        
      // Call on resize. Opera debounces their resize by default. 
      $(window).on('resize', resizer);
        
    });

  };

})( jQuery );
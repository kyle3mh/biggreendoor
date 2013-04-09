$(document).ready(function() {
	var windowsize = $window.width();
	var originalFontSize = windowsize/35.0;
	var sectionWidth = $('#sidebar').width();

	$('#sidebar span').each(function(){
		var spanWidth = $(this).width();
		var newFontSize = (sectionWidth/spanWidth) * originalFontSize;
		$(this).css({"font-size" : newFontSize, "line-height" : newFontSize/1.2 + "px"});
	});
});





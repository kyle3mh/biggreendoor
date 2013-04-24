////// ON LOAD //////

$(document).ready(function() {
	$('.fade-on-scroll > :not(.seperator)').each(function () { 
        a = $(this).offset().top;
        b = $(window).scrollTop() + $(window).height() + 110; // plus a bit extra so there's no gaps
        if (a < b) {
        	$(this).css('opacity',1);
        }
	});

	$('#word-cloud').attr('style', function(i, style) {		// the mobile media query sets display to none, so we have to remove the 'display:block' inline-style set by the jquery fade function
	    return style.replace(/display[^;]+;?/g, '');
	});
});

////// ON SCROLL //////

$(window).scroll(function(d,h) {
	$('.fade-on-scroll > :not(.seperator)').each(function () { 
        a = $(this).offset().top + 100;	// fade in once we get 100 pixels past the top of the element
        b = $(window).scrollTop() + $(window).height();
        if (a < b) {
        	$(this).fadeTo(500,1);
        }
	});

	$('#word-cloud').attr('style', function(i, style) {		// the mobile media query sets display to none, so we have to remove the 'display:block' inline-style set by the jquery fade function
	    return style.replace(/display[^;]+;?/g, '');
	});
});

$('.sidebar').children('ul').children('li').mouseover(function() {
	console.log($(this).index());

	$('#image-container').stop().animate({
		'left': $(this).index() * 100 + '%'
	}, 500);
});

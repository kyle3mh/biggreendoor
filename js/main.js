$(document).ready(function() {
	$('.fade-on-scroll > :not(.seperator)').each(function () { 
        a = $(this).offset().top;
        console.log(a)
        b = $(window).scrollTop() + $(window).height() + 110; // plus a bit extra so there's no gaps
        console.log(b)
        if (a < b) {
        	$(this).css('opacity',1);
        }
	});

	$('#word-cloud').attr('style', function(i, style) {
	    return style.replace(/display[^;]+;?/g, '');
	});
});

$(window).scroll(function(d,h) {
	$('.fade-on-scroll > :not(.seperator)').each(function () { 
        a = $(this).offset().top + 100;	// fade in once we get 100 pixels past the top of the element
        b = $(window).scrollTop() + $(window).height();
        if (a < b) {
        	$(this).fadeTo(500,1);
        }
	});

	$('#word-cloud').attr('style', function(i, style) {
	    return style.replace(/display[^;]+;?/g, '');
	});
});



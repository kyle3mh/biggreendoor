$(window).ready(function() {
	$('.fade-on-scroll > *').each(function () { 
        a = $(this).offset().top + ($(this).height() / 2);
        b = $(window).scrollTop() + $(window).height();
        if (a < b) {
        	$(this).css('opacity',1);
        }
	});
});

$(window).scroll(function(d,h) {
	$('.fade-on-scroll > *').each(function () { 
        a = $(this).offset().top + ($(this).height() / 2);
        b = $(window).scrollTop() + $(window).height();
        if (a < b) {
        	$(this).fadeTo(500,1);
        }
	});
});


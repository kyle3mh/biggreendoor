$(document).ready(function() {
	$('.fade-on-scroll > :not(.seperator)').each(function () { 
        a = $(this).offset().top + ($(this).height() / 3);
        console.log(a)
        b = $(window).scrollTop() + $(window).height() + 150;
        console.log(b)
        if (a < b) {
        	$(this).css('opacity',1);
        }
	});
});

$(window).scroll(function(d,h) {
	$('.fade-on-scroll > :not(.seperator)').each(function () { 
        a = $(this).offset().top + ($(this).height() / 2);
        b = $(window).scrollTop() + $(window).height();
        if (a < b) {
        	$(this).fadeTo(500,1);
        }
	});
});


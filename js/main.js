////// ON LOAD //////

$(document).ready(function() {
	$('.fade-on-scroll > *').each(function () { 
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
	$('.fade-on-scroll > *').each(function () { 
        a = $(this).offset().top + 100;	// fade in once we get 100 pixels past the top of the element
        b = $(window).scrollTop() + $(window).height();
        if (a < b) {
        	$(this).stop().animate({	// fadeTo add 'display:block' inline, so opacity is animated to get round this
				opacity: 1
			}, 500);
        }
	});

	$('#word-cloud').attr('style', function(i, style) {		// the mobile media query sets display to none, so we have to remove the 'display:block' inline-style set by the jquery fade function
	    return style.replace(/display[^;]+;?/g, '');
	});
});

$('#cssmenu').children('ul').children('li').mouseover(function() {
	console.log($(this).index());

	$('#image-container').stop().animate({
		'left': $(this).index() * 100 + '%'
	}, 500);
});

//////// POEM TYPEWRITER /////////
$(function() {	// document ready
	var win = $(window),
	    foo = $('#poem');

	foo.typer([	'THE DOOR',
				'Go and open the door.',
				'Maybe outside there’s a tree', 
				'or a wood,',
				'a garden,',
				'or a magic city.',

				'Go and open the door.',
				'Maybe a dog’s rummaging.',
				'Maybe you’ll see a face,',
				'or an eye,',
				'or a picture',
				'of a picture.',

				'Go and open the door.',
				'If there’s a fog',
				'it will clear.',

				'Go and open the door.',
				'Even if there’s only',
				'the darkness ticking,',
				'even if there’s only',
				'the hollow wind,',
				'even if',
				'nothing',
				'is there,',

				'Go and open the door.',

				'At least <br>' +
				'there’ll be <br>' +
				'a draught.'
				]);

	// unneeded...
	win.resize(function(){
	    var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));

	    foo.css({
	        fontSize: fontSize * .5 + 'px'
	    });
	}).resize();
});
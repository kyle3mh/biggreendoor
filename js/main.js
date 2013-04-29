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

	$(document).on('init.slides', function() {
		$('.loading-container').fadeOut(function() {
			$(this).remove();
		});
	});

	$('#slides').superslides({
		slide_easing: 'easeInOutCubic',
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollable: true
	});
});

////// ON SCROLL //////
$(window).scroll(function() {	
	$('.fade-on-scroll > *').each(function () { 
        a = $(this).offset().top + 100;	// fade in once we get 100 pixels past the top of the element
        b = $(window).scrollTop() + $(window).height();
        if (a < b) {
        	$(this).stop().animate({	// fadeTo add 'display:block' inline, so opacity is animated to get round this
				opacity: 1
			}, 300);
        }
	});

	$('#word-cloud').attr('style', function(i, style) {		// the mobile media query sets display to none, so we have to remove the 'display:block' inline-style set by the jquery fade function
	    return style.replace(/display[^;]+;?/g, '');
	});
});

/////// HOMEPAGE SCROLL /////////
$('#cssmenu').children('ul').children('li').children('a').mouseover(function() {
	var index = $(this).parent().index();

	$('#slides').stop().superslides('animate' , index)
	console.log($(this).parent().index());

	//window.location = $('.slides-pagination a:nth-child(' + (index + 1) + ')').attr('href');

	// $('#image-container').stop().animate({
	// 	'left': $(this).index() * 100 + '%'
	// }, 500);
});

//////// POEM TYPEWRITER /////////

var play = false;

$('#poem-link').click(function() {
	if (play == false) {
		play = true;
		$('#window').show('slow', function() {
	  	
		var win = $(window),
		    poem = $('#poem');

		poem.typer(['<p><span text-align:center;">THE DOOR <br> </span></p>',
			'<p><span style ="font-family: dk_pisangregular"; text-align:center;">By MIROSLAV HOLUB</span></p>',
					'Go and open the door. <br>' +
					'<span class="indent"> Maybe outside there’s a tree <br> </span>' +
					'<span class="indent"> or a wood, <br> </span>' +
					'<span class="indent"> a garden, <br> </span>' +
					'<span class="indent"> or a magic city. <br>',

					'Go and open the door. <br> </span>' +
					'<span class="indent"> Maybe a dog’s rummaging. <br> </span>' +
					'<span class="indent"> Maybe you’ll see a face, <br> </span>' +
					'<span class="indent"> or an eye, <br> </span>' +
					'<span class="indent"> or a picture <br> </span>' +
					'<span class="indent"><span class="indent"></span> of a picture. </span>',

					'Go and open the door. <br> </span>' +
					'<span class="indent"> If there’s a fog <br> </span>' +
					'<span class="indent"> it will clear.',

					'Go and open the door. <br> </span>' +
					'<span class="indent"> Even if there’s only <br> </span>' +
					'<span class="indent"> the darkness ticking, <br> </span>' +
					'<span class="indent"> even if there’s only <br> </span>' +
					'<span class="indent"> the hollow wind, <br> </span>' +
					'<span class="indent"> even if <br> </span>' +
					'<span class="indent"><span class="indent"></span> nothing <br> </span>' +
					'<span class="indent"><span class="indent"></span> is there,',

					'Go and open the door.',

					'<span style="margin-top:400px;"> At least <br>' +
					'there’ll be <br>' +
					'a draught.','',''
					]);

			win.resize(function(){
			    var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));

			    poem.css({
			        fontSize: fontSize * .25 + 'px'
			    });
			}).resize();
		});
	}	
	else {
		hidePoem();
	}
});

// Click outside the poem to hide it
$(document).mouseup(function (e)
{
    var container = $("#window");
    if (container.has(e.target).length === 0)
    {
        hidePoem();
    }
});

// click the close button to hide poem
$('#close').click(function() {
	hidePoem();
});

// click escape to hide poem
$(document).keyup(function(e) {
  if (e.keyCode == 27) { 
  	hidePoem();
  }   
});

// hide poem function
function hidePoem() {
	$('#window').hide('slow', function() { 
		play = false; 	// global variable to control the 'type-writer' plugin
		$('#poem').empty();
	});	// esc
}






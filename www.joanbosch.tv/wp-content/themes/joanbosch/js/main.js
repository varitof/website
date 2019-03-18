jQuery(document).ready(function($) {
	
	'use strict';
	
	// Fullscreen
	
	$('.fullscreen').height($(window).height());
	
	$(window).resize( function(){ $('.fullscreen').height($(window).height()); });
	
	// Cover image (data attr)
	
	if ($('.cover').length){
		$('.cover').each( function(){ if($(this).attr('data')!='' && typeof($(this).attr('data')) != 'undefined'){ $(this).css("background-image", "url(" + $(this).attr('data') + ")"); } });	
	}
	
	
	

	
	
	$("a.post.video").each(function(){
		
		if($('body').width() > 768 || Modernizr.touch){
			var url = $(this).find('video source').attr('video-src'); console.log(url);
			$(this).find('video').attr('src',url);

		
			 var figure = $(this).hover( hoverVideo, hideVideo );

		}
	
/*
		$(this).mousemove(function (e) {
			var offset = $(this).offset();		   
		    $(this).find(".info").show().css({
		      "left": e.clientX - offset.left,
		      "top": e.clientY - offset.top
		    });
		    
		   		    
		}).mouseout(function () {
		   $(this).find(".info").hide();
		});
*/
		
	});
	
		function hoverVideo(e) {  
		    $('video', this).get(0).play(); 
		}
		
		function hideVideo(e) {
		    $('video', this).get(0).pause(); 
		}
	
	
	$('.toggle').click(function(){
		$('.index').fadeToggle(); 
		$('body').toggleClass('body-fixed');
	});
	$('.index-opt').click(function(){
		$('.index-wrapper').fadeIn(); 
		$('.contact').fadeOut(); 
		
	});
	$('.contact-opt').click(function(){
		$('.contact').fadeIn(); 
		$('.index-wrapper').fadeOut(); 

	});
	
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {
		$('.index').fadeOut(350);  
		
		$('body').removeClass('body-fixed'); 
	  }
	});
	
	$('.close').click(function(){
		$('.index').fadeToggle(); 
		$('body').toggleClass('body-fixed');
	});

	$(document).on('click', 'a.credits-nom', function(event){
	    event.preventDefault();
	    if($('.single-section').hasClass('opened')){
		 	$('.single-section').removeClass('opened');
		  	$('#credits_section').fadeOut("slow");
		  	$("html, body").animate({ scrollTop: 0 }, "slow");
		    
	    }else{
		    
		    $('.single-section').addClass('opened');
			$('#credits_section').fadeIn("slow");
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
	    
	    }
	});
	
	$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(){
		$('body').toggleClass('fullscreen');

	});
	
	setTimeout(function(){
		 $('.overlay-loader').fadeOut();	 
	}, 4000);

/*
	var anyFont = new Font();
	anyFont.src = document.location.origin + "/wp-content/themes/joanbosch/fonts/AtlasGrotesk-Regular.eot";
	anyFont.onload = function () {
	  console.log("font loaded");
	}
*/
	
	$('.close-project').click(function(){
		 $('.single-section').removeClass('opened');
		$('#credits_section').fadeOut();

		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	$('.index-post img').each(function(){
		var minx = -($(window).width()-$(this).width())/2;
		var maxx = ($(window).width()-$(this).width())/2;
		var randomx = Math.floor(Math.random() * (maxx - minx + 1)) + minx;
		var miny = -($(window).height()-220)/2;
		var maxy = ($(window).height()-220)/2;
		var randomy = Math.floor(Math.random() * (maxy - miny + 1)) + miny;

/*
        var numRand = Math.floor(Math.random() * 501);
        var divsize = 100;
        var posx = (Math.random() * ($(window).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(window).height() - divsize)).toFixed();
        posx = Math.floor(Math.random() * $(window).width()); 
        posy = Math.floor(Math.random() * $(window).height()); console.log(posy);
*/
		$(this).css({
            'left': randomx + 'px',
                'top': randomy + 'px'
        });

	});
	
	$(".single iframe").each(function(){
		if(!Modernizr.touch){
		    var videosrc=$(this).attr("src")+"?autoplay=1";
		    $(this).attr("src",videosrc);
		}
    }); 
	
});
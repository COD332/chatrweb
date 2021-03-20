// Parallax Slider
$(document).ready(function(){

	// Main Slider
		'use strict';
		var options = {
			autoPlay: true,
			nextButton: true,
			prevButton: true,
			navigationSkip: true,
			animateStartingFrameIn: true,
			autoPlayDelay:3000,
			pauseOnHover : false,
			transitionThreshold:1500,
			preloader: false,
			preloadTheseImages: [
			    "../images/parallax/parallax5.jpg",
			    "../images/parallax/parallax2.jpg",
			    "../images/parallax/parallax1.jpg"
			],
			reverseAnimationsWhenNavigatingBackwards : false,	
			preventDelayWhenReversingAnimations : true
		};
		try{
			var sequence = $("#sequence").sequence(options).data("sequence");
		}
		catch(err){}	


		// Main Slider 2
/*
		var options = {
			autoPlay: true,
			nextButton: true,
			prevButton: true,
			navigationSkip: true,
			animateStartingFrameIn: true,
			autoPlayDelay: 3000,
			pauseOnHover : false,
			transitionThreshold: 0,
			preloader: true,
			preloadTheseFrames: [1,2,3],
			preloadTheseImages: [
			    "_/images/main_slide_2/bg_frame_1.jpg.jpg",
			    "_/images/main_slide_2/bg_frame_2.jpg.jpg",
			    "_/images/main_slide_2/bg_frame_3.jpg.jpg"
			],
			reverseAnimationsWhenNavigatingBackwards : false,	
			preventDelayWhenReversingAnimations : true		
		};
		try{
			var sequence = $("#sequence-2").sequence(options).data("sequence");
		}
		catch(err){}

	// Sub Slider
	var options = {
		autoPlay: false,
		nextButton: true,
		prevButton: true,
		preloader: true,
		navigationSkip: true,
		animateStartingFrameIn: true,
		autoPlayDelay:1000,
		pauseOnHover : false,
		transitionThreshold:2000,
		reverseAnimationsWhenNavigatingBackwards : false,	
		preventDelayWhenReversingAnimations : true			
	};
	try{
		var sequence = $("#sequence-sub-slider").sequence(options).data("sequence");
		sequence.afterLoaded = function(){ $(".sequence-prev, .sequence-next").fadeIn(100);}
	}
	catch(err){}*/
	// Full width and height img background
	// Full Screen Slider
	$('.slide-bg').css({
		marginLeft: - ($(window).width() - $('.slide-frame').outerWidth())/2,
		height: ($(window).height()),
		width : ($(window).width()) + 200
	}); 
	$('#sequence').css({
	  height: ($(window).height())
	 });

});

$( window ).resize(function() {
 $('.slide-bg').css({
  marginLeft: - ($(window).width() - $('.slide-frame').outerWidth())/2,
  height: ($(window).height()),
  width : ($(window).width()) + 200
 });
 
 $('.home-slideshow').css({
  height: ($(window).height())
 });
});
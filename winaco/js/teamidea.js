/*
 * Copyright (c) 2014 //////////// teamidea ///////////////
 * Author: //////////// teamidea /////////////// 
 * This file is made for CURRENT TEMPLATES
*/

	


////////////////////////////////////////////  
// LOADING
///////////////////////////////////////////  

window.onload=function() {
    document.getElementById('loading-mask').style.display='none';

}



jQuery(document).ready(function($){
		
	"use strict";


	
////////////////////////////////////////////  
// LOGO
///////////////////////////////////////////  

	var logoheight = jQuery(".logo-wrap").outerHeight();
	var navheight = jQuery(".sf-menu>li>a").outerHeight();
	
	var resultheight = (logoheight-navheight)/2;
	
	jQuery(".sf-menu>li>a").css({paddingTop:resultheight, paddingBottom:resultheight,});

	

////////////////////////////////////////////  
// MENU
///////////////////////////////////////////  
	
	if(jQuery().superfish){
		jQuery('ul.sf-menu').superfish({
			delay:       100,                            // one second delay on mouseout
			speed:       'fast',                          // faster animation speed
			autoArrows:  true                            // disable generation of arrow mark-up	
		});	
	}
	
	jQuery('#nav ul li li a').mouseenter(function() {
			jQuery(this).animate({ paddingLeft:'+=10'}, 200, 'swing');
		}).mouseleave(function() {
			jQuery(this).animate({ paddingLeft:'-=10'}, 200, 'swing');
		});
	
	
	var winWidth = jQuery(window).width();
	
	/*if( winWidth > 979 ){*/
	jQuery("nav").sticky({ topSpacing: 0});	
	/*}*/
	/*jQuery(".mobile-menu").sticky({ topSpacing: 0});	*/	
	
	
	

////////////////////////////////////////////  
// PAGE SCROLL
///////////////////////////////////////////  	
		
	
	jQuery(function() {
		jQuery('.scroll').bind('click', function(event) {
			var $anchor = jQuery(this);
			var headerH = jQuery('#navbar').outerHeight();
			jQuery('html, body').stop().animate({
				scrollTop : jQuery($anchor.attr('href')).offset().top - 73
			}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
	}); 


	jQuery(function() {
		jQuery('.scroll-mobile').bind('click', function(event) {
			var anchora = jQuery(this);
			var headerH = jQuery('#navbar').outerHeight();
			jQuery('html, body').stop().animate({
				scrollTop : jQuery(anchora.attr('href')).offset().top - 473
			}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	
	
////////////////////////////////////////////  
// MOBILE MENU TOGGLE
///////////////////////////////////////////  
	
	jQuery('.nav-toggle a').click(function(){
		jQuery('.mobile-menu').stop(true,true).slideToggle(500);
		return false;
	});
	
	jQuery('.mobile-menu ul li a.right-dir').prepend('<i class="icon-plus"></i>');
	
	jQuery('.mobile-menu ul li a.right-dir').click(function(){
		jQuery('ul.ms-menu').stop(true,true).slideToggle(500);
		return false;
	});
	
	jQuery('a.site-toggle').click(function(){
		jQuery('.your-site-bottom').stop(true,true).slideToggle(500);
		return false;
	});	
	
	
	/*jQuery('.menu li a').click(function(){
		jQuery('.mobile-menu').stop(true,true).fadeOut(0);
		return false;
	});*/




////////////////////////////////////////////  
// NICESCROLL
///////////////////////////////////////////

	if ( $().niceScroll ) {
		$("body").niceScroll({
			cursorcolor:"#e4593a",
			cursorwidth:10,
			cursorborder: 0,
			cursorborderradius: 0,
			zindex: 9999
	
		});
	}



////////////////////////////////////////////  
// EASY PIE CHART
///////////////////////////////////////////  
	
	jQuery('.chart').waypoint({	
		
		handler: function mpchart(){
					jQuery('.percentage').easyPieChart({
						easing: 'easeOutBounce',
						barColor: '#2e3235' ,
						trackColor: '#dd4d47',
						scaleColor: false,
						lineCap: 'butt',
						rotate: 0,
						lineWidth: 8,
						animate: 2000,
						size:70,
						onStep: function(value) {
							this.$el.find('span').text(Math.round(value));
						}
					});	
										
				},
		offset: '95%'
	
	})
	
	/*jQuery('.chart').waypoint({	
		
		handler: function mpchart(){
					jQuery('.percentage2').easyPieChart({
						easing: 'easeOutBounce',
						barColor: '#16a61e' ,
						trackColor: '#dd4d47',
						scaleColor: false,
						lineCap: 'butt',
						rotate: 0,
						lineWidth: 8,
						animate: 2000,
						size:70,
						onStep: function(value) {
							this.$el.find('span').text(Math.round(value));
						}
					});	
										
				},
		offset: '95%'
	
	})
	
	jQuery('.chart').waypoint({	
		
		handler: function mpchart(){
					jQuery('.percentage3').easyPieChart({
						easing: 'easeOutBounce',
						barColor: '#ffd600' ,
						trackColor: '#dd4d47',
						scaleColor: false,
						lineCap: 'butt',
						rotate: 0,
						lineWidth: 8,
						animate: 2000,
						size:70,
						onStep: function(value) {
							this.$el.find('span').text(Math.round(value));
						}
					});	
										
				},
		offset: '95%'
	
	})
	
	jQuery('.chart').waypoint({	
		
		handler: function mpchart(){
					jQuery('.percentage4').easyPieChart({
						easing: 'easeOutBounce',
						barColor: '#569dff' ,
						trackColor: '#dd4d47',
						scaleColor: false,
						lineCap: 'butt',
						rotate: 0,
						lineWidth: 8,
						animate: 2000,
						size:70,
						onStep: function(value) {
							this.$el.find('span').text(Math.round(value));
						}
					});	
										
				},
		offset: '95%'
	
	})*/
	
	
	
	jQuery('.fun-fact').waypoint({
		handler: function mpchart(){
			jQuery(this).find('.percentage-2').easyPieChart({
				barColor: false,
				trackColor: false,
				scaleColor: false,
				lineCap: 'butt',
				rotate: 0,
				lineWidth: false,
				animate: 2000,
				size:false,
				onStep: function(value) {
					this.$el.find('h1').text(Math.round(value));
				}
			});	
		},
		offset: '95%'
	})
	
	

////////////////////////////////////////////  
// ANIMATION
///////////////////////////////////////////	

	jQuery(window).load(function(e) {
		
		jQuery(".service-animation").waypoint({  // Service
	
			handler: function portfolioPopup(){
						jQuery('.service-animation>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('teamidea-animation')) {
								setTimeout(function(){ popupItem.addClass('teamidea-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".client-animation").waypoint({  // portfolio 
	
			handler: function portfolioPopup(){
						jQuery('.client-animation>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('teamidea-animation')) {
								setTimeout(function(){ popupItem.addClass('teamidea-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".team-animation").waypoint({  // Pricess 
	
			handler: function portfolioPopup(){
						jQuery('.team-animation>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('teamidea-animation')) {
								setTimeout(function(){ popupItem.addClass('teamidea-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
    });
	
	

////////////////////////////////////////////  
// FLEXSLIDER
///////////////////////////////////////////
	
	function header() {
		var windowHeight = $(window).height();
		var slider = $("#sequence");
		slider.css("height",windowHeight+"px");

	}
	header();
	
	function footer() {
		var windowHeight = $(window).height();
		var full = $(".footer");
		full.css("height",windowHeight+"px");

	}
	footer();
	
	$(".footer-fixed").css({position:"fixed",left:($(window).width()-$(".footer-fixed").outerWidth())/2,top:($(window).height()-$(".footer-fixed").outerHeight())/2});
	
	$(window).resize(function(){
		header();
		footer();
	});
	

	/*$('#home-slider.flexslider').flexslider({						
			animation: "swing",
			direction: "vertical", 
			slideshow: false,
			slideshowSpeed: 3500,
			animationDuration: 1000,
			directionNav: false,
			controlNav: true,
			smootheHeight:true,
			after: function(slider) {
			  slider.removeClass('loading');
			}
				
	 });*/
	 
	 
	 if(jQuery().flexslider) {
		jQuery('.flexslider').flexslider({
			animation: 'fade',
			controlNav: true,
			slideshowSpeed: 8000,
			animationDuration: 300
		});	
	}
	
	
	 
 
////////////////////////////////////////////  
// COOLCAROUSEL
///////////////////////////////////////////
	
	//BLOG SLIDER
    var owl = $(".owl-demo.blog_slider");

    owl.owlCarousel({
		navigation: true,
		pagination: false,
		items : 5,
		itemsDesktop : [600,2]
	});
	
	
	
	jQuery('.owl-controls').addClass('container');
	
	
	
	/*function blogCarousel(){
		jQuery('.blog-carousel').each(function() {		
			jQuery(this).find('ul').carouFredSel({
				auto: {
					items: 1,
					duration        : 0.2, 
					timeoutDuration : 3000,
					pauseOnHover    : true,
					easing          : 'easeInOutBack',
				},
				prev : {
					button : jQuery(this).find('.tfs-nav-left'),
					key : "left",
					items : 1,
					duration : 750,
					easing          : 'easeInOutBack',
				},
				next : {
					button : jQuery(this).find('.tfs-nav-right'),
					key : "right",
					items : 1,
					duration : 750,
					easing          : 'easeInOutBack',
				},
				pagination  : "#foo2_pag",
				swipe : {
					onTouch     : true,
					onMouse     : true,
					options      : {
			        	excludedElements: "button, input, select, textarea, .noSwipe"	
			        }
				},
				width: '100%',
				height: 'variable',
				align: 'center',
			});
		});
	}
	
	
	if(jQuery().carouFredSel) {
		blogCarousel();
	}*/

	
	
	
	// the carousel
	var $carousel = null;
	
	//	the draggable wrapper
	var $wrapper = null;

	//	the width of one item
	var itemWidth = 870;

	//	the duration of the scrolling
	var scrollDuration = 300;

	//	dragging-engine
	var startDragPosition = false;
	function startDrag( event ) {
		event.preventDefault();

		if ( $carousel.triggerHandler( 'isScrolling' ) ) {
			startDragPosition = false;
			return;
		}
		startDragPosition = event.pageX;
		$wrapper.bind(
			'mousemove',
			function( e ) {
				$wrapper.css({
					'marginLeft': -(itemWidth + startDragPosition - e.pageX)
				});
			}
		);
	}
	function stopDrag( event ) {
		event.preventDefault();
		$wrapper.unbind('mousemove');

		if ( startDragPosition ) {
			var currentDragPosition = event.pageX;
			var direction = false;
			if ( startDragPosition < currentDragPosition ) {
				direction = 'prev';
			} else if ( startDragPosition > currentDragPosition ) {
				direction = 'next';
			}
			if ( direction ) {
				$carousel.trigger( direction );
				$wrapper.animate({
					'marginLeft': -itemWidth
				}, scrollDuration);
			}
		}
		startDragPosition = false;
	}

	$(function() {

		//	the carousel
		$carousel = $('#carousel');
		$carousel.carouFredSel({
			width: 870 * 3,
			align: false,
			items: {
				visible: 3,
				start: -1
			},
			scroll: {
				items: 1,
				duration: scrollDuration
			},
			
			auto: {
					items: 1,
					duration        : 1.5, 
					timeoutDuration : 3000,
					pauseOnHover    : true
				}
			
			/*timeoutDuration : 3000,
			auto: true*/
		});

		//	make the wrapper draggable
		$wrapper = $carousel.parent();
		$wrapper.css({
			'cursor': 'move',
			'marginLeft': -itemWidth
		});
		$wrapper.bind('mousedown', startDrag)
		$wrapper.bind('mouseup', stopDrag)
		$wrapper.bind('mouseleave', stopDrag);
	});
	
	

////////////////////////////////////////////  
// PORTFOLIO
///////////////////////////////////////////

	/* Portfolio: Isotope Layout Plugin
	-------------------------*/
	
	// Cache portfolio container
	var container = $('#portfolio-list');
	
	// Portfolio: Number of columns
	// 2 columns grid for mobile
	// 3 columns grid for tablet & desktop
	function portfolioColumnNumber() {
			if (windowWidth < 768) {
			var portfolioColumns = 2;
		}
		else if (windowWidth >= 768) {
			var portfolioColumns = 3;
		}
		return portfolioColumns;
	}
	
	// Initialize Isotope & Masonry Layout
	container.imagesLoaded( function() {
		container.isotope({
		  itemSelector: 'li',
		  resizable: false,  // disable normal resizing
		  masonry: { columnWidth: container.width() / portfolioColumnNumber }
		 });
	 });
	
	// Update portfolio layout when resizing the browser window
  $(window).smartresize(function() {

	  container.isotope({
	    masonry: { columnWidth: container.width() / portfolioColumnNumber }
	  });
	});
    
	$(window).smartresize();

	// Initialize Portfolio Filter (on click)
	$('#portfolio-filter a').click(function(e) {		
		e.preventDefault();	  
	  var selector = $(this).attr('data-filter');
	  container.isotope({ filter: selector });		
		// Active Filter Class
		$('#portfolio-filter').find('.active').removeClass('active');
		$(this).parent().addClass('active');		
		return false;		
	});
	
	// Portfolio Filter Item Counter
	/*$('#portfolio-filter a').each(function() {
		var projecttype = $(this).attr('data-filter');
		if ( projecttype == "*" || "" ) {
			$(this).append( '<span class="type-counter">'+$("#portfolio-list > li").length+'</span>' ); // Count All Projects
		}
		else {
			$(this).append( '<span class="type-counter">'+$("#portfolio-list > li"+projecttype).length+'</span>' ); // Count The Specific Project Type
		}
	});*/
	

	/* Portfolio
	-------------------------*/
	var portfolio = $('#portfolio-list');
	var portfolioItem = portfolio.find('li');
	var projectLength = portfolioItem.length;
	var prevButton = $('#project-container .prev');
	var nextButton = $('#project-container .next');
	
	// Direction Aware Hover Effect
	portfolio.find('li').each(function() { 
		$(this).hoverdir({
			speed : 			200,
			hoverDelay : 	100
		});
	});
	
	function projectFunctions() {
	
		$('[class^="slideshow"]').bxSlider({
			controls: 			true,
			pager: 					false,
			prevText: 			'<i class="icon-left-open"></i>',
		  nextText: 			'<i class="icon-right-open"></i>'
		});
		
		/* FitVids v1.0 - Fluid Width Video Embeds
			https://github.com/davatron5000/FitVids.js/
			-------------------------*/
			$('.video-full-width').fitVids();
			$('.fluid-width-video-wrapper').css('padding-top','56.25%'); // Always display videos 16:9 (100/16*9=56.25)
			
			$('#project-container .spinner').fadeOut(1000);
	};
	
	// Opening a Project
	portfolioItem.find('a').click(function(e) {
		e.preventDefault();
		
		// Show Loading Spinner
		$('#project-container .spinner').show(0);
		
		// Disable browser scrollbar
		$('body').addClass('overflow-hidden');
		
		var projectLink = $(this).attr('href');
		var projectOpen = portfolio.find(this).attr('href',projectLink).closest('li');
		
		// Add class "open" to opened project
		projectOpen.addClass('open');
		
		// Disable prev link, when first project is open
		if (projectOpen.index() == 0) {	prevButton.addClass('disabled'); }
		else { prevButton.attr('href', projectOpen.prev('li').find('.project-link').attr('href')); }
		
		// Disable next link, when last project is open
		if (projectOpen.index()+1 == projectLength) { nextButton.addClass('disabled'); }
		else { nextButton.attr('href', projectOpen.next('li').find('.project-link').attr('href')); }
		
		// Show project popup and load project content
		$('#project-container').addClass('show');
		
		$('.project-content').load('index.html '+projectLink, function() {				
			projectFunctions();			
		});
		
	});
	
	// Button: Previous Project
	$('.prev').click(function() {
	
		$('#project-container .spinner').show(200);
	
		var currentProject = portfolio.find('.open');
		var currentIndex = currentProject.index()+1;
		
		// Enable next button when going to the previous project
		$('.next').removeClass('disabled');
		
		// Disable prev button when reaching first project
		if (currentIndex <= 2) { $('.prev').addClass('disabled'); }		
		var prevProjectLink = currentProject.prev('li').find('a').attr('href');
		
		currentProject.removeClass('open').prev('li').addClass('open');
		
		$('.project-content').load('index.html '+prevProjectLink, function() {			
			projectFunctions();		
		});
		
	});
	
	// Button: Next Project
	$('.next').click(function() {
	
		$('#project-container .spinner').show(200);
		
		var currentProject = portfolio.find('.open');
		var currentIndex = currentProject.index()+1;
		
		// Enable prev button when going to the next project
		$('.prev').removeClass('disabled'); 
		
		// Disable next button when reaching the last project
		if ( currentIndex+1 >= projectLength ) { $('.next').addClass('disabled'); }		
		var nextProjectLink = currentProject.next('li').find('a').attr('href');		
		currentProject.removeClass('open').next('li').addClass('open');

		$('.project-content').load('index.html '+nextProjectLink, function() {		
			projectFunctions();
		});
		
	});
	
	// Close button
	$('.close').click(function() {
		// Enable browser scrollbar
		$('body').removeClass('overflow-hidden');
		$('#project-container').removeClass('show');
		portfolio.find('.open').removeClass('open');
	});
	
	// Close using "ESC" key
	$(document).keyup(function(e) {
    if (e.keyCode == 27) {
    	// Enable browser scrollbar
			$('body').removeClass('overflow-hidden');
      $('#project-container').removeClass('show');
      portfolio.find('.open').removeClass('open');
    }
	});
	
	/* Fluid Width Video Embeds: FitVids v1.0
	https://github.com/davatron5000/FitVids.js/
	-------------------------*/
	$('.video-full-width').fitVids();
	$('.fluid-width-video-wrapper').css('padding-top','56.25%'); // Always display videos 16:9 (100/16*9=56.25)


		
});





$(window).load(function() {

	
		/* Slideshow: BxSlider
	List with all slideshow options can be found here: http://bxslider.com/options
	-------------------------*/

	
	// Slideshow "horizontal"
	$('.slideshow').bxSlider({
		mode: 'horizontal',
		adaptiveHeight: true,
		controls: false,
		oneToOneTouch: false,
		onSlideAfter: function() {
			overlayHeight();
		}
	});
	
	$('.slideshow-fade-blog').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		controls: false,
		oneToOneTouch: false,
		onSlideAfter: function() {
			overlayHeight();
		}
	});

	// Slideshow "vertical"
	$('.slideshow-vertical').bxSlider({
		mode: 'vertical',
		adaptiveHeight: true,
		controls: false,
		oneToOneTouch: false,
		onSlideAfter: function() {
			overlayHeight();
		}
	});
	
	
});






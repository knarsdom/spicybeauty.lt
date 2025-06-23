/**
 * MuffinMenu 
 * 
 * Horizontal Multilevel Menu with WP MegaMenu Support 
 * 
 * 3.0 | Muffin Group
 */

(function( $ ){
	"use strict";
	
	$.fn.mfnMenu = function( options ){

		var menu = $(this);
		
		var defaults = {
			addLast		: false,
			arrows      : false,
			delay       : 100,
			hoverClass  : 'hover',
			mobileInit	: 768,
			responsive	: true
		};
		options = $.extend( defaults, options );
		
		
		var init = function(){
			
			// add '.submenu' class
			$( 'li:has(ul)', menu ).addClass( 'submenu' );
			
			// append mobile toggle button
			$( 'li:has(ul)', menu ).append( '<span class="menu-toggle"></span>' );
			
			// add '.mfn-megamenu-parent' class
			menu.children( 'li:has( ul.mfn-megamenu )' ).addClass( 'mfn-megamenu-parent' );	
			
			// add '.last-item' class
			$( '.submenu ul li:last-child', menu ).addClass( 'last-item' );
			
			// add '.last' class
			if( options.addLast ) {
				$( '> li:last-child', menu ).addClass( 'last' )
					.prev().addClass( 'last' );
			}
			
			// appand submenu arrows
			if( options.arrows ) {
				$( 'li ul li:has(ul) > a', menu ).append( '<i class="menu-arrow icon-right-open"></i>' );
			}

		};
		
		
		var doMenu = function(){

			if( ( $(window).width() >= options.mobileInit ) || ( ! options.responsive ) ){
				
				// desktop --------------------------------

				$( '> li, ul:not(.mfn-megamenu) li', menu ).hover(function() {
					
					$(this).stop(true,true).addClass( options.hoverClass );
					
					$(this).children( 'ul' ).stop(true,true).fadeIn( options.delay );
					
					
				}, function(){
					
					$(this).stop(true,true).removeClass( options.hoverClass );
					
					$(this).children( 'ul' ).stop(true,true).fadeOut( options.delay );	
					
				});
				
			} else {

				// mobile ---------------------------------
				
				$( 'li', menu ).unbind('hover');
				
				$( 'li > .menu-toggle', menu ).off('click').on('click', function(){
	
					var el = $(this).closest('li');
					
					if( el.hasClass( options.hoverClass ) ){
	
						el.removeClass( options.hoverClass )
							.children('ul').stop(true,true).fadeOut( options.delay );			
						
					} else {
		
						el.addClass( options.hoverClass )
							.children('ul').stop(true,true).fadeIn( options.delay );	
	
					}
					
				});
				
			}
			
		};
		

		$(window).bind( 'resize', doMenu );
		
		var __constructor = function(){
			init();
			doMenu();
		};
		
		__constructor();

	};

})(jQuery);
(function () {
    if (sessionStorage.getItem("noticeClosed")) return;
  
    const noticeBar = document.createElement("div");
    noticeBar.style.position = "relative";
    noticeBar.style.backgroundColor = "rgb(0, 140, 255)";
    noticeBar.style.color = "#ffffff";
    noticeBar.style.padding = "10px 20px";
    noticeBar.style.fontSize = "16px";
    noticeBar.style.textAlign = "center";
    noticeBar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    noticeBar.style.zIndex = "9999";
  
    // Message wrapper to center
    const messageWrapper = document.createElement("div");
    messageWrapper.innerHTML = "Buy this aged domain and original website togather (2 in 1) — now available at a highly affordable price on <a href='https://age.domains' target='_blank' style='color: inherit; text-decoration: underline;'>age.domains</a>!";
    messageWrapper.style.maxWidth = "100%";
    messageWrapper.style.margin = "0 auto";
    messageWrapper.style.display = "inline-block";
    
    noticeBar.appendChild(messageWrapper);
  
    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "50%";
    closeBtn.style.right = "-0.1%";
    closeBtn.style.transform = "translateY(-50%)";
    closeBtn.style.background = "none";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.color = "#ffffff";
    closeBtn.onclick = function () {
      noticeBar.remove();
      sessionStorage.setItem("noticeClosed", "true");
    };
  
    noticeBar.appendChild(closeBtn);
  
    window.addEventListener("DOMContentLoaded", function () {
      const masthead = document.getElementById("Top_bar");
      if (masthead && masthead.parentNode) {
        masthead.parentNode.insertBefore(noticeBar, masthead);
      } else {
        document.body.prepend(noticeBar);
      }
    });
  })();
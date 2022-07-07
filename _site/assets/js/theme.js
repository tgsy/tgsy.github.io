jQuery(document).ready(function($){

    // Smooth on external page
    $(function() {
      setTimeout(function() {
        if (location.hash) {
          /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
          window.scrollTo(0, 0);
          target = location.hash.split('#');
          smoothScrollTo($('#'+target[1]));
        }
      }, 1);

      // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          smoothScrollTo($(this.hash));
          return false;
        }
      });

      function smoothScrollTo(target) {
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
	
	
	// toggle comments
    $('.show-comments').on('click', function() {  
		$('#comments').toggleClass('comments--show');		
	});

	//toggle search
	$('.show-search').on('click', function() {  
		$('.bd-search').toggleClass('search--show');		
	});
    
    // spoilers
     $(document).on('click', '.spoiler', function() {
        $(this).removeClass('spoiler');
     });
    
 });   

// deferred style loading
var loadDeferredStyles = function () {
	var addStylesNode = document.getElementById("deferred-styles");
	var replacement = document.createElement("div");
	replacement.innerHTML = addStylesNode.textContent;
	document.body.appendChild(replacement);
	addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
if (raf) raf(function () {
	window.setTimeout(loadDeferredStyles, 0);
});
else window.addEventListener('load', loadDeferredStyles);


// Reset animations on page: body.preload
setTimeout(function(){
	document.body.className="";
},500);


// Hide navigation bar on scroll
// $(window).scroll(function(e) {

//     // add/remove class to navbar when scrolling to hide/show
//     var scroll = $(window).scrollTop();
//     if (scroll >= 150) {
//         $('.navbar').addClass("navbar-hide");
//     } else {
//         $('.navbar').removeClass("navbar-hide");
//     }

// });

// // Open/close navigation when clicked .nav-icon
// $(document).ready(function(){
// 	$('.nav-icon').click(function(){
// 		$('.nav-icon').toggleClass('active');
// 	});
// 	//ignore this section
// 	// $(".nav-icon").click(function(){
// 	// 	$("#menu").toggleClass('active');
// 	// });
// 	// $(".nav-icon").click(function(){
// 	// 	$("#blackover-nav").toggleClass('active');
// 	// });
// 	// $(".nav-icon").click(function(){
// 	// 	$("body").toggleClass('active-side');
// 	// });
// });

var navicon = $('.nav-icon');

navicon.on('click', function(e) {
	navicon.toggleClass('active');
});

// $(document).ready(function(){
// 	$(".nav-item").on("click", function() {
// 		console.log('clicked');
// 		$(".nav-item").removeClass("active");
// 		$(this).addClass("active");
// 	  });
// });


$(document).ready(function(){
	$('a').each(function(){

		// let windowUrl = window.location.href;
		// const windowUrlArray = windowUrl.split("/");
		// let loc = windowUrlArray[3];

		// var aboutUrl = "about"

		if ($(this).prop('href') == window.location.href) {
			// if (new String(loc).valueOf() == new String(aboutUrl).valueOf()) {
				$(this).addClass('active'); $(this).parents('li').addClass('active');
			//}
		}
	});
});


// Close navigation when clicked .blackover (Black background)
// $(document).ready(function(){
// 	$("#blackover-nav").click(function(){
// 		$(".nav-icon").removeClass('active');
// 	});
// 	$("#blackover-nav").click(function(){
// 		$("#menu").removeClass('active');
// 	});
// 	$("#blackover-nav").click(function(){
// 		$("#blackover-nav").removeClass('active');
// 	});
// 	$("#blackover-nav").click(function(){
// 		$("body").removeClass('active-side');
// 	});
// });

// Grid selector Inspiration
$(document).ready(function(){
	$(".grid-selector").click(function(){
		$(".grid-selector").toggleClass('active');
	});
	$(".grid-selector").click(function(){
		$(".post").toggleClass('active');
	});
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) { 
		$(".nav-icon").removeClass('active');
		// $("#menu").removeClass('active');
		// $("#blackover-nav").removeClass('active');
		// $("body").removeClass('active-side');
	}
});


// remove all :hover stylesheets on mobile
// function hasTouch() {
// return 'ontouchstart' in document.documentElement
// 		|| navigator.maxTouchPoints > 0
// 		|| navigator.msMaxTouchPoints > 0;
// }

// if (hasTouch()) { 
// 	try {
// 		for (var si in document.styleSheets) {
// 			var styleSheet = document.styleSheets[si];
// 			if (!styleSheet.rules) continue;

// 			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
// 				if (!styleSheet.rules[ri].selectorText) continue;

// 				if (styleSheet.rules[ri].selectorText.match(':hover')) {
// 					styleSheet.deleteRule(ri);
// 				}
// 			}
// 		}
// 	} catch (ex) {}
// }

//Scroll to Top Button
var btn = $('#back-to-top-button');

$(window).scroll(function() {
	if ($(window).scrollTop() > 150) {
	  btn.addClass('show');
	} else {
	  btn.removeClass('show');
	}
  });
  
btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, 300);
});


//Scroll to Works hero arrow
const arrow = document.getElementById('mouse-scroll-arrow');
arrow.addEventListener("click", scrollToFunction);

function scrollToFunction() {
	var element = document.getElementById("works");
	element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
}


  

// $(document).ready(function(){

//     //Check to see if the window is top if not then display button
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 300) {
//             $('.scroll-top').addClass('active');
//         } else {
//             $('.scroll-top').removeClass('active');
//         }
//     });

//     //Click event to scroll to top
//     $('.scroll-top').click(function(){
//         $('html, body').animate({scrollTop : 0},300);
//         return false;
//     });

// });


// DOCS

$(document).ready(function(){
    

     //Check to see if the back-menu is in the div
    $(window).scroll(function(){
        if ($(this).scrollTop() > 130) {
            $('.back-page-button-dark').removeClass('back-page-button-w');
        } else {
            $('.back-page-button-dark').addClass('back-page-button-w');
        }
    });


});

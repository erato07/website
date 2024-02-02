/*
	The7 by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(document).ready(function () {
	
	//Loader
	$(window).load(function () {
		$(".loader-overlay").fadeOut("slow");
	});

	// Header Changer on Scroll
	$(function () {
		//caches a jQuery object containing the header element
		var header = $(".header-home");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 100) {
				header.removeClass("header-home").addClass("header-default");
			} else {
				header.removeClass("header-default").addClass("header-home");
			}
		});
	});

	// Navigation
	$(".nav-container").onePageNav({
		scrollSpeed: 600,
		currentClass: "current",
		changeHash: true,
		filter: ":not(.external)"
	});

	//Header Class Change on Resize
	var $window = $(window);

	// Function to handle changes to style classes based on window width
	function checkWidth() {
		if ($window.width() < 767) {
			$("#top-header").removeClass("header-home").addClass("header-default");
		}

		if ($window.width() >= 767) {
			$("#top-header").removeClass("header-default").addClass("header-home");
		}
	}

	// Execute on load
	checkWidth();

	// Bind event listener
	$(window).resize(checkWidth);

});


$(document).ready(function () {

	$('#carousel-index').owlCarousel({
		loop: true,
		margin: 10,
		dots: true,
		nav: true,
		mouseDrag: true,
		autoplay: true,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	$('#carousel-sedes').owlCarousel({
		loop: true,
		margin: 20,
		dots: true,
		nav: true,
		mouseDrag: true,
		autoplay: true,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 5
			}
		}
	});

	$('.fa.fa-bars').click(function () {
		event.preventDefault();
		$('li.item-mm').toggleClass('active');
	});
	$('.link.dropdown').click(function () {
		event.preventDefault();
		$("a").on('click', function (event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 300, function () {

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});


});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	// Do something
	if (scroll > 0) {
		$('header').css('background', '#000000bc')
	}
});

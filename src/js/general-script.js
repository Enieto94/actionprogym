
$(document).ready(function () {

	$('.owl-carousel').owlCarousel({
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

	$('.fa.fa-bars').click(function () {
		event.preventDefault();
		$('li.item-mm').toggleClass('active');
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

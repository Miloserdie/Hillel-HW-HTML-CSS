

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active-burger');
		$('body').toggleClass('lock')
	});
});

$(window).on("scroll", function() {
	$('header').toggleClass("active-header", $(this).scrollTop() > $('header').height());
});
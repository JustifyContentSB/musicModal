$('.popup__manage-btn').on('click', function(event) {
	event.preventDefault();

	$('.popup__manage-btn').removeClass('active');
	$('.popup__chapter').removeClass('active');

	$(this).addClass('active');
	$($(this).attr('href')).addClass('active');
});

$('.forgot__btn').on('click', function(event) {
	event.preventDefault();

	$('.popup__chapter').removeClass('active');
	$($(this).attr('href')).addClass('active');
});
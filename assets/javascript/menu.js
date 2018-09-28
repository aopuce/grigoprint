$(function () {		
	$('#st-trigger-effects').click(function(event){
		event.preventDefault();
		toggleNav();
	});
});

function toggleNav() {
	if($('.st-container').hasClass('st-menu-open')) {
		$('.st-container').removeClass('st-menu-open');
		$('#icon-products').removeClass('grigo-close');
		$('#icon-products').addClass('grigo-hamburger');

	} else {
		$('.st-container').addClass('st-menu-open');
		$('#icon-products').addClass('grigo-close');
		$('#icon-products').removeClass('grigo-hamburger');
	};
}
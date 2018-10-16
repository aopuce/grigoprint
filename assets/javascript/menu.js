$(function () {		
	$('#st-trigger-effects').click(function(e){
		e.preventDefault();
		toggleNav();
		e.stopPropagation();
	});
});
$(function () {		
	$('#close-menu-trigger').click(function(e){
		e.preventDefault();
		toggleNav();
		e.stopPropagation();
	});
});

$('.st-pusher').click(function(e) {
	var container = $('#menu');
	if($('.st-container').hasClass('st-menu-open')){
		if ($(e.target).parents("#menu")) {
			e.preventDefault();
			removeNav();
		}
	}
})


$(function () {
	$('.switch-container').click(function(e){
		e.preventDefault();
		menuChange();
	});
});
function removeNav () {
	if($('.st-container').hasClass('st-menu-open')) {
		$('.st-container').removeClass('st-menu-open');
		$('#icon-products').removeClass('grigo-close');
		$('#icon-products').addClass('grigo-hamburger');

	}
}
function toggleNav() {
	if($('.st-container').hasClass('st-menu-open')) {
		$('.st-container').removeClass('st-menu-open');
		$('#icon-products').removeClass('grigo-close');
		$('#icon-products').addClass('grigo-hamburger');

	} else {
		$('.st-container').addClass('st-menu-open');
		$('#icon-products').addClass('grigo-close');
		$('#icon-products').removeClass('grigo-hamburger');
	}

}

function menuChange() {
	if($('#menu').hasClass('on-products')) {
		$('#menu').removeClass('on-products')
	} else {
		$('#menu').addClass('on-products')
	}
}

$(function() {
	$('#kits').click(function(e){
		e.preventDefault();
		menuKits();
	});
});

$(function() {
	$('#prodotti').click(function(e){
		e.preventDefault();
		menuProdotti();
	});
});

function menuKits () {
	if($('#menu').hasClass('on-products')) {
		$('#menu').removeClass('on-products')
	}
}

function menuProdotti () {
	if(!$('#menu').hasClass('on-products')) {
		$('#menu').addClass('on-products')
	}
}


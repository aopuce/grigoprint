var button = document.getElementById('call-menu'),
	dest = document.getElementById('add-class').classList,
//cambio icona
	icon = document.getElementById('icon-products').classList,
//selezione kit o prodotti
	selector = document.getElementById('select'),
	navContainer = document.getElementById('nav-commander').classList,
	container = document.getElementById('container'),
//gestione animazione header
	scrollContainer = document.getElementById('scroll-sobstitute'),
	header = document.getElementById("header"),
//scrollbars
	instances = OverlayScrollbars(document.getElementsByClassName('scroller'), {
	scrollbars: {
			visibility: "auto",
			autoHide: "scroll",
	}
}),
	scrollInfoY = instances[0].scroll().position.y;

var toggleClass = function(key, classes) {
	if (key.contains(classes)) {
		key.remove(classes);
	} else {
		key.add(classes);
	}
}

var closeMenu = function(whereClick) {
	whereClick.addEventListener('click', function(event) {
		toggleClass(dest, "opened");
		toggleClass(icon, "grigo-close");
		toggleClass(icon, "grigo-hamburger");
	});
}

closeMenu(button);
closeMenu(container);

instances[0].options("callbacks.onScroll", function (){
	scrollInfoY = instances[0].scroll().position.y;
	if (scrollInfoY> 50) {
		header.classList.add('header_scroll');
	} else {
		header.classList.remove('header_scroll');
	}
});

header.addEventListener("mouseover", function(e){
	if (header.classList.contains("header_scroll") || (dest.contains("opened"))) {
		this.classList.remove("header_scroll");
	}
	e.preventDefault();
})

header.addEventListener("mouseout", function(e){
	if (header.classList.contains("header_scroll") == false && (dest.contains("opened")) == false &&  scrollInfoY > 50) {
		this.classList.add("header_scroll");
	}
})

selector.onclick = function () {
	toggleClass(navContainer, "switching");
}

// $(function () {		
// 	$('#st-trigger-effects').click(function(e){
// 		e.preventDefault();
// 		toggleNav();
// 		e.stopPropagation();
// 	});
// });
// $(function () {		
// 	$('#close-menu-trigger').click(function(e){
// 		e.preventDefault();
// 		toggleNav();
// 		e.stopPropagation();
// 	});
// });

// $('.st-pusher').click(function(e) {
// 	var container = $('#menu');
// 	if($('.st-container').hasClass('st-menu-open')){
// 		if ($(e.target).parents("#menu")) {
// 			e.preventDefault();
// 			removeNav();
// 		}
// 	}
// })


// $(function () {
// 	$('.switch-container').click(function(e){
// 		e.preventDefault();
// 		menuChange();
// 	});
// });
// function removeNav () {
// 	if($('.st-container').hasClass('st-menu-open')) {
// 		$('.st-container').removeClass('st-menu-open');
// 		$('#icon-products').removeClass('grigo-close');
// 		$('#icon-products').addClass('grigo-hamburger');

// 	}
// }
// function toggleNav() {
// 	if($('.st-container').hasClass('st-menu-open')) {
// 		$('.st-container').removeClass('st-menu-open');
// 		$('#icon-products').removeClass('grigo-close');
// 		$('#icon-products').addClass('grigo-hamburger');

// 	} else {
// 		$('.st-container').addClass('st-menu-open');
// 		$('#icon-products').addClass('grigo-close');
// 		$('#icon-products').removeClass('grigo-hamburger');
// 	}

// }

// function menuChange() {
// 	if($('#menu').hasClass('on-products')) {
// 		$('#menu').removeClass('on-products')
// 	} else {
// 		$('#menu').addClass('on-products')
// 	}
// }

// $(function() {
// 	$('#kits').click(function(e){
// 		e.preventDefault();
// 		menuKits();
// 	});
// });

// $(function() {
// 	$('#prodotti').click(function(e){
// 		e.preventDefault();
// 		menuProdotti();
// 	});
// });

// function menuKits () {
// 	if($('#menu').hasClass('on-products')) {
// 		$('#menu').removeClass('on-products')
// 	}
// }

// function menuProdotti () {
// 	if(!$('#menu').hasClass('on-products')) {
// 		$('#menu').addClass('on-products')
// 	}
// }


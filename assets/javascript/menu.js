// jshint esversion: 6
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
	docscroll = 0,
	// iDevices = [
	// 'iPad Simulator',
	// 'iPhone Simulator',
 //    'iPod Simulator',
 //    'iPad',
 //    'iPhone',
 //    'iPod'
	// ],
	// is_ios = false,
	container_gray = document.getElementById('container'),
    social_container = document.getElementById('social-trigger-container').classList,
    social_button = document.getElementById('st-trigger-social'),
    icon_social = document.getElementById('icon-social').classList;
    // inputSelected = document.getElementsByClassName('prezzo_select');
const scrollElems = document.querySelectorAll('.product-content');
window.onload = (event) => {
	document.documentElement.style.scrollBehavior = 'smooth';
}
//scrollbars
// 	instances = OverlayScrollbars(document.getElementsByClassName('scroller'), {
// 	scrollbars: {
// 			visibility: "auto",
// 			autoHide: "scroll",
// 	}
// }),
// 	scrollInfoY = instances[0].scroll().position.y;

var toggleClass = function(key, classes) {
	if (key.contains(classes)) {
		key.remove(classes);
	} else {
		key.add(classes);
	}
};
// var setScroll = function(pos) {
// 	window.scroll(0, pos);
// 	console.log(pos);
// }
let scroll = 0;
let scrollY = 0;
const body = document.body;
const showMenu = () => {
	if (document.getElementById('nav-commander').classList.contains('opened')) {
		body.style.position = '';
		body.style.top = '';	
		window.scrollTo(0, parseInt(scrollY)) ;
		document.documentElement.style.scrollBehavior = 'smooth';
		console.log(scrollY);
		document.getElementById('nav-commander').classList.remove('opened');
	} else {
		document.getElementById('nav-commander').classList.add('opened');
		body.style.position = 'fixed';
		body.style.top = scroll * -1 + 'px';
		document.documentElement.style.scrollBehavior = '';
		console.log(scroll);
		scrollY = scroll;
	}
}
window.addEventListener('scroll', () => {
	scroll = window.scrollY;
} )

const toForm = document.getElementById('clickform');
const formDest = document.getElementById('form');

// toForm.addEventListener('click', () => {
// 	window.scrollTo({
// 		left: 0,
// 		top: parseInt(formDest.offsetTop),
// 		behavior: 'smooth'
// 	});
// })
// var closeMenu = function(whereClick) {
// 	whereClick.addEventListener('click', function(event) {
		
// 		if((document.documentElement && document.documentElement.scrollTop) || 
//               document.body.scrollTop > 0){
// 			docscroll = window.pageYOffset || document.documentElement || document.body.parentNode || document.body.scrollTop;
// 		// 	scrollContainer.style.top = '-' + docscroll + 'px';
			
// 		// } else {
// 		// 	scrollContainer.removeAttribute("style");
// 		}
// 		if (!(dest.contains("opened"))) {
// 			container_gray.addEventListener('wheel', function (e) {
// 				e.preventDefault();
// 			}, {passive: false});
// 			container_gray.addEventListener('touchmove', function (e) {
// 				e.preventDefault();
// 			}, {passive: false});
// 		} else {
// 			container_gray.removeEventListener('wheel', function (e) {
// 				e.preventDefault();
// 			}, {passive: false});
// 			container_gray.removeEventListener('touchmove', function (e) {
// 				e.preventDefault();
// 			}, {passive: false});
// 		}
// 		toggleClass(dest, "opened");
// 		toggleClass(icon, "grigo-close");
// 		toggleClass(icon, "grigo-hamburger");

// 		// //window.scroll(0, docscroll);	
// 		// // window.scrollTo(0, docscroll);	
// 		//window.setTimeout(function() {window.scrollTo(0, docscroll);}, 0);
// 		event.preventDefault();
// 	});
// };

// document.addEventListener('touchmove', function(e){
// 	e.preventDefault();


// }, {passive: false})

var social_open = function(whereClick1) {
    whereClick1.addEventListener('click', function(e) {
        toggleClass(social_container, 'social-open');
        toggleClass(icon_social, 'grigo-close');
        toggleClass(icon_social, 'grigo-social');
        e.preventDefault();
    });
};
// closeMenu(button);
// closeMenu(container);
social_open(social_button);

// instances[0].options("callbacks.onScroll", function (){
// 	scrollInfoY = instances[0].scroll().position.y;
// 	if (scrollInfoY> 50) {
// 		header.classList.add('header_scroll');
// 	} else {
// 		header.classList.remove('header_scroll');
// 	}
// });
	var prevScrollPos = window.pageYOffset;
// var scrollPosDef = 0, scrollDown = false, scrollUp = false;
// var offsetHeader = document.getElementById('full-page-header').offsetHeight;
// var article = document.getElementById('scroller');
// var startPage = document.getElementById('page-content');
// window.onresize = function() {
// 	offsetHeader = document.getElementById('full-page-header').offsetHeight;
// };
// var executed = 0;
// var scrollDown = function() {
// 	console.log("sono in scrollDown");
// 	article.scrollIntoView({ 
// 	  	behavior: 'smooth' 
// 	});

// };
// var scrollUp = function() {
// 	startPage.scrollIntoView({ 
// 		behavior: 'smooth' 
// 	});
// };


var fullH = document.getElementById('full-page-header');
var fullHCont;

// function setHeight() {
// 	if (fullH != null){
// 		if (window.innerHeight < 825 && window.innerWidth <= 480) {
// 			fullH.style.minHeight = window.innerHeight - 50+ "px";
// 			fullH.style.height = window.innerHeight -50 + "px";
// 		} else if (window.innerWidth < 825 && window.innerHeight <= 480) {
// 			if (!fullH.classList.contains('jumbotron')) {
// 				fullH.style.minHeight = window.innerHeight  + "px";
// 				fullH.style.height = window.innerHeight + "px";
// 			} else {
// 				fullH.style.minHeight = window.innerHeight * 2 + "px";
// 				fullH.style.height = window.innerHeight * 2 + "px";
// 			}
// 		} else {
// 			fullH.style.minHeight = window.innerHeight  + "px";
// 			fullH.style.height = window.innerHeight  + "px";
// 		}
// 	}
// }

// window.onload = setHeight();

// window.addEventListener("resize", setHeight);

window.onscroll = function() {
	var st = window.pageYOffset || document.documentElement.scrollTop;
    var currentScrollPos = window.pageYOffset;
    // console.log("st= ", st, " prevScrollPos= ", prevScrollPos, " executed= ", executed);
    if(window.pageYOffset > 200){
        header.classList.add("header_hover");
    } else if(header.classList.contains("header_hover")) {
        header.classList.remove("header_hover");
    }
    if(!(dest.contains("opened"))) {
        if (prevScrollPos > currentScrollPos) {
            if (header.classList.contains('header_scroll')) {
                header.classList.remove("header_scroll");
            }
        } else {
            header.classList.add("header_scroll");
        
        }
    }
    prevScrollPos = currentScrollPos;
};

function reset(e) {
    if(window.pageYOffset < 50 && header.classList.contains("header_hover") && !(dest.contains("opened"))) {
        header.classList.remove("header_hover");
    }
}

header.addEventListener("mouseover", function(e){
	if (!(header.classList.contains("header_hover")) || !(dest.contains("opened"))) {
		this.classList.add("header_hover");
	}
	e.preventDefault();
});

header.addEventListener("mouseout", function(e){
	if ((header.classList.contains("header_hover")  &&  document.documentElement.scrollTop <= 50 ) || dest.contains("opened")) {
		this.classList.remove("header_hover");
	}
	e.preventDefault();
});


// function addEventListener(el, eventType, handler) {
// 	if (el.addEventListener) {
// 		el.addEventListener(eventType, handler, false);
// 	} else if (elem.attachEvent) {
// 		elm.attachEvent ('on' + eventType, handler);
// 	}
// }

// addEventListener(document, 'DOMContentLoaded', function() {

// })
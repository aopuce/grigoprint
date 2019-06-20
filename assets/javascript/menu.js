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
	container_gray = document.getElementById('container');

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
}
// var setScroll = function(pos) {
// 	window.scroll(0, pos);
// 	console.log(pos);
// }


var closeMenu = function(whereClick) {
	whereClick.addEventListener('click', function(event) {
		
		if((document.documentElement && document.documentElement.scrollTop) || 
              document.body.scrollTop > 0){
			docscroll = window.pageYOffset || document.documentElement || document.body.parentNode || document.body.scrollTop;
		// 	scrollContainer.style.top = '-' + docscroll + 'px';
			
		// } else {
		// 	scrollContainer.removeAttribute("style");
		}
		if (!(dest.contains("opened"))) {
			container_gray.addEventListener('wheel', function (e) {
				e.preventDefault();
			}, {passive: false});
			container_gray.addEventListener('touchmove', function (e) {
				e.preventDefault();
			}, {passive: false});
		} else {
			container_gray.removeEventListener('wheel', function (e) {
				e.preventDefault();
			}, {passive: false});
			container_gray.removeEventListener('touchmove', function (e) {
				e.preventDefault();
			}, {passive: false});
		}
		toggleClass(dest, "opened");
		toggleClass(icon, "grigo-close");
		toggleClass(icon, "grigo-hamburger");
		// //window.scroll(0, docscroll);	
		// // window.scrollTo(0, docscroll);	
		//window.setTimeout(function() {window.scrollTo(0, docscroll);}, 0);
		event.preventDefault();
	});
}

// document.addEventListener('touchmove', function(e){
// 	e.preventDefault();


// }, {passive: false})

closeMenu(button);
closeMenu(container);

// instances[0].options("callbacks.onScroll", function (){
// 	scrollInfoY = instances[0].scroll().position.y;
// 	if (scrollInfoY> 50) {
// 		header.classList.add('header_scroll');
// 	} else {
// 		header.classList.remove('header_scroll');
// 	}
// });

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("header_scroll");
  } else {
    header.classList.remove("header_scroll");
  }
}

header.addEventListener("mouseover", function(e){
	if (!(header.classList.contains("header_scroll")) || !(dest.contains("opened"))) {
		this.classList.add("header_scroll");
	}
	e.preventDefault();
});

header.addEventListener("mouseout", function(e){
	if ((header.classList.contains("header_scroll")  &&  document.documentElement.scrollTop <= 50 ) || dest.contains("opened")) {
		this.classList.remove("header_scroll");
	}
	e.preventDefault();
});

// selector.onclick = function () {
// 	toggleClass(navContainer, "switching");
// }; switcher!!!!!!!!!!!!!

(function (w, d) {
    "use strict";

    if (typeof String.prototype.startsWith !== "function") {
        String.prototype.startsWith = function (str) {
            return this.slice(0, str.length) === str;
        };
    }

    var VanillaSlider = function () {
        this.readySet;
        this.intervalElement;
    };

    VanillaSlider.prototype.timeInterval = 4000;
    VanillaSlider.prototype.containerId = "vs-container";
    VanillaSlider.prototype.startAt = 0;
    VanillaSlider.prototype.domReady = false;
    VanillaSlider.prototype.iterable = "img";

    VanillaSlider.prototype.set = function (customOptions) {
        var options = {},
            self = this,
            sliderContainer,
            sliderElements,
            currentImage,
            resetImage;

        if (typeof customOptions !== "object") {
            customOptions = {};
        }

        options.timeInterval = customOptions.timeInterval || self.timeInterval;
        options.containerId = customOptions.containerId || self.containerId;
        options.startAt = customOptions.startAt || self.startAt;
        options.before = customOptions.before || null;
        options.after = customOptions.after || null;
        options.iterable = customOptions.iterable || self.iterable;

        if (!self.domReady) {
            self.readySet = function () { self.set(options); };
            return;
        }

        if (self.intervalElement) {
            clearInterval(self.intervalElement);
            self.intervalElement = null;
        }

        sliderContainer = d.getElementById(options.containerId);
        if (options.iterable.startsWith(".")) {
            sliderElements = sliderContainer.getElementsByClassName(options.iterable.replace(".", ""));
        } else {
            sliderElements = sliderContainer.getElementsByTagName(options.iterable);
        }
        if (!!sliderElements.length) {
            currentImage = options.startAt;
            resetImage = function (setToImage) {
                if ((sliderElements.length - 1) < setToImage || setToImage < 0) {
                    return;
                }

                if (!!options.before) {
                    options.before(sliderElements[currentImage]);
                }

                /*jshint -W081 */
                for (var i = 0, max = sliderElements.length; i < max; i += 1) {
                    if (i === setToImage) {
                        continue;
                    }
                    sliderElements[i].style.display = "none";
                }
                /*jshint +W081 */

                sliderElements[setToImage].style.display = "block";
                currentImage = setToImage;

                if (!!options.after) {
                    options.after(sliderElements[currentImage]);
                }
            };
            resetImage(currentImage);
            self.intervalElement = setInterval(function () {
                var nextImage = currentImage + 1 >= sliderElements.length ? 0 : currentImage + 1;
                resetImage(nextImage);
            }, options.timeInterval);
        }
        else {
            console.error("Vanilla-slider: Warning: There are no images to slide.");
        }
    };

    VanillaSlider.prototype.domIsReady = function () {
        this.domReady = true;
        if (this.readySet) {
            this.readySet(); /* GO! */
        }
    };

    w.VanillaSlider = new VanillaSlider();
    w.vs = w.VanillaSlider;

    if (d.addEventListener) {
        d.addEventListener("DOMContentLoaded", function evnt() {
            d.removeEventListener("DOMContentLoaded", evnt, false);
            w.VanillaSlider.domIsReady();
        }, false);
    } else if (d.attachEvent) {
        d.attachEvent("onreadystatechange", function evnt() {
            if (d.readyState === "complete") {
                d.detachEvent("onreadystatechange", evnt);
                w.VanillaSlider.domIsReady();
            }
        });
    }
})(window, document);

vs.set({
	containerId: 'my-slider',
	iterable: '.image'
});
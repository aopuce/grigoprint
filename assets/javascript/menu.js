// jshint esversion: 6

const button = document.getElementById('st-trigger-effects')
const dest = document.getElementById('add-class').classList
// cambio icona
const icon = document.getElementById('icon-products')
// selezione kit o prodotti
// const selector = document.getElementById('select')
const navContainer = document.getElementById('nav-commander')
// const container = document.getElementById('container')
// gestione animazione header
// const scrollContainer = document.getElementById('scroll-sobstitute')
const header = document.getElementById('header')
// const docscroll = 0
// const container_gray = document.getElementById('container')
const socialContainer = document.getElementById('social-trigger-container')
	.classList
const socialButton = document.getElementById('st-trigger-social')
const iconSocial = document.getElementById('icon-social').classList
// inputSelected = document.getElementsByClassName('prezzo_select');
// const scrollElems = document.querySelectorAll('.product-content');
// Gestione degli elementi forum dopo il click
const cardErrore = document.getElementById('errore') || ""
const cardSuccesso = document.getElementById('successo') || ""
// const cardBtn = document.querySelectorAll('.card .btn') || ""

// Aggiungo eventi su cardBtn
// Tutto si basa su fatto di aggiungere la classe
// hidden e, una volta finita la transizione
// nasconderla


// for (let i = 0; i < cardBtn.length; i++) {
// 	const hiddingCard = cardBtn[i].parentElement;
// 	if (!(hiddingCard.classList.contains('hidden'))) {
// 		cardBtn[i].addEventListener('click', function () {
// 			console.log(hiddingCard)
// 			hiddingCard.classList.add('hidden')
// 			hiddingCard.addEventListener('transitionend', () => {
// 				hiddingCard.style.display = 'none'
// 			})
// 		})
// 	}
// }

// funzione per rendere visibile le card di successo o di errore
// richiamarla con showRsponse(card) dove card è una delle due card di
// risposta, successo o errore
const showResponse = (card) => {
	card.style.display = 'block'
	card.classList.remove('hidden')
	// card.getElementsByClassName('btn')[0].addEventListener('click', hideResponse(card))
	card.querySelector('.btn').addEventListener('click', () => {hideResponse(card)})
	if (card === cardSuccesso) {
		console.log(card.querySelector('.btn').children[0])

		card.querySelector('.btn').children[0].style.animation = 'offsetfull 5s linear forwards'
	}
}

// funzione per nascondere le card
const hideResponse = (card) => {
	card.classList.add('hidden')
	card.addEventListener('transitionend', () => {
		card.style.display = 'none'
	})
}



window.onload = () => {
	document.documentElement.style.scrollBehavior = 'smooth'
}

var toggleClass = function (key, classes) {
	if (key.contains(classes)) {
		key.remove(classes)
	} else {
		key.add(classes)
	}
}

let scroll = 0
let scrollY = 0
const body = document.body
const closeMenu = () => {
	body.style.position = ''
	body.style.top = ''
	window.scrollTo(0, parseInt(scrollY))
	document.documentElement.style.scrollBehavior = 'smooth'
	document.getElementById('nav-commander').classList.remove('opened')
	toggleClass(icon.classList, 'grigo-close')
	toggleClass(icon.classList, 'grigo-hamburger')
}
const showMenu = () => {
	navContainer.classList.add('opened')
	body.style.position = 'fixed'
	body.style.top = scroll * -1 + 'px'
	document.documentElement.style.scrollBehavior = ''
	scrollY = scroll
	toggleClass(icon.classList, 'grigo-hamburger')
	toggleClass(icon.classList, 'grigo-close')
}

button.addEventListener('click', (e) => {
	navContainer.classList.contains('opened') ? closeMenu() : showMenu()
	e.stopPropagation()
})

window.addEventListener('click', (e) => {
	if (e.target !== button && navContainer.classList.contains('opened')) {
		closeMenu()
	}
})

window.addEventListener('scroll', () => {
	scroll = window.scrollY
})
// const toForm = document.getElementById('clickform')
// const formDest = document.getElementById('form')

var socialOpen = function (whereClick1) {
	whereClick1.addEventListener('click', function (e) {
		toggleClass(socialContainer, 'social-open')
		toggleClass(iconSocial, 'grigo-close')
		toggleClass(iconSocial, 'grigo-social')
		e.preventDefault()
	})
}

socialOpen(socialButton)

const prevScrollPos = window.pageYOffset
const w = window.innerWidth

// window.onscroll = function () {
// 	// var st = window.pageYOffset || document.documentElement.scrollTop
// 	const currentScrollPos = window.pageYOffset
// 	// console.log('st= ', st, ' prevScrollPos= ', prevScrollPos, ' executed= ', executed);
// 	if (window.pageYOffset > 200 && w < 640) {
// 		header.classList.add('header_hover')
// 	} else if (header.classList.contains('header_hover')) {
// 		header.classList.remove('header_hover')
// 	}
// 	if (!dest.contains('opened')) {
// 		if (prevScrollPos > currentScrollPos) {
// 			if (header.classList.contains('header_scroll')) {
// 				header.classList.remove('header_scroll')
// 			}
// 		} else {
// 			header.classList.add('header_scroll')
// 		}
// 	}
// 	prevScrollPos = currentScrollPos
// }

// const reset = () => {
// 	header.classList.remove('header_hover')
// }

// if (
// 	window.pageYOffset < 50 &&
// 	header.classList.contains('header_hover') &&
// 	!dest.contains('opened')
// ) {
// 	reset()
// }

// header.addEventListener('mouseover', function (e) {
// 	if (!header.classList.contains('header_hover') || !dest.contains('opened')) {
// 		this.classList.add('header_hover')
// 	}
// 	e.preventDefault()
// })

// header.addEventListener('mouseout', function (e) {
// 	if (
// 		(header.classList.contains('header_hover') &&
// 			document.documentElement.scrollTop <= 50) ||
// 		dest.contains('opened')
// 	) {
// 		this.classList.remove('header_hover')
// 	}
// 	e.preventDefault()
// })

// accordition
const btnCollapse = document.getElementsByClassName('btn-collapse')
if (btnCollapse[0] !== undefined) {
	for (let i = 0; i < btnCollapse.length; i++) {
		btnCollapse[i].addEventListener('click', function () {
			this.classList.toggle('active')
			const content = document.getElementById(this.dataset.target)
			if (content.style.maxHeight) {
				content.style.maxHeight = null
			} else {
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	}
}

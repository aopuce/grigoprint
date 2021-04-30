// jshint esversion: 6
// var readySite;
//
// document.addEventListener('DOMContentLoaded', () => {
//   if (document.readySite === 'complete') {
//     readySite = 'ready';
//   }
//
// });

// Nascondo menu su schermo
window.mobileCheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check; }
const mobileToggle = () => {
	if (window.mobileCheck()) {
		// console.log(window.mobileCheck())
		if(document.querySelector('#pricelist')){
		document.querySelector('#pricelist').remove()}
	}
}
mobileToggle()
function navToggle() {
	if (window.mobileCheck()) {
		document.getElementById('header').classList.toggle('focus')
	}
}

const url2get = '/send_mail.php'
let campiPreventivoInvalidi

const formTag = {
	name: {
		need: true,
		touch: false,
		i: 0,
		input: 'input',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	},
	company: {
		need: true,
		touch: false,
		i: 1,
		input: 'input',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	},
	telephone: {
		need: true,
		touch: false,
		i: 2,
		input: 'input',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	},
	email: {
		need: true,
		touch: false,
		i: 3,
		input: 'input',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	},
	message: {
		need: true,
		touch: false,
		i: 4,
		input: 'textarea',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	},
	agree: {
		need: true,
		touch: false,
		i: 5,
		input: 'input',
		defVal: false,
		evt: ['change']
	},
	modello: {
		need: false,
		touch: false,
		i: 6,
		input: 'select',
		defVal: '',
		evt: ['change'],
		bottoni: true
	},
	tessuto: {
		need: false,
		touch: false,
		i: 7,
		input: 'select',
		defVal: '',
		evt: ['change', 'click']
	},
	altezza: {
		need: false,
		touch: false,
		i: 8,
		input: 'input',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	},
	larghezza: {
		need: false,
		touch: false,
		i: 9,
		input: 'input',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	},
	misura: {
		need: false,
		touch: false,
		i: 10,
		input: 'select',
		defVal: '',
		evt: ['change', 'click']
	},
	struttura: {
		need: false,
		touch: false,
		i: 11,
		input: 'select',
		defVal: '',
		evt: ['change', 'click']
	},
	finitura: {
		need: false,
		touch: false,
		i: 12,
		input: 'select',
		defVal: '',
		evt: ['change', 'click']
	},
	base: {
		need: false,
		touch: false,
		i: 13,
		input: 'select',
		defVal: '',
		evt: ['change', 'click']
	},
	borsa: {
		need: false,
		touch: false,
		i: 14,
		input: 'input',
		defVal: false,
		evt: ['change']
	},
	spedizione: {
		need: false,
		touch: false,
		i: 15,
		input: 'select',
		defVal: '',
		evt: ['change', 'click']
	},
	quantita: {
		need: false,
		touch: false,
		i: 16,
		input: 'input',
		defVal: '',
		evt: ['keyup', 'cut', 'paste', 'change']
	}
}

// form classico
function clearInvalid() {
	var id = this.parentElement.id || this.parentElement.parentElement.id
	formTag[id].touch = true
	if (formTag[id].need) {
		document.getElementById(id).classList.remove('invalid')
		clearSendButton()
	} else {
		document.getElementById(id).classList.remove('warn')
		document.getElementById(id).classList.remove('warning') // input saltato
		// calcola prezzo
		calcolaPrezzo(id)
	}
}

function clearAllInputError() {
	var temp
	for (var key in formTag) {
		temp = document.getElementById(key)
		if (temp) {
			if (formTag[key].need) {
				temp.classList.remove('invalid')
			} else {
				temp.classList.remove('warn')
			}
		}
	}
}

function clearAllInputData() {
	for (var key in formTag) {
		var temp = document.getElementById(key)
		if (temp) {
			if (typeof formTag[key].defVal === 'boolean') {
				temp.getElementsByTagName(formTag[key].input)[0].checked =
					formTag[key].defVal
			} else {
				temp.getElementsByTagName(formTag[key].input)[0].value =
					formTag[key].defVal
			}
		}
		scriviPrezzo(
			'Inserisci dati',
			'Compila i campi per generare il tuo preventivo'
		)
	}
}
function clearSendButton() {
	var btnSend = document.getElementById('btn-send')
	if (!btnSend.classList.contains('standard')) {
		btnSend.classList.remove('onclick')
		btnSend.classList.remove('validate')
		btnSend.classList.remove('error')
		btnSend.classList.add('standard')
	}
}

function eventLoading() {
	for (var key in formTag) {
		var temp = document.getElementById(key)
		if (temp) {
			if (formTag[key].bottoni) {
				// tagg select che potrebbe funzionare a bottoni
				var temp2 = temp.getElementsByTagName('a')
				for (var i of temp2) {
					i.addEventListener('click', selezionaElementoEvt)
					i.addEventListener('click', addClickedToPrezzo)
				}
				temp2 = temp.getElementsByTagName(formTag[key].input)[0].value
				if (temp2 !== '') selezionaElemento(key)
			}
			// console.log(key+' '+formTag[key].input);
			temp = temp.getElementsByTagName(formTag[key].input)[0]
			// aggiungo eventi default
			for (const i in formTag[key].evt) {
				temp.addEventListener(formTag[key].evt[i], clearInvalid)
				// aggiungo eccezione altezza e larghezza
				if (key === 'larghezza' || key === 'altezza') {
					// se esiste modello, scelgo personalizzato
					if (document.getElementById('modello')) {
						temp.addEventListener(formTag[key].evt[i], function () {
							document
								.getElementById('modello')
								.getElementsByTagName(formTag[key].input).value = 'tapp'
							deselezionaGruppo('modello')
							document
								.getElementById('modello')
								.querySelectorAll('[data-options="tapp"]')[0]
								.classList.add('selected')
						})
					}
				}
			}
			// focus e lostfocus per nascondere menu nei cellulari
			if (
				(formTag[key].input === 'input' &&
					typeof formTag[key].defVal !== 'boolean') ||
				formTag[key].input === 'textarea'
			) {
				temp.addEventListener('focus', navToggle)
				temp.addEventListener('blur', navToggle)
				temp.addEventListener('focus', addClickedToPrezzo)
			}
		}
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', eventLoading)
} else {
	eventLoading()
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

function sendMail() {
	var btnSend = document.getElementById('btn-send')
	btnSend.classList.remove('standard')
	btnSend.classList.remove('error')
	btnSend.classList.remove('validate')
	btnSend.classList.add('onclick')

	var form = document.querySelector('form')
	var data = new FormData(form)
	data.append('prodotto', window.document.title.split('|')[1].trim())

	var req
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest()
	} else if (window.ActiveXObject) {
		req = new ActiveXObject('Microsoft.XMLHTTP')
	}
	if (req !== undefined) {
		req.onload = async function (e) {
			if (req.readyState === 4) {
				if (req.status === 200) {
					// RISPOSTA CORRETTA
					var respJSON = req.responseText
					// await sleep(200);
					if (typeof respJSON === 'string') {
						// alert('Json: '+respJSON);
						var resp = JSON.parse(respJSON)
						// alert('json decodificato: '+resp);
						if (resp.form_ok && resp.inviata) {
							// inviata, tutto ok
							await sleep(500)
							btnSend.classList.remove('onclick')
							btnSend.classList.add('validate')
							// mostro card successo
							showResponse(cardSuccesso)
							await sleep(5000)
							clearAllInputData()
							clearAllInputError()
							hideResponse(cardSuccesso)
							btnSend.classList.remove('validate')
							btnSend.classList.add('standard')
							// nascondo card successo
						} else if (resp.form_ok && !resp.inviata) {
							// form corretta ma il server non riesce ad inviare l'email
							await sleep(500)
							// Do something after the sleep!
							clearAllInputError()
							btnSend.classList.remove('onclick')
							btnSend.classList.add('error')
							await sleep(50)
							// modificare l'allert per mostrare card
							// errore e modificare html di errore
							showResponse(cardErrore)
							// alert('campi giusti, ma il server non invia, riprova tra poco')
						} else if (!resp.form_ok) {
							// form NON corretto
							btnSend.classList.remove('onclick')
							btnSend.classList.add('error')
							var errors = resp.errors
							for (i in errors) {
								var elem = document.getElementById(errors[i])
								elem.classList.add('invalid')
								// elem.getElementsByTagName('div').classList.add('invisibile')
							}
						} else {
							btnSend.classList.remove('onclick')
							btnSend.classList.add('error')
						}
					} else {
						btnSend.classList.remove('onclick')
						btnSend.classList.add('error')
						alert('Fallita richiesta al server. ERR: ' + req.statusText)
					}
				} else {
					btnSend.classList.remove('onclick')
					btnSend.classList.add('error')
					alert('Fallita richiesta al server. ERR: ' + req.statusText)
				}
			}
		}
		req.onerror = function () {
			btnSend.classList.remove('onclick')
			btnSend.classList.add('error')
			alert('Fallita richiesta al server. ERR: ' + req.statusText)
		}
		// req.overrideMimeType('application/json'); // if request result is JSON
		gtag_report_conversion()
		try {
			req.open('POST', url2get, true) // 3rd param is whether 'async'
			req.timeout = 4000 // time in milliseconds
		} catch (err) {
			alert(
				'couldnt complete request. Is JS enabled for that domain?\\n\\n' +
				err.message
			)
			btnSend.classList.remove('onclick')
			btnSend.classList.add('error')
			return
		}
		req.send(data) // param string only used for POST
	} else {
		alert('Invio asincrono non supportato, prova cambiando Browser.')
		btnSend.classList.remove('onclick')
		btnSend.classList.add('error')
		// return
	}
}

function postAsync(url2get, sendstr) {
	var req
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest()
	} else if (window.ActiveXObject) {
		req = new ActiveXObject('Microsoft.XMLHTTP')
	}
	if (req !== undefined) {
		// req.overrideMimeType('application/json'); // if request result is JSON
		try {
			req.open('POST', url2get, true) // 3rd param is whether 'async'
			req.timeout = 4000 // time in milliseconds
		} catch (err) {
			alert(
				'couldnt complete request. Is JS enabled for that domain?\\n\\n' +
				err.message
			)
			return false
		}
		req.send(sendstr) // param string only used for POST

		if (req.readyState === 4) {
			// only if req is 'loaded'
			if (req.status === 200) {
				// only if 'OK'
				// console.log(req.responseText);
				return req.responseText
			} else {
				alert('stato: ' + req.status)
				return false
			}
		}
	}
	alert('Invio asincrono non supportato, prova cambiando Browser.')
}

function scriviPrezzo(prezzo, title) {
	if (typeof prezzo === 'number') {
		prezzo = 'Tot: ' + prezzo.toFixed(2) + '€ + iva'
	} else {
	}
	document
		.getElementById('prezzo')
		.getElementsByTagName('span')[0].innerHTML = prezzo
	document
		.getElementById('prezzo')
		.getElementsByTagName('span')[0].title = title
	document
		.getElementById('prezzo')
		.getElementsByTagName('input')[0].value = prezzo
}
function getInputValue(id) {
	if (typeof formTag[id].defVal === 'boolean') {
		return document
			.getElementById(id)
			.getElementsByTagName(formTag[id].input)[0].checked
	} else {
		return document
			.getElementById(id)
			.getElementsByTagName(formTag[id].input)[0].value
	}
}
function getQuantitàListino(quantitaRichiesta, lista) {
	var ultimaQuantita = 0
	for (ultimaQuantita in lista) {
		if (quantitaRichiesta <= ultimaQuantita) return ultimaQuantita
	}
	return ultimaQuantita
}
function calcolaPrezzo(inputId) {
	campiPreventivoInvalidi = []
	document.getElementById('prezzo').classList.remove('warn')
	switch (window.document.title) {
		case 'Grigoprint | Tappeto Personalizzato':
			calcolaPrezzoTappeti()
			break
		case 'Grigoprint | Tappeto Sottomoto':
			calcolaPrezzoTappetiSottomoto()
			break
		case 'Grigoprint | Tovaglie Pubblicitarie':
			calcolaPrezzoTovaglie()
			break
		case 'Grigoprint | Maniche a Vento':
			calcolaPrezzoManicheAVento()
			break
		case 'Grigoprint | Gonfaloni':
			calcolaPrezzoGonfaloni()
			break
		case 'Grigoprint | Bean Banner':
			calcolaPrezzoBeanBanner()
			break
		case 'Grigoprint | Bandiere Bifacciali':
			calcolaPrezzoBandiereBifacciali()
			break
		case 'Grigoprint | Beach Flags':
			calcolaPrezzoBeachFlags()
			break
		case 'Grigoprint | Ombrelloni da giardino':
			calcolaPrezzoOmbrelloniGiardino()
			break
		case 'Grigoprint | Foulard':
			calcolaPrezzoFoulard()
			break
		case 'Grigoprint | Car Solutions':
			calcolaPrezzoCarSolutions()
			break
		case 'Grigoprint | Frame in tessuto':
			calcolaPrezzoCornice()
			break
		// offerte
		case 'Grigoprint | Offerte ombrelloni da giardino':
			calcolaPrezzoOfferteOmbrelloniGiardino()
			break
		default:
			scriviPrezzo(
				'Prezzo non supportato',
				'Prezzo online non disponibile per questo prodotto'
			)
			break
	}
	// controllo warning
	if (campiPreventivoInvalidi.length > 0) {
		document.getElementById('prezzo').classList.add('warn')
		scriviPrezzo(
			'Inserisci ' + campiPreventivoInvalidi[0],
			'Inserisci tutte le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici nel modo clasisco'
		)
		// aggiungo i campi WARN anche nelle caselle prima
		for (var i in campiPreventivoInvalidi) {
			if (
				formTag[campiPreventivoInvalidi[i]].i < formTag[inputId].i ||
				formTag[campiPreventivoInvalidi[i]].touch
			) {
				if (i === 0) {
					document
						.getElementById(campiPreventivoInvalidi[i])
						.classList.add('warning')
					document
						.getElementById(campiPreventivoInvalidi[i])
						.classList.add('warn')
				}
			}
		}
		// return
	}
}
// zona calcolo prezzi
function calcolaPrezzoTappeti() {
	var ml
	var altezzaTessuto
	var altezza = parseInt(getInputValue('altezza'))
	var larghezza = parseInt(getInputValue('larghezza'))
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	if (isNaN(altezza) || altezza <= 0) {
		campiPreventivoInvalidi.push('altezza')
	}
	if (isNaN(larghezza) || larghezza <= 0) {
		campiPreventivoInvalidi.push('larghezza')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo resa e consumo
	if (altezza > larghezza) {
		if (altezza <= 100) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 100
		} else if (altezza <= 150) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 150
		} else if (larghezza <= 100) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 100
		} else if (larghezza <= 150) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 150
		} else {
			scriviPrezzo(
				'Richiedi in Azienda',
				'Misure troppo grandi, vi offriremo piu tappeti giuntati'
			)
			return
		}
	} else {
		if (larghezza <= 100) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 100
		} else if (larghezza <= 150) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 150
		} else if (altezza <= 100) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 100
		} else if (altezza <= 150) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 150
		} else {
			scriviPrezzo(
				'Richiedi in Azienda',
				'Misure troppo grandi, vi offriremo più tappeti giuntati'
			)
			return
		}
	}
	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         altezzaTessuto/metri lineari-->prezzo
	var listini = {100: {10: 55.9, 50: 42, 10000: 37.6}, 150: {10: 71.4, 50: 52.3, 10000: 46.4}}
	var prezzo =
		ml *
		listini[altezzaTessuto][getQuantitàListino(ml, listini[altezzaTessuto])]

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}
function calcolaPrezzoTappetiSottomoto() {
	var ml
	var altezzaTessuto
	var altezza = parseInt(getInputValue('altezza'))
	var larghezza = parseInt(getInputValue('larghezza'))
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	if (isNaN(altezza) || altezza <= 0) {
		campiPreventivoInvalidi.push('altezza')
	}
	if (isNaN(larghezza) || larghezza <= 0) {
		campiPreventivoInvalidi.push('larghezza')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo resa e consumo
	if (altezza > larghezza) {
		if (altezza <= 100) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 100
		} else if (altezza <= 150) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 150
		} else if (larghezza <= 100) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 100
		} else if (larghezza <= 150) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 150
		} else {
			scriviPrezzo(
				'Richiedi in Azienda',
				'Misure troppo grandi, vi offriremo piu tappeti giuntati'
			)
			return
		}
	} else {
		if (larghezza <= 100) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 100
		} else if (larghezza <= 150) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 150
		} else if (altezza <= 100) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 100
		} else if (altezza <= 150) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 150
		} else {
			scriviPrezzo(
				'Richiedi in Azienda',
				'Misure troppo grandi, vi offriremo più tappeti giuntati'
			)
			return
		}
	}
	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         altezzaTessuto/metri lineari-->prezzo
	var listini = {100: {10: 41.6, 50: 32, 100: 24.6, 200: 23.1, 10000: 22.1}, 150: {10: 62.3, 50: 47.8, 100: 35, 200: 32.9, 10000: 31.6}}
	var prezzo =
		ml *
		listini[altezzaTessuto][getQuantitàListino(ml, listini[altezzaTessuto])]

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}

function calcolaPrezzoTovaglie() {
	var ml
	var altezzaTessuto
	var altezza = parseInt(getInputValue('altezza'))
	var larghezza = parseInt(getInputValue('larghezza'))
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	if (isNaN(altezza) || altezza <= 0) {
		campiPreventivoInvalidi.push('altezza')
	}
	if (isNaN(larghezza) || larghezza <= 0) {
		campiPreventivoInvalidi.push('larghezza')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo resa e consumo
	if (altezza > larghezza) {
		if (altezza <= 150) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 150
		} else if (altezza <= 300) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 300
		} else if (larghezza <= 150) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 150
		} else if (larghezza <= 300) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 300
		} else {
			scriviPrezzo(
				'Richiedi in Azienda',
				'Misure troppo grandi, vi offriremo piu tessuti uniti.'
			)
			return
		}
	} else {
		if (larghezza <= 150) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 150
		} else if (larghezza <= 300) {
			ml = (altezza / 100) * quantita
			altezzaTessuto = 300
		} else if (altezza <= 150) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 150
		} else if (altezza <= 300) {
			ml = (larghezza / 100) * quantita
			altezzaTessuto = 300
		} else {
			scriviPrezzo(
				'Richiedi in Azienda',
				'Misure troppo grandi, vi offriremo piu tessuti uniti.'
			)
			return
		}
	}
	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         altezzaTessuto/metri lineari-->prezzo
	var listini = {150: {15: 26, 10000: 21.6}, 300: {15: 61.4, 10000: 52}}
	var prezzo =
		ml *
		listini[altezzaTessuto][getQuantitàListino(ml, listini[altezzaTessuto])]

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}

function calcolaPrezzoManicheAVento() {
	var modello = getInputValue('modello')
	var tessuto = getInputValue('tessuto')
	var misura = getInputValue('misura')
	var finitura = getInputValue('finitura')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (modello === '') {
		campiPreventivoInvalidi.push('modello')
	}
	if (tessuto === '') {
		campiPreventivoInvalidi.push('tessuto')
	}
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// controllo facoltativo
	if (finitura === '') {
		document.getElementById('finitura').classList.add('warn')
		// valido = false; // non necessaria per il prezzo, ma consigliata
	}

	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         modello(personalizzata e non)|tessuto|altezzaTessuto-->prezzo
	var listini = {
		'non personalizzata': {
			poliestere: {
				400: 'Non Disponibile in Poliestere',
				360: 'Non Disponibile in Poliestere',
				300: 150,
				260: 132,
				240: 120,
				200: 106,
				150: 83,
				130: 75,
				100: 68
			},
			acrilico: {
				400: 730,
				360: 507,
				300: 330,
				260: 291,
				240: 270,
				200: 234,
				150: 'Non Disponibile in Acrilico',
				130: 'Non Disponibile in Acrilico',
				100: 'Non Disponibile in Acrilico'
			}
		},
		personalizzata: {
			poliestere: {
				400: 497,
				350: 411,
				300: 271,
				260: 170,
				200: 147,
				150: 133,
				130: 111,
				108: 101
			}
		}
	}

	var prezzo = listini[modello][tessuto][misura]
	if (!isNaN(prezzo)) prezzo *= quantita

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}
function calcolaPrezzoBeanBanner() {
	var misura = getInputValue('misura')
	var finitura = getInputValue('finitura')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// controllo facoltativo
	if (finitura === '') {
		document.getElementById('finitura').classList.add('warn')
		// valido = false; // non necessaria per il prezzo, ma consigliata
	}
	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         misura|quantità-->prezzo
	var listini = {
		50: {3: 97, 10: 81, 50: 66, 10000: 60},
		75: {3: 150, 10: 131, 50: 108, 10000: 98},
		100: {3: 219, 10: 195, 50: 163, 10000: 148}
	}

	var prezzo =
		quantita * listini[misura][getQuantitàListino(quantita, listini[misura])]

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}
function calcolaPrezzoBandiereBifacciali() {
	var tessuto = getInputValue('tessuto')
	var misura = getInputValue('misura')
	var finitura = getInputValue('finitura')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if (finitura === '') {
		campiPreventivoInvalidi.push('finitura')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// controllo facoltativo
	if (tessuto === '') {
		document.getElementById('tessuto').classList.add('warn')
		// valido = false; // non necessaria per il prezzo, ma consigliata
	}

	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         dimensione/quantità-->prezzo
	var listini = {
		70: {3: 68, 10000: 63},
		100: {3: 112, 10000: 103},
		150: {3: 201, 10000: 184},
		senza: -10,
		oro: 0,
		argento: 0
	}

	var prezzo =
		listini[misura][getQuantitàListino(quantita, listini[misura])] +
		listini[finitura]
	prezzo *= quantita

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}

function calcolaPrezzoGonfaloni() {
	var tessuto = getInputValue('tessuto')
	var misura = getInputValue('misura')
	var struttura = getInputValue('struttura')
	var base = getInputValue('base')
	var borsa = getInputValue('borsa')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (tessuto === '') {
		campiPreventivoInvalidi.push('tessuto')
	}
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if (struttura === '') {
		campiPreventivoInvalidi.push('struttura')
	}
	if (base === '') {
		campiPreventivoInvalidi.push('base')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return
	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         categoria/dimensione-->prezzo
	var listini = {
		stampa: {
			50: 150,
			70: 206,
			80: 243,
			90: 318
		},
		struttura: {
			senza: {
				50: 0,
				70: 0,
				80: 0,
				90: 0
			},
			cromata: {
				50: 150,
				70: 152,
				80: 154,
				90: 156
			},
			ottone: {
				50: 192,
				70: 194,
				80: 196,
				90: 259
			}
		},
		base: {
			senza: 0,
			cromata: 37,
			ottone: 64
		},
		borsa: 84
	}

	var prezzo =
		listini.stampa[misura] +
		listini.struttura[struttura][misura] +
		listini.base[base]
	if (borsa) prezzo += listini.borsa
	prezzo *= quantita

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}
function calcolaPrezzoBeachFlags() {
	var tessuto = getInputValue('tessuto')
	var modello = getInputValue('modello')
	var misura = getInputValue('misura')
	// var struttura = getInputValue('struttura');
	var finitura = getInputValue('finitura')
	var base = getInputValue('base')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (modello === '') {
		campiPreventivoInvalidi.push('modello')
	}
	if (tessuto === '') {
		campiPreventivoInvalidi.push('tessuto')
	}
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if ((modello === 'goccia' || modello === 'vela') && finitura === '') {
		campiPreventivoInvalidi.push('finitura')
	}
	if (base === '') {
		campiPreventivoInvalidi.push('base')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return
	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         tipo|misura/quantità-->prezzo
	var listini = {
		goccia: {
			stampa: {
				xl: {3: 99.8, 13: 76.7, 50: 68.4},
				l: {3: 80.4, 13: 62.8, 50: 57.2},
				m: {3: 66.6, 13: 53.1, 50: 43.3},
				s: {3: 51.8, 13: 39.3, 50: 31.9}
			},
			struttura: {
				xl: {10: 29.3, 10000: 25.5},
				l: {10: 23.5, 10000: 20.4},
				m: {10: 20.6, 10000: 17.9},
				s: {10: 17.5, 10000: 15.2}
			},
			base: {
				senza: {10: 0, 10000: 0},
				croce: {10: 26.2, 10000: 24.1},
				19: {10: 26.7, 10000: 24.5},
				40: {10: 36.7, 10000: 33.7},
				d33: {10: 25.7, 10000: 23.6},
				piastra: {10: 97.8, 10000: 89.7},
				vite: {10: 21, 10000: 19.2},
				vitone: {10: 58.4, 10000: 53.6},
				picchetto: {10: 40.5, 10000: 37.1}
			},
			finitura: {normale: 0, stampata: 5}
		},
		vela: {
			stampa: {
				xl: {3: 124.2, 13: 102.4, 50: 95.8},
				l: {3: 93.6, 13: 75.9, 50: 68.8},
				m: {3: 67.4, 13: 54.7, 50: 48.2},
				s: {3: 47.1, 13: 39.3, 50: 31.9}
			},
			struttura: {
				xl: {10: 29.3, 10000: 25.5},
				l: {10: 23.5, 10000: 20.4},
				m: {10: 20.6, 10000: 17.9},
				s: {10: 17.5, 10000: 15.2}
			},
			base: {
				senza: {10: 0, 10000: 0},
				croce: {10: 26.2, 10000: 24.1},
				19: {10: 26.7, 10000: 24.5},
				40: {10: 36.7, 10000: 33.7},
				d33: {10: 25.7, 10000: 23.6},
				piastra: {10: 97.8, 10000: 89.7},
				vite: {10: 21, 10000: 19.2},
				vitone: {10: 58.4, 10000: 53.6},
				picchetto: {10: 40.5, 10000: 37.1}
			},
			finitura: {normale: 0, stampata: 5}
		},
		girevolissimo: {
			stampa: {
				'70x200': {3: 30.1, 13: 26, 50: 23.7},
				'70x250': {3: 37.6, 13: 32.5, 50: 29.6},
				'70x300': {3: 45.1, 13: 39, 50: 35.5},
				'100x200': {3: 47.9, 13: 41.4, 50: 40.2},
				'100x250': {3: 59.9, 13: 51.7, 50: 50.3},
				'100x300': {3: 71.9, 13: 62.1, 50: 60.4}
			},
			struttura: {10: 68, 10000: 63},
			base: {
				senza: {10: 0, 10000: 0},
				19: {10: 14.6, 10000: 13.3},
				40: {10: 30.3, 10000: 27.6},
				vitone: {10: 52.2, 10000: 47.5}
			},
			finitura: {'': 0}
		}
	}
	var prezzo =
		listini[modello].stampa[misura][
		getQuantitàListino(quantita, listini[modello].stampa[misura])
		]
	if (tessuto === 'bifacciale') prezzo *= 3
	prezzo +=
		listini[modello].base[base][
		getQuantitàListino(quantita, listini[modello].base[base])
		] + listini[modello].finitura[finitura]
	if (modello === 'girevolissimo') {
		prezzo +=
			listini[modello].struttura[
			getQuantitàListino(quantita, listini[modello].struttura)
			]
	} else {
		prezzo +=
			listini[modello].struttura[misura][
			getQuantitàListino(quantita, listini[modello].struttura[misura])
			]
	}

	prezzo *= quantita

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}
function calcolaPrezzoFoulard() {
	var misura = getInputValue('misura')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         misura|quantita-->prezzo
	var listini = {
		48: {9: 'almeno 10 pz', 30: 4.7, 100: 3.6, 500: 3.3, 10000: 3},
		60: {9: 'almeno 10 pz', 30: 7.7, 100: 5.9, 500: 5.2, 10000: 4.7},
		70: {9: 'almeno 10 pz', 30: 9.0, 100: 6.9, 500: 6.1, 10000: 5.5},
		78: {9: 'almeno 10 pz', 30: 10.0, 100: 7.6, 500: 6.8, 10000: 6.1},
		90: {9: 'almeno 10 pz', 30: 20.3, 100: 15.2, 500: 13.3, 10000: 11.7},
		100: {9: 'almeno 10 pz', 30: 22.5, 100: 16.8, 500: 14.7, 10000: 13},
		120: {9: 'almeno 10 pz', 30: 27.0, 100: 20.2, 500: 17.6, 10000: 15.6}
	}

	var prezzo = listini[misura][getQuantitàListino(quantita, listini[misura])]

	if (typeof prezzo === 'number') prezzo *= quantita

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}
function calcolaPrezzoCarSolutions() {
	var modello = getInputValue('modello')
	var finitura = getInputValue('finitura')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (modello === '') {
		campiPreventivoInvalidi.push('modello')
	}
	if (finitura === '') {
		campiPreventivoInvalidi.push('finitura')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         modello|finitura|quanità|-->prezzo
	var listini = {
		poggiatesta: {
			1: {
				49: 'almeno 50 pz',
				100: 8.26,
				200: 5.43,
				500: 4.57,
				1000: 4.2,
				2000: 3.84,
				10000: 3.56
			},
			2: {
				49: 'almeno 50 pz',
				100: 9.31,
				200: 6.45,
				500: 5.76,
				1000: 5.31,
				2000: 4.96,
				10000: 4.64
			},
			a: {
				49: 'almeno 50 pz',
				100: 9.47,
				200: 7.58,
				500: 7.05,
				1000: 6.56,
				2000: 6.2,
				10000: 5.81
			}
		}
	}

	var prezzo =
		listini[modello][finitura][
		getQuantitàListino(quantita, listini[modello][finitura])
		]

	if (typeof prezzo === 'number') prezzo *= quantita

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}

function calcolaPrezzoCornice() {
	var mq, perimetro
	var altezza = parseInt(getInputValue('altezza'))
	var larghezza = parseInt(getInputValue('larghezza'))
	var finitura = getInputValue('finitura')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	if (isNaN(altezza) || altezza <= 0) {
		campiPreventivoInvalidi.push('altezza')
	}
	if (isNaN(larghezza) || larghezza <= 0) {
		campiPreventivoInvalidi.push('larghezza')
	}
	if (finitura === '') {
		campiPreventivoInvalidi.push('finitura')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo resa e consumo
	if (altezza > larghezza) {
		if (larghezza > 290) {
			scriviPrezzo('Richiedi in Azienda', 'Misure troppo grandi.')
			return
		}
	} else {
		if (altezza > 290) {
			scriviPrezzo('Richiedi in Azienda', 'Misure troppo grandi.')
			return
		}
	}
	mq = ((altezza * larghezza) / 10000) * quantita
	perimetro = (((altezza + larghezza) * 2) / 100) * quantita
	// calcolo finale prezzo (cambiare il prezzo del listino)
	//         altezzaTessuto/metri lineari-->prezzo
	var listini = {
		avviamento: {standard: 50, retroilluminato: 50, 'solo cucitura': 10},
		stampa: {
			standard: {30: 17, 10000: 16},
			retroilluminato: {30: 20.5, 10000: 19},
			'solo cucitura': {0: 0}
		},
		cucitura: {50: 4, 10000: 3}
	}
	var prezzo =
		listini.stampa[finitura][getQuantitàListino(mq, listini.stampa[finitura])] *
		mq +
		listini.cucitura[getQuantitàListino(perimetro, listini.cucitura)] *
		perimetro
	prezzo = listini.avviamento[finitura] + prezzo

	scriviPrezzo(
		prezzo,
		'Prezzo indicativo che verrà confermato al momento della Richiesta'
	)
}
function calcolaPrezzoOmbrelloniGiardino() {
	var modello = getInputValue('modello')
	var misura = getInputValue('misura')
	var struttura = getInputValue('struttura')
	var base = getInputValue('base')
	var spedizione = getInputValue('spedizione')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (modello === '') {
		campiPreventivoInvalidi.push('modello')
	}
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if (struttura === '') {
		campiPreventivoInvalidi.push('struttura')
	}
	if (base === '') {
		campiPreventivoInvalidi.push('base')
	}
	if (spedizione === '') {
		campiPreventivoInvalidi.push('spedizione')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo finale prezzo (cambiare il prezzo del listino)
	// prezzi da inserire: listino pubblico, poi sotto sconto
	//         modello|struttura|misura|-->[prezzo, spedizione]
	var listini = {
		centrale: {
			legno: {
				'3x3': [410, 35],
				'3.5x3.5': [550, 40],
				'3x4': [530, 40],
				'4x4': [680, 45]
			},
			'legno sbiancato': {
				'3x3': [490, 35],
				'3.5x3.5': [640, 40],
				'3x4': [620, 40],
				'4x4': ['Non disponibile', 0]
			},
			alluminio: {
				'3x3': [480, 35],
				'3.5x3.5': [610, 40],
				'3x4': [600, 40],
				'4x4': ['Non disponibile', 0]
			}
		},
		braccio: {
			legno: {
				'3x3': [960, 100],
				'3.5x3.5': [1180, 100],
				'3x4': [1160, 100],
				'4x4': [1500, 100]
			},
			'legno sbiancato': {
				'3x3': [1220, 100],
				'3.5x3.5': [1440, 100],
				'3x4': [1420, 100],
				'4x4': ['Non disponibile', 100]
			},
			alluminio: {
				'3x3': [1000, 100],
				'3.5x3.5': [1210, 100],
				'3x4': [1190, 100],
				'4x4': [1570, 100]
			},
			retrattile: {
				'3x3': ['Non disponibile', 0],
				'3.5x3.5': ['Non disponibile', 0],
				'3x4': ['Non disponibile', 0],
				'4x4': ['Non disponibile', 0]
			}
		},
		pergola: {
			alluminio: {'3x3': ['Non disponibile', 0]}
		},
		base: {
			senza: [0, 0],
			55: [30, 50],
			75: [40, 50],
			100: [60, 60],
			'2piastrelle': [40, 60],
			'4piastrelle': [80, 120],
			'8piastrelle': [160, 240]
		}
	}

	var prezzo = listini[modello][struttura][misura][0]
	if (typeof prezzo === 'number') {
		prezzo = listini[modello][struttura][misura][0] * 0.75 // da listino gregorio a prezzo vendita
		prezzo += listini.base[base][0]
		if (spedizione === 'spedizione') {
			// se ritiro in sede non conteggio
			prezzo += listini[modello][struttura][misura][1] + listini.base[base][1]
			prezzo *= quantita
		}
		scriviPrezzo(
			prezzo,
			'Prezzo indicativo che verrà confermato al momento della Richiesta'
		)
	} else {
		scriviPrezzo(prezzo, '')
	}
}
function calcolaPrezzoOfferteOmbrelloniGiardino() {
	var modello = getInputValue('modello')
	var misura = getInputValue('misura')
	var struttura = getInputValue('struttura')
	var base = getInputValue('base')
	var spedizione = getInputValue('spedizione')
	var quantita = parseInt(getInputValue('quantita'))

	// controllo validità input
	// var valido = true
	if (modello === '') {
		campiPreventivoInvalidi.push('modello')
	}
	if (misura === '') {
		campiPreventivoInvalidi.push('misura')
	}
	if (struttura === '') {
		campiPreventivoInvalidi.push('struttura')
	}
	if (base === '') {
		campiPreventivoInvalidi.push('base')
	}
	if (spedizione === '') {
		campiPreventivoInvalidi.push('spedizione')
	}
	if (isNaN(quantita) || quantita <= 0) {
		campiPreventivoInvalidi.push('quantita')
	}
	if (campiPreventivoInvalidi.length > 0) return

	// calcolo finale prezzo (cambiare il prezzo del listino)
	// prezzi da inserire: listino pubblico, poi sotto sconto
	//         modello|struttura|misura|-->[prezzo, spedizione]
	var listini = {
		quadrato: {
			legno: {
				'3x3': [276, 35],
				'3.5x3.5': [358, 40],
				'4x4': [447, 45]
			}
		},
		rettangolare: {
			legno: {
				'2x3': [244, 30],
				'3x4': [358, 40]
			}
		},
		tondo: {
			legno: {
				/*'2.5x2.5': [0, 35],*/
				'3x3': [236, 35],
				'3.5x3.5': [268, 40],
				'4x4': [317, 45]
			}
		},
		base: {
			senza: [0, 0],
			55: [40, 30],
			75: [75, 40]
		}
	}

	var prezzo = listini[modello][struttura][misura][0]
	if (typeof prezzo === 'number') {
		prezzo = listini[modello][struttura][misura][0]  // da listino 40%
		prezzo += listini.base[base][0]
		if (spedizione === 'spedizione') {
			// se ritiro in sede non conteggio
			prezzo += listini[modello][struttura][misura][1] + listini.base[base][1]
			prezzo *= quantita
		}
		scriviPrezzo(
			prezzo,
			'Prezzo indicativo che verrà confermato al momento della Richiesta'
		)
	} else {
		scriviPrezzo(prezzo, '')
	}
}

function addClickedToPrezzo() {
	document.getElementsByClassName('prezzo_select')[0].classList.add('clicked')
}
// Selezione modello
function deselezionaGruppo(id) {
	var temp = document.getElementById(id).getElementsByTagName('a')
	for (var i of temp) {
		i.classList.remove('selected')
	}
}
function selezionaElementoEvt() {
	var id = this.parentElement.id
	// gestisco selezione
	deselezionaGruppo(id)
	this.classList.add('selected')
	// gestisco select nascosto
	var selezionato = this.getAttribute('data-options')
	this.parentElement.getElementsByTagName(
		formTag[id].input
	)[0].value = selezionato
	// applico modificatori visibilita e cambio dati
	mostraNascondiSelect(id, selezionato)
}
function selezionaElemento(id) {
	var valoreGiaSelezionato = document
		.getElementById(id)
		.getElementsByTagName(formTag[id].input)[0].value
	var elementoGiaSelezionato = document
		.getElementById(id)
		.querySelectorAll('[data-options=' + valoreGiaSelezionato + ']')[0]
	if (elementoGiaSelezionato) {
		// solo se ci sono 'bottoni a' dentro
		// gestisco selezione
		deselezionaGruppo(id)
		elementoGiaSelezionato.classList.add('selected')
		// applico modificatori visibilita e cambio dati
		mostraNascondiSelect(id, valoreGiaSelezionato)
	}
}
var mappaAggiornaSelect = {
	modello: {
		vela: {
			misura: [
				'|Seleziona una Misura',
				's|S, h finale cm250',
				'm|M, h finale cm310',
				'l|L, h finale cm400',
				'xl|XL, h finale cm470'
			],
			finitura: [
				'|Seleziona una Finitura',
				'normale|Con fettuccia Bianca o Nera nel retro',
				'stampata|Con fettuccia stampata'
			],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'croce|Base a croce con zavorra riempibile',
				'19|Base in resina bianca, riempibile, da 19L',
				'40|Base in resina nera da 40L',
				'd33|Base disco resina da 33cm, riempite di cemento',
				'piastra|Base a piastra in metallo',
				'vite|Vite in plastica',
				'vitone|Vitone in ferro zincato',
				'picchetto|Picchetto in ferro zincato'
			]
		},
		goccia: {
			misura: [
				'|Seleziona una Misura',
				's|S, h finale cm190',
				'm|M, h finale cm230',
				'l|L, h finale cm320',
				'xl|XL, h finale cm410'
			],
			finitura: [
				'|Seleziona una Finitura',
				'normale|Con fettuccia Bianca o Nera nel retro',
				'stampata|Con fettuccia stampata'
			],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'croce|Base a croce con zavorra riempibile',
				'19|Base in resina bianca, riempibile, da 19L',
				'40|Base in resina nera da 40L',
				'd33|Base disco resina da 33cm, riempite di cemento',
				'piastra|Base a piastra in metallo',
				'vite|Vite in plastica',
				'vitone|Vitone in ferro zincato',
				'picchetto|Picchetto in ferro zincato'
			]
		},
		girevolissimo: {
			misura: [
				'|Seleziona una Misura',
				'70x200|cm70x200',
				'70x250|cm70x250',
				'70x300|cm70x300',
				'100x200|cm100x200',
				'100x250|cm100x250',
				'100x300|cm100x300'
			],
			finitura: ['|'],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'19|Base in resina bianca, riempibile, da 19L',
				'40|Base in resina nera da 40L',
				'vitone|Vitone in ferro zincato'
			]
		},
		tapp1: {larghezza: 100, altezza: 200},
		tapp2: {larghezza: 150, altezza: 250},
		tapp: {larghezza: 0, altezza: 0},
		personalizzata: {
			tessuto: ['poliestere|Poliestere'],
			misura: [
				'|Seleziona miusra',
				'100|&Oslash;25cm x &#8596;100 cm',
				'130|&Oslash;30cm x &#8596;130 cm',
				'150|&Oslash;35cm x &#8596;150 cm',
				'200|&Oslash;46cm x &#8596;200 cm',
				'240|&Oslash;60cm x &#8596;240 cm',
				'260|&Oslash;60cm x &#8596;260 cm',
				'300|&Oslash;70cm x &#8596;300 cm',
				'360|&Oslash;80cm x &#8596;360 cm',
				'400|&Oslash;95cm x &#8596;400 cm'
			]
		},
		'non personalizzata': {
			tessuto: [
				'|Seleziona tessuto',
				'acrilico|Acrilico',
				'poliestere|Poliestere'
			],
			misura: [
				'|Seleziona miusra',
				'100|&Oslash;25cm x &#8596;100 cm',
				'130|&Oslash;30cm x &#8596;130 cm',
				'150|&Oslash;35cm x &#8596;150 cm',
				'200|&Oslash;46cm x &#8596;200 cm',
				'240|&Oslash;60cm x &#8596;240 cm',
				'260|&Oslash;60cm x &#8596;260 cm',
				'300|&Oslash;70cm x &#8596;300 cm',
				'360|&Oslash;80cm x &#8596;360 cm',
				'400|&Oslash;95cm x &#8596;400 cm'			]
		},
		// 'personalizzato':{'tessuto':['poliestere|Poliestere']},
		// 'non personalizzato':{'tessuto':['|Seleziona una Tessuto','poliestere|Poliestere','acrilico|Acrilico']},
		centrale: {
			misura: [
				'|Seleziona una Misura',
				'3x3|3x3 metri',
				'3.5x3.5|3.5x3.5 metri',
				'3x4|3x4 metri',
				'4x4|4x4 metri'
			],
			struttura: [
				'|Seleziona una Struttura',
				'legno|Legno classico',
				'legno sbiancato|Legno Sbiancato',
				'alluminio|Alluminio'
			],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'55|55 Kg',
				'75|75 Kg',
				'70|70 Kg',
				'100|100 Kg'
			]
		},
		braccio: {
			misura: [
				'|Seleziona una Misura',
				'3x3|3x3 metri',
				'3.5x3.5|3.5x3.5 metri',
				'3x4|3x4 metri',
				'4x4|4x4 metri'
			],
			struttura: [
				'|Seleziona una Struttura',
				'legno|Legno classico',
				'legno sbiancato|Legno Sbiancato',
				'alluminio|Alluminio',
				'retrattile|Retrattile'
			],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'2piastrelle| 2 zavorre in graniglia da 50Kg cad.'
			]
		},
		pergola: {
			misura: ['|Seleziona una Misura', '3x3|3x3 metri'],
			struttura: ['alluminio|Alluminio'],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'4piastrelle| 4 piastrelle in graniglia da 50Kg cad.',
				'8piastrelle| 8 zavorre in graniglia da 50Kg cad.'
			]
		},
		tondo: {
			misura: [
				'|Seleziona una Misura',
				'3x3|3x3 metri',
				'3.5x3.5|3.5x3.5 metri',
				'4x4|4x4 metri'
			],
			struttura: [
				'legno|Legno classico',
			],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'55|55 Kg',
				'75|75 Kg',
			]
		},
		rettangolare: {
			misura: [
				'|Seleziona una Misura',
				'2x3|2x3 metri',
				'3x4|3x4 metri'
			],
			struttura: [
				'legno|Legno classico',
			],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'55|55 Kg',
				'75|75 Kg',
			]
		},
		quadrato: {
			misura: [
				'|Seleziona una Misura',
				'3x3|3x3 metri',
				'3.5x3.5|3.5x3.5 metri',
				'4x4|4x4 metri'
			],
			struttura: [
				'legno|Legno classico',
			],
			base: [
				'|Seleziona una Base',
				'senza|Senza base',
				'55|55 Kg',
				'75|75 Kg',
			]
		}
	}
}
function mostraNascondiSelect(id, select) {
	var finalValue
	for (var key in mappaAggiornaSelect[id][select]) {
		formTag[key].touch = false
		if (!isNaN(parseInt(mappaAggiornaSelect[id][select][key]))) {
			// compilo e bloco campi numeri
			finalValue = mappaAggiornaSelect[id][select][key]
			// blocco automatico per gli input con valore DIVERSO da 0
			// if(finalValue === 0) {
			//   document.getElementById(key).classList.remove('blocca');
			//   document.getElementById(key).getElementsByTagName('input')[0].disabled = false;
			// } else {
			//   document.getElementById(key).classList.add('blocca');
			//   document.getElementById(key).getElementsByTagName('input')[0].disabled = true;
			// }
		} else {
			// compilo select
			// blocco automatico per i select che hanno solo 1 elemento
			if (mappaAggiornaSelect[id][select][key].length <= 1) {
				document.getElementById(key).classList.add('blocca')
				document
					.getElementById(key)
					.getElementsByTagName('select')[0].disabled = true
			} else {
				document.getElementById(key).classList.remove('blocca')
				document
					.getElementById(key)
					.getElementsByTagName('select')[0].disabled = false
			}
			// costruisco le options per il select
			var options = ''
			for (var elem of mappaAggiornaSelect[id][select][key]) {
				var sp = elem.split('|')
				options += '<option value=' + sp[0] + '>' + sp[1] + '</option>'
			}
			// aggiorno selct nascosto tra i bottoni
			document
				.getElementById(key)
				.getElementsByTagName('select')[0].innerHTML = options
			finalValue = mappaAggiornaSelect[id][select][key][0].split('|')[0]
		}
		document
			.getElementById(key)
			.getElementsByTagName(formTag[key].input)[0].value = finalValue
		if (formTag[key].need) {
			document.getElementById(key).classList.remove('error')
		} else {
			document.getElementById(key).classList.remove('warn')
			document.getElementById(key).classList.remove('warning')
		}
	}
	if (formTag[id].need) {
		document.getElementById(id).classList.remove('error')
	} else {
		document.getElementById(id).classList.remove('warn')
		document.getElementById(id).classList.remove('warning')
	}
	// calcola prezzo
	calcolaPrezzo(id)
}

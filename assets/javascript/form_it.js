// var readySite;
//
// document.addEventListener('DOMContentLoaded', () => {
//   if (document.readySite === 'complete') {
//     readySite = 'ready';
//   }
//
// });

var formTag = {"name":{"need":true, "input":"input", "defVal":"","evt":["keyup","cut","paste","change"]},
               "company":{"need":true, "input":"input", "defVal":"","evt":["keyup","cut","paste","change"]},
               "telephone":{"need":true, "input":"input", "defVal":"","evt":["keyup","cut","paste","change"]},
               "email":{"need":true, "input":"input", "defVal":"","evt":["keyup","cut","paste","change"]},
               "message":{"need":true, "input":"textarea", "defVal":"","evt":["keyup","cut","paste","change"]},
               "agree":{"need":true, "input":"input", "defVal":false,"evt":["change"]},
               "modello":{"need":false, "input":"select", "defVal":"","evt":["change"], "bottoni":true},
               "tessuto":{"need":false, "input":"select", "defVal":"","evt":["change"]},
               "altezza":{"need":false, "input":"input", "defVal":"","evt":["keyup","cut","paste","change"]},
               "larghezza":{"need":false, "input":"input", "defVal":"","evt":["keyup","cut","paste","change"]},
               "struttura":{"need":false, "input":"select", "defVal":"","evt":["change"]},
               "misura":{"need":false, "input":"select", "defVal":"","evt":["change"]},
               "base":{"need":false, "input":"select", "defVal":"","evt":["change"]},
               "finitura":{"need":false, "input":"select", "defVal":"","evt":["change"]},
               "borsa":{"need":false, "input":"input", "defVal":false,"evt":["change"]},
               "quantita":{"need":false, "input":"input", "defVal":"","evt":["keyup","cut","paste","change"]} };

// form classico
function clearInvalid() {
  var id = this.parentElement.id || this.parentElement.parentElement.id;
  if (formTag[id]["need"]) {
    document.getElementById(id).classList.remove("invalid");
    clearSendButton();
  } else {
    document.getElementById(id).classList.remove("warn");
    calcolaPrezzo();
  }
}

function clearAllInput() {
  var temp;
  for(var key in formTag) {
    temp = document.getElementById(key);
    if(temp)
      if (formTag[key]["need"])  {
        temp.classList.remove("invalid");
      } else {
        temp.classList.remove("warn");
      }
  }
}

function clearAllInputData() {
  for(var key in formTag) {
    var temp = document.getElementById(key);
    if(temp)
      if(typeof formTag[key]["defVal"] == "boolean")
        temp.getElementsByTagName(formTag[key]["input"])[0].checked = formTag[key]["defVal"];
      else
        temp.getElementsByTagName(formTag[key]["input"])[0].value = formTag[key]["defVal"];
  }
  scriviPrezzo("Inserisci dati", "Compila i campi per generare il tuo preventivo");
}

function clearSendButton() {
    var btnSend = document.getElementById("btn-send");
    if (!btnSend.classList.contains("standard")) {
        btnSend.classList.remove("onclick");
        btnSend.classList.remove("validate");
        btnSend.classList.remove("error");
        btnSend.classList.add("standard");
    }
}


function eventLoading() {
  for(var key in formTag) {
    var temp = document.getElementById(key);
    if(temp) {
      if(formTag[key]["bottoni"]) { // tagg select che potrebbe funzionare a bottoni
        var temp2 = temp.getElementsByTagName("a");
        for (var i of temp2) {
          i.addEventListener("click",selezionaElemento);
        }
      }
      temp = temp.getElementsByTagName(formTag[key]["input"])[0];
      for (var i in formTag[key]["evt"])
        temp.addEventListener(formTag[key]["evt"][i], clearInvalid);
      // focus e lostfocus per nascondere menu nei cellulari
      if((formTag[key]["input"] == "input" || formTag[key]["input"] == "textarea") && typeof formTag[key]["defVal"] != "boolean") {
        temp.addEventListener("focus", navToggle);
        temp.addEventListener("blur", navToggle);
      }
    }
  }
}


if(document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", eventLoading);
} else {
  eventLoading();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendMail() {
    sendMailTrue();
}
async function sendMailTrue() {
    var btnSend = document.getElementById("btn-send");
    var form = document.querySelector('form');
    var data = new FormData(form);

    btnSend.classList.remove("standard");
    btnSend.classList.remove("error");
    btnSend.classList.remove("validate");
    btnSend.classList.add("onclick");

    var respJSON = postAsync('/test/send_mail.php', data);
    await sleep(200);
    if ('string' === typeof respJSON) {
        //alert("Json: "+respJSON);
        var resp = JSON.parse(respJSON);
        //alert("json decodificato: "+resp);
        if (resp['form_ok'] && resp['inviata']) { // inviata, tutto ok
            await sleep(500);
            btnSend.classList.remove("onclick");
            // Do something after the sleep!
            btnSend.classList.add("validate");
            clearAllInputData();
            clearAllInput();
            await sleep(5000);
            btnSend.classList.remove("validate");
            btnSend.classList.add("standard");
            gtag_report_conversion('http://www.grigoprint.it/contatti.html');
        } else if (resp['form_ok'] && !resp['inviata']) { // form corretta ma il server non riesce ad inviare l'email
            await sleep(500);
            // Do something after the sleep!
            clearAllInput();
            btnSend.classList.remove("onclick");
            btnSend.classList.add("error");
            await sleep(50);
            alert("campi giusti ma il server non invia");
        } else if (!resp['form_ok']) { // form NON corretto
            btnSend.classList.remove("onclick");
            btnSend.classList.add("error");
            var errors = resp['errors'];
            for (i in errors) {
                var elem = document.getElementById(errors[i]);
                elem.classList.add('invalid');
                //elem.getElementsByTagName('div').classList.add('invisibile');
            }
        } else {
            btnSend.classList.remove("onclick");
            btnSend.classList.add("error");
        }
    } else {
        btnSend.classList.remove("standard");
        btnSend.classList.remove("onclick");
        btnSend.classList.add("error");
        alert("Fallita richiesta al server");
    }
}

function postAsync(url2get, sendstr) {
    var req;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (req != undefined) {
        //req.overrideMimeType("application/json"); // if request result is JSON
        try {
            req.open("POST", url2get, false); // 3rd param is whether "async"
            //req.timeout = 4000; // time in milliseconds
        } catch (err) {
            alert("couldnt complete request. Is JS enabled for that domain?\\n\\n" + err.message);
            return false;
        }
        req.send(sendstr); // param string only used for POST

        if (req.readyState == 4) { // only if req is "loaded"
            if (req.status == 200) // only if "OK"
            {
                return req.responseText;
            } else {
                alert("stato: " + req.status);
                return false;
            }
        }
    }
    alert("Invio asincrono non supportato, prova cambiando Browser.");
}



function scriviPrezzo(prezzo, title) {
  if(typeof prezzo == "number") {
    prezzo = "Tot: " + prezzo.toFixed(2) + "€* + iva";

  } else {

  }
  document.getElementById("prezzo").getElementsByTagName("span")[0].innerHTML = prezzo;
  document.getElementById("prezzo").getElementsByTagName("span")[0].title = title;
  document.getElementById("prezzo").getElementsByTagName("input")[0].value = prezzo;
}
function getInputValue(id) {
  if(typeof formTag[id]["defVal"] == "boolean")
    return document.getElementById(id).getElementsByTagName(formTag[id]["input"])[0].checked;
  else
    return document.getElementById(id).getElementsByTagName(formTag[id]["input"])[0].value;
}
function getQuantitàListino(quantitaRichiesta, lista) {
  var ultimaQuantita = 0;
  for(ultimaQuantita in lista) {
    if(quantitaRichiesta <= ultimaQuantita)
      return ultimaQuantita;
  }
  return ultimaQuantita;
}
function calcolaPrezzo() {
  var quantita = parseInt(document.getElementById("quantita").getElementsByTagName("input")[0].value);
  if (isNaN(quantita) || quantita <= 0) {
    scriviPrezzo("Compila tutti i campi", "Per avere un preventivo immediato compila tutte le caratteristiche del prodotto");
    return;
  }
    //calcolaPrezzoTappeti();
    switch (window.document.title) {
        case "Grigoprint | Tappeto Personalizzato":
        case "Grigoprint | Tappeto Sottomoto":
            calcolaPrezzoTappeti();
            break;
        case "Grigoprint | Maniche a vento":
            calcolaPrezzoManicheAVento();
            break;
        case "Grigoprint | Gonfaloni":
            calcolaPrezzoGonfaloni();
            break;
        case "Grigoprint | Bean Banner":
            calcolaPrezzoBeanBanner();
            break;
        case "Grigoprint | Bandiere Bifacciali":
            calcolaPrezzoBandiereBifacciali();
            break;
        case "Grigoprint | Beach Flags":
            calcolaPrezzoBeachFlags();
            break;
        default:
            scriviPrezzo("Prezzo non supportato","Prezzo online non disponibile per questo prodotto");
            break;
    }
}
// zona calcolo prezzi
function calcolaPrezzoTappeti() {
    var ml;
    var altezzaTessuto;
    var altezza = parseInt(getInputValue("altezza"));
    var larghezza = parseInt(getInputValue("larghezza"));
    var quantita = parseInt(getInputValue("quantita"));

    // controllo validità input
    var valido = true;
    if (isNaN(larghezza) || larghezza <= 0) {
        document.getElementById("larghezza").classList.add("warn");
        valido = false;
    }
    if (isNaN(altezza) || altezza <= 0) {
        document.getElementById("altezza").classList.add("warn");
        valido = false;
    }
    if (isNaN(quantita) || quantita <= 0) {
        document.getElementById("quantita").classList.add("warn");
        valido = false;
    }
    if (!valido) {
        document.getElementById("prezzo").classList.add("warn");
        scriviPrezzo("Inserisci i dati", "Inserisci le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici");
        return;
    }
    // calcolo resa e consumo
    if (altezza > larghezza) {
        if (altezza <= 100) {
            ml = larghezza / 100 * quantita;
            altezzaTessuto = 100;
        } else if (altezza <= 150) {
            ml = larghezza / 100 * quantita;
            altezzaTessuto = 150;
        } else if (larghezza <= 100) {
            ml = altezza / 100 * quantita;
            altezzaTessuto = 100;
        } else if (larghezza <= 150) {
            ml = altezza / 100 * quantita;
            altezzaTessuto = 150;
        } else {
            scriviPrezzo("Richiedi su misura", "Misure troppo grandi, vi offriremo piu tappeti giuntati");
            return;
        }
    } else {
        if (larghezza <= 100) {
            ml = altezza / 100 * quantita;
            altezzaTessuto = 100;
        } else if (larghezza <= 150) {
            ml = altezza / 100 * quantita;
            altezzaTessuto = 150;
        } else if (altezza <= 100) {
            ml = larghezza / 100 * quantita;
            altezzaTessuto = 100;
        } else if (altezza <= 150) {
            ml = larghezza / 100 * quantita;
            altezzaTessuto = 150;
        } else {
            scriviPrezzo("Richiedi su misura", "Misure troppo grandi, vi offriremo più tappeti giuntati");
            return;
        }
    }
    // calcolo finale prezzo (cambiare il prezzo del listino)
    //         altezzaTessuto/metri lineari-->prezzo
    var listini = {100: {10:46.2,10000:39},
                   150: {10:66.8,10000:56} };
    var prezzo = ml * listini[altezzaTessuto][getQuantitàListino(ml,listini[altezzaTessuto])];

    scriviPrezzo(prezzo,"Prezzo indicativo che verrà confermato al momento della Richiesta");
}

function calcolaPrezzoManicheAVento() {
    var modello = getInputValue("modello");
    var tessuto = getInputValue("tessuto");
    var misura = getInputValue("misura");
    var finitura = getInputValue("finitura");
    var quantita = parseInt(getInputValue("quantita"));

    // controllo validità input
    var valido = true;
    if (modello == "") {
        document.getElementById("modello").classList.add("warn");
        valido = false;
    }
    if (tessuto == "") {
        document.getElementById("tessuto").classList.add("warn");
        valido = false;
    }
    if (misura == "") {
        document.getElementById("misura").classList.add("warn");
        valido = false;
    }
    if (finitura == "") {
        document.getElementById("finitura").classList.add("warn");
        //valido = false; // non necessaria per il prezzo, ma consigliata
    }
    if (isNaN(quantita) || quantita <= 0) {
        document.getElementById("quantita").classList.add("warn");
        valido = false;
    }
    if (!valido) {
        document.getElementById("prezzo").classList.add("warn");
        scriviPrezzo("Inserisci i dati", "Inserisci le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici");
        return;
    }
    // calcolo finale prezzo (cambiare il prezzo del listino)
    //         modello(personalizzata e non)|tessuto|altezzaTessuto-->prezzo
    var listini = {
        "non personalizzata": {
            "poliestere": {
                "400": "Non Disponibile in Poliestere",
                "350": "Non Disponibile in Poliestere",
                "300": 150,
                "260": 132,
                "200": 106,
                "150": 83,
                "130": 75,
                "108": 68
            },
            "acrilico": {
                "400": 730,
                "350": 507,
                "300": 330,
                "260": 291,
                "200": 234,
                "150": "Non Disponibile in Acrilico",
                "130": "Non Disponibile in Acrilico",
                "108": "Non Disponibile in Acrilico"
            }
        },
        "personalizzata": {
            "poliestere": {
                "400": 497,
                "350": 411,
                "300": 271,
                "260": 170,
                "200": 147,
                "150": 133,
                "130": 111,
                "108": 101
            }
        }
    };

    var prezzo = listini[modello][tessuto][misura];
    prezzo *= quantita;

    scriviPrezzo(prezzo,"Prezzo indicativo che verrà confermato al momento della Richiesta");
}
function calcolaPrezzoBeanBanner() {
    var misura = getInputValue("misura");
    var finitura = getInputValue("finitura");
    var quantita = parseInt(getInputValue("quantita"));

    // controllo validità input
    var valido = true;
    if (misura == "") {
        document.getElementById("misura").classList.add("warn");
        valido = false;
    }
    if (finitura == "") {
        document.getElementById("finitura").classList.add("warn");
        //valido = false; // non necessaria per il prezzo, ma consigliata
    }
    if (isNaN(quantita) || quantita <= 0) {
        document.getElementById("quantita").classList.add("warn");
        valido = false;
    }
    if (!valido) {
        document.getElementById("prezzo").classList.add("warn");
        scriviPrezzo("Inserisci i dati", "Inserisci le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici");
        return;
    }
    // calcolo finale prezzo (cambiare il prezzo del listino)
    //         misura|quantità-->prezzo
    var listini = {
        "50": {3:97,10:81,50:66,10000:60},
        "75": {3:150,10:131,50:108,10000:98},
        "100": {3:219,10:195,50:163,10000:148}
    };

    var prezzo = quantita * listini[misura][getQuantitàListino(quantita,listini[misura])];

    scriviPrezzo(prezzo,"Prezzo indicativo che verrà confermato al momento della Richiesta");
}
function calcolaPrezzoBandiereBifacciali() {
    var tessuto = getInputValue("tessuto");
    var misura = getInputValue("misura");
    var finitura = getInputValue("finitura");
    var quantita = parseInt(getInputValue("quantita"));

    // controllo validità input
    var valido = true;
    if (tessuto == "") {
        document.getElementById("tessuto").classList.add("warn");
        //valido = false; // non necessaria per il prezzo, ma consigliata
    }
    if (misura == "") {
        document.getElementById("misura").classList.add("warn");
        valido = false;
    }
    if (finitura == "") {
        document.getElementById("finitura").classList.add("warn");
        valido = false;
    }
    if (isNaN(quantita) || quantita <= 0) {
        document.getElementById("quantita").classList.add("warn");
        valido = false;
    }
    if (!valido) {
        document.getElementById("prezzo").classList.add("warn");
        scriviPrezzo("Inserisci i dati", "Inserisci le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici");
        return;
    }
    // calcolo finale prezzo (cambiare il prezzo del listino)
    //         dimensione/quantità-->prezzo
    var listini = {
        "70": {3:66,10000:60},
        "100": {3:108,10000:99},
        "150": {3:193,10000:177},
        "senza":-10,
        "oro":0,
        "argento":0
    };

    var prezzo = listini[misura][getQuantitàListino(quantita,listini[misura])] + listini[finitura];
    prezzo *= quantita;

    scriviPrezzo(prezzo,"Prezzo indicativo che verrà confermato al momento della Richiesta");
}

function calcolaPrezzoGonfaloni() {
    var tessuto = getInputValue("tessuto");
    var misura = getInputValue("misura");
    var struttura = getInputValue("struttura");
    var base = getInputValue("base");
    var borsa = getInputValue("borsa");
    var quantita = parseInt(getInputValue("quantita"));

    // controllo validità input
    var valido = true;
    if (tessuto == "") {
        document.getElementById("tessuto").classList.add("warn");
        valido = false;
    }
    if (misura = "") {
        document.getElementById("misura").classList.add("warn");
        valido = false;
    }
    if (struttura = "") {
        document.getElementById("struttura").classList.add("warn");
        valido = false;
    }
    if (base = "") {
        document.getElementById("base").classList.add("warn");
        valido = false;
    }
    if (isNaN(quantita) || quantita <= 0) {
        document.getElementById("quantita").classList.add("warn");
        valido = false;
    }
    if (!valido) {
        document.getElementById("prezzo").classList.add("warn");
        scriviPrezzo("Inserisci i dati", "Inserisci le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici");
        return;
    }
    // calcolo finale prezzo (cambiare il prezzo del listino)
    //         categoria/dimensione-->prezzo
    var listini = {
        "stampa": {
            50: 150,
            70: 206,
            80: 243,
            90: 318
        },
        "stuttura": {
            "senza": {
              50: 0,
              70: 0,
              80: 0,
              90: 0
            },
            "cromata": {
              50: 150,
              70: 152,
              80: 154,
              90: 156
            },
            "ottone": {
              50: 192,
              70: 194,
              80: 196,
              90: 259
            }
        },
        "base": {
            "senza": 0,
            "cromata": 37,
            "ottone": 64
        },
        "borsa":84
    };

    var prezzo = listini["stampa"][misura] + listini["struttura"][struttura][misura] + listini["base"][base];
    if(borsa)
      prezzo += listini["borsa"];
    prezzo *= quantita;

    scriviPrezzo(prezzo,"Prezzo indicativo che verrà confermato al momento della Richiesta");
}
function calcolaPrezzoBeachFlags() {
    var tessuto = getInputValue("tessuto");
    var modello = getInputValue("modello");
    var misura = getInputValue("misura");
    //var struttura = getInputValue("struttura");
    var finitura = getInputValue("finitura");
    var base = getInputValue("base");
    var quantita = parseInt(getInputValue("quantita"));

    // controllo validità input
    var valido = true;
    if (tessuto == "") {
        document.getElementById("tessuto").classList.add("warn");
        valido = false;
    }
    if (modello == "") {
        document.getElementById("modello").classList.add("warn");
        valido = false;
    }
    if (misura == "") {
        document.getElementById("misura").classList.add("warn");
        valido = false;
    }
    if ((modello=="goccia" || modello=="vela") && finitura == "") {
        document.getElementById("finitura").classList.add("warn");
        valido = false;
    }
    if (base == "") {
        document.getElementById("base").classList.add("warn");
        valido = false;
    }
    if (isNaN(quantita) || quantita <= 0) {
        document.getElementById("quantita").classList.add("warn");
        valido = false;
    }
    if (!valido) {
        document.getElementById("prezzo").classList.add("warn");
        scriviPrezzo("Inserisci i dati", "Inserisci le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici");
        return;
    }
    // calcolo finale prezzo (cambiare il prezzo del listino)
    //         tipo|misura/quantità-->prezzo
    var listini = {
        "goccia": {
            "stampa": {
                "xl":{3:99.8, 13:76.7, 50:68.4},
                "l": {3:80.4, 13:62.8, 50:57.2},
                "m": {3:66.6, 13:53.1, 50:43.3},
                "s": {3:51.8, 13:39.3, 50:31.9}
            },
            "struttura": {
                "xl":{10:29.3, 10000:25.5},
                "l": {10:23.5, 10000:20.4},
                "m": {10:20.6, 10000:17.90},
                "s": {10:17.5, 10000:15.2}
            },
            "base": {
                "senza":     {10:0,    10000:0},
                "croce":     {10:26.2, 10000:24.1},
                "19":        {10:26.7, 10000:24.5},
                "40":        {10:36.7, 10000:33.7},
                "d33":       {10:25.7, 10000:23.6},
                "piastra":   {10:97.8, 10000:89.7},
                "vite":      {10:21,   10000:19.2},
                "vitone":    {10:58.4, 10000:53.6},
                "picchetto": {10:40.5, 10000:37.1}
            },
            "finitura": {"normale":0,"stampata":5}
        },
        "vela":{
            "stampa": {
                "xl":{3:124.2, 13:102.4, 50:95.8},
                "l": {3:124.2, 13:102.4, 50:95.8},
                "m": {3:124.2, 13:102.4, 50:95.8},
                "s": {3:124.2, 13:102.4, 50:95.8}
            },
            "struttura": {
                "xl":{10:29.3, 10000:25.5},
                "l": {10:23.5, 10000:20.4},
                "m": {10:20.6, 10000:17.90},
                "s": {10:17.5, 10000:15.2}
            },
            "base": {
                "senza":     {10:0,    10000:0},
                "croce":     {10:26.2, 10000:24.1},
                "19":        {10:26.7, 10000:24.5},
                "40":        {10:36.7, 10000:33.7},
                "d33":       {10:25.7, 10000:23.6},
                "piastra":   {10:97.8, 10000:89.7},
                "vite":      {10:21,   10000:19.2},
                "vitone":    {10:58.4, 10000:53.6},
                "picchetto": {10:40.5, 10000:37.1}
            },
            "finitura": {"normale":0,"stampata":5}
        },
        "girevolissimo":{
            "stampa": {
                "70x200":  {3:30.1, 13:26,   50:23.7},
                "70x250":  {3:37.6, 13:32.5, 50:29.6},
                "70x300":  {3:45.1, 13:39,   50:35.5},
                "100x200": {3:47.9, 13:41.4, 50:40.2},
                "100x250": {3:59.9, 13:51.7, 50:50.3},
                "100x300": {3:71.9, 13:62.1, 50:60.4}
            },
            "struttura": {10:68, 10000:63},
            "base": {
                "senza":     {10:0,    10000:0},
                "19":        {10:14.6, 10000:13.3},
                "40":        {10:30.3, 10000:27.6},
                "vitone":    {10:52.2, 10000:47.5}
            },
            "finitura": {"":0}}
    };
console.log(listini["girevolissimo"]["struttura"]);
console.log(listini["girevolissimo"]["base"]["senza"]);
console.log(listini["girevolissimo"]["base"]["senza"][5]);
    var prezzo = listini[modello]["stampa"][misura][getQuantitàListino(quantita,listini[modello]["stampa"][misura])] +
                 listini[modello]["base"][base][getQuantitàListino(quantita,listini[modello]["base"][base])] +
                 listini[modello]["finitura"][finitura];
    if(modello == "girevolissimo") {
      prezzo += listini[modello]["struttura"][misura][getQuantitàListino(quantita,listini[modello]["struttura"][misura])];
    } else {
      prezzo += listini[modello]["struttura"][getQuantitàListino(quantita,listini[modello]["struttura"])];
    }
    prezzo *= quantita;

    scriviPrezzo(prezzo,"Prezzo indicativo che verrà confermato al momento della Richiesta");
}

if (document.getElementsByClassName('prezzo_select') != undefined) {
    document.getElementsByClassName('prezzo_select')[0].addEventListener("click", function() {
        document.getElementsByClassName('prezzo_select')[0].classList.add('clicked');
        document.getElementsByClassName('prezzo_select')[1].classList.add('clicked');
    });
}
// Selezione modello
function deselezionaGruppo(id) {
  var temp = document.getElementById(id).getElementsByTagName("a");
  for (var i of temp) {
    i.classList.remove("selected");
  }
}
function selezionaElemento(){
  var id = this.parentElement.id;
  // gestisco selezione
  deselezionaGruppo(id);
  this.classList.add("selected");
  // gestisco select nascosto
  var selezionato = this.getAttribute("data-options");
  this.parentElement.getElementsByTagName(formTag[id]["input"])[0].value = selezionato;
  // applico modificatori visibilita e cambio dati
  mostraNascondiSelect(id, selezionato);
}
var mappaAggiornaSelect = {"modello":{"vela":{"misura":["|Seleziona una Misura","s|S, h finale cm250","m|M, h finale cm310","l|L, h finale cm400","xl|XL, h finale cm470"],"finitura":["|Seleziona una Finitura","normale|Con fettuccia Bianca o Nera nel retro","stampata|Con fettuccia stampata"],"base":["|Seleziona una Base","senza|Senza base","croce|Base a croce con zavorra riempibile","19|Base in resina bianca, riempibile, da 19L","40|Base in resina nera da 40L","d33|Base disco resina da 33cm, riempite di cemento","piastra|Base a piastra in metallo","vite|Vite in plastica","vitone|Vitone in ferro zincato","picchetto|Picchetto in ferro zincato"]},
                                       "goccia":{"misura":["|Seleziona una Misura","s|S, h finale cm190","m|M, h finale cm230","l|L, h finale cm320","xl|XL, h finale cm410"],"finitura":["|Seleziona una Finitura","normale|Con fettuccia Bianca o Nera nel retro","stampata|Con fettuccia stampata"],"base":["|Seleziona una Base","senza|Senza base","croce|Base a croce con zavorra riempibile","19|Base in resina bianca, riempibile, da 19L","40|Base in resina nera da 40L","d33|Base disco resina da 33cm, riempite di cemento","piastra|Base a piastra in metallo","vite|Vite in plastica","vitone|Vitone in ferro zincato","picchetto|Picchetto in ferro zincato"]},
                                       "girevolissimo":{"misura":["|Seleziona una Misura","70x200|cm70x200","70x250|cm70x250","70x300|cm70x300","100x200|cm100x200","100x250|cm100x250","100x300|cm100x300"],"finitura":["|"],"base":["|Seleziona una Base","senza|Senza base","19|Base in resina bianca, riempibile, da 19L","40|Base in resina nera da 40L","vitone|Vitone in ferro zincato"]},
                                       "personalizzato":{"tessuto":["poliestere|Poliestere"]},
                                       "non personalizzato":{"tessuto":["|Seleziona una Tessuto","poliestere|Poliestere","acrilico|Acrilico"]}}};
function mostraNascondiSelect(id,select) {
  for(var key in mappaAggiornaSelect[id][select]) {
    if(mappaAggiornaSelect[id][select][key].length == 0) {
      document.getElementById(key).classList.add("blocca");
    } else {
      document.getElementById(key).classList.remove("blocca");
    }
    var options = "";
    for(var elem of mappaAggiornaSelect[id][select][key]){
      var sp = elem.split("|");
      options += "<option value=\""+sp[0]+"\">"+sp[1]+"</option>";
    }
    document.getElementById(key).getElementsByTagName("select")[0].innerHTML = options;
    document.getElementById(key).getElementsByTagName("select")[0].value = mappaAggiornaSelect[id][select][key][0].split("|")[0];
  }
}

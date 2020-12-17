// form classico
function clearInvalidName() {
  document.getElementById("name").classList.remove("invalid");
  clearSendButton();
}
function clearInvalidTelephone() {
  document.getElementById("telephone").classList.remove("invalid");
  clearSendButton();
}
function clearInvalidEmail() {
  document.getElementById("email").classList.remove("invalid");
  clearSendButton();
}
function clearInvalidMessage() {
  document.getElementById("message").classList.remove("invalid");
  clearSendButton();
}
function clearInvalidAgree() {
  document.getElementById("agree").classList.remove("invalid");
  clearSendButton();
}
// form prezzo
function clearInvalidAltezza() {
  document.getElementById("altezza").classList.remove("warn");
  document.getElementById("prezzo").classList.remove("warn");
  calcolaPrezzo();
}
function clearInvalidLarghezza() {
  document.getElementById("larghezza").classList.remove("warn");
  document.getElementById("prezzo").classList.remove("warn");
  calcolaPrezzo();
}
function clearInvalidQuantita() {
  document.getElementById("quantita").classList.remove("warn");
  document.getElementById("prezzo").classList.remove("warn");
  calcolaPrezzo();
}
function clearInvalidTessuto() {
  document.getElementById("select").classList.remove("warn");
  document.getElementById("prezzo").classList.remove("warn");
  calcolaPrezzo();
}
function calcolaPrezzo() {
  calcolaPrezzoTappeti();
  /*switch (window.document.title) {
    case "Grigoprint | Tappeto Prova":
      calcolaPrezzoTappeti();
      break;
    default:
      document.getElementById("prezzo").getElementsByTagName("span")[0].innerHTML  = "Prezzo non supportato";
      break;   
  }*/
  
}

function clearAllInput(){
  document.getElementById("name").classList.remove("invalid");
  document.getElementById("telephone").classList.remove("invalid");
  document.getElementById("email").classList.remove("invalid");
  document.getElementById("message").classList.remove("invalid");
  document.getElementById("agree").classList.remove("invalid");
  document.getElementById("altezza").classList.remove("warn");
  document.getElementById("larghezza").classList.remove("warn");
  document.getElementById("quantita").classList.remove("warn");
  document.getElementById("select").classList.remove("warn");
}
function clearAllInputData(){
  document.getElementById("name").getElementsByTagName("input")[0].value = "";
  document.getElementById("telephone").getElementsByTagName("input")[0].value = "";
  document.getElementById("email").getElementsByTagName("input")[0].value = "";
  document.getElementById("message").getElementsByTagName("textarea")[0].value = "";
  document.getElementById("agree").getElementsByTagName("input")[0].checked = false;
  document.getElementById("altezza").getElementsByTagName("input")[0].value = "";
  document.getElementById("larghezza").getElementsByTagName("input")[0].value = "";
  document.getElementById("quantita").getElementsByTagName("input")[0].value = "1";
  document.getElementById("select").getElementsByTagName("select")[0].value = "";
}
function clearSendButton() {
  var btnSend = document.getElementById("btn-send");
  if(!btnSend.classList.contains("standard")) {
    btnSend.classList.remove("onclick");
    btnSend.classList.remove("validate");
    btnSend.classList.remove("error");
    btnSend.classList.add("standard");
  }
}

document.addEventListener("DOMContentLoaded", function(event) {

  var elem = document.getElementById("name").getElementsByTagName("input")[0];
  elem.addEventListener("keydown", clearInvalidName);
  elem.addEventListener("cout", clearInvalidName);
  elem.addEventListener("paste", clearInvalidName);
  elem = document.getElementById("telephone").getElementsByTagName("input")[0];
  elem.addEventListener("keydown", clearInvalidTelephone);
  elem.addEventListener("cout", clearInvalidTelephone);
  elem.addEventListener("paste", clearInvalidTelephone);
  elem = document.getElementById("email").getElementsByTagName("input")[0];
  elem.addEventListener("keydown", clearInvalidEmail);
  elem.addEventListener("cout", clearInvalidEmail);
  elem.addEventListener("paste", clearInvalidEmail);
  elem = document.getElementById("message").getElementsByTagName("textarea")[0];
  elem.addEventListener("keydown", clearInvalidMessage);
  elem.addEventListener("cout", clearInvalidMessage);
  elem.addEventListener("paste", clearInvalidMessage);
  elem = document.getElementById("agree").getElementsByTagName("input")[0];
  elem.addEventListener("change", clearInvalidAgree);

  var elem = document.getElementById("altezza").getElementsByTagName("input")[0];
  elem.addEventListener("keydown", clearInvalidAltezza);
  elem.addEventListener("cout", clearInvalidAltezza);
  elem.addEventListener("paste", clearInvalidAltezza);
  elem.addEventListener("change", clearInvalidAltezza);
  elem = document.getElementById("larghezza").getElementsByTagName("input")[0];
  elem.addEventListener("keydown", clearInvalidLarghezza);
  elem.addEventListener("cout", clearInvalidLarghezza);
  elem.addEventListener("paste", clearInvalidLarghezza);
  elem.addEventListener("change", clearInvalidLarghezza);
  elem = document.getElementById("quantita").getElementsByTagName("input")[0];
  elem.addEventListener("keydown", clearInvalidQuantita);
  elem.addEventListener("cout", clearInvalidQuantita);
  elem.addEventListener("paste", clearInvalidQuantita);
  elem.addEventListener("change", clearInvalidQuantita);
  elem = document.getElementById("select").getElementsByTagName("select")[0];
  elem.addEventListener("keydown", clearInvalidTessuto);
  elem.addEventListener("change", clearInvalidTessuto);
});

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

  var respJSON = postAsync('/send_mail.php', data);
  btnSend.classList.remove("standard");
  btnSend.classList.remove("error");
  btnSend.classList.remove("validate");
  btnSend.classList.add("onclick");
  await sleep(200);
  if( 'string' === typeof respJSON) {
    //alert("Json: "+respJSON);
    var resp = JSON.parse(respJSON);
    //alert("json decodificato: "+resp);
    if(resp['form_ok'] && resp['inviata']) {// inviata, tutto ok
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
    } else if(resp['form_ok'] && !resp['inviata']) { // form corretta ma il server non riesce ad inviare l'email
      await sleep(500);
      // Do something after the sleep!
      clearAllInput();
      btnSend.classList.remove("onclick");
      btnSend.classList.add("error");
      await sleep(50);
      alert("campi giusti ma il server non invia");
    } else if(!resp['form_ok']) { // form NON corretto
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
        } catch(err) {
            alert("couldnt complete request. Is JS enabled for that domain?\\n\\n" + err.message);
            return false;
        }
        req.send(sendstr); // param string only used for POST

        if (req.readyState == 4) { // only if req is "loaded"
            if (req.status == 200)  // only if "OK"
                { return req.responseText; }
            else
                { alert("stato: "+req.status);return false; }
        }
    }
    alert("Invio asincrono non supportato, prova cambiando Browser.");
}


// zona calcolo prezzi
function calcolaPrezzoTappeti() {
  var ml;
  var altezzaTessuto;
  var altezza = parseInt(document.getElementById("altezza").getElementsByTagName("input")[0].value);
  var larghezza = parseInt(document.getElementById("larghezza").getElementsByTagName("input")[0].value);
  var quantita = parseInt(document.getElementById("quantita").getElementsByTagName("input")[0].value);
  var tessuto = document.getElementById("select").getElementsByTagName("select")[0].value;
  
  // controllo validità input
  var valido = true;
  if(isNaN(larghezza) || larghezza <=0) {
    document.getElementById("larghezza").classList.add("warn");
    valido = false;
  }
  if(isNaN(altezza) || altezza <=0) {
    document.getElementById("altezza").classList.add("warn");
    valido = false;
  }
  if(isNaN(quantita) || quantita <=0) {
    document.getElementById("quantita").classList.add("warn");
    valido = false;
  }
  if(tessuto == null || tessuto=="") {
    document.getElementById("select").classList.add("warn");
    valido = false;
  }
  if(!valido) {
    document.getElementById("prezzo").classList.add("warn");
    document.getElementById("prezzo").getElementsByTagName("span")[0].innerHTML  = "Inserisci i dati";
      document.getElementById("prezzo").getElementsByTagName("span")[0].title  = "Inserisci le informazioni prodotto se vuoi un preventivo immediato, oppure scrivici";
    return;
  }
 // calcolo resa e consumo
  if(altezza > larghezza){
    if(altezza <= 100) {
      ml = larghezza/100*quantita;
      altezzaTessuto=100;
    } else if(altezza <= 150) {
      ml = larghezza/100*quantita;
      altezzaTessuto=150;
    } else if(larghezza <= 100) {
      ml = altezza/100*quantita;
      altezzaTessuto=100;
    } else if(larghezza <= 150) {
      ml = altezza/100*quantita;
      altezzaTessuto=150;
    } else {
      document.getElementById("prezzo").getElementsByTagName("span")[0].innerHTML  = "Richiedi su misura";
      document.getElementById("prezzo").getElementsByTagName("span")[0].title  = "Misure troppo grandi, vi offriremo piu tappeti giuntati";
      return;
    }
  } else {
    if(larghezza <= 100) {
      ml = altezza/100*quantita;
      altezzaTessuto=100;
    } else if(larghezza <= 150) {
      ml = altezza/100*quantita;
      altezzaTessuto=150;
    } else if(altezza <= 100) {
      ml = larghezza/100*quantita;
      altezzaTessuto=100;
    } else if(altezza <= 150) {
      ml = larghezza/100*quantita;
      altezzaTessuto=150;
    } else {
          document.getElementById("prezzo").getElementsByTagName("span")[0].innerHTML  = "Richiedi su misura";
      document.getElementById("prezzo").getElementsByTagName("span")[0].title  = "Misure troppo grandi, vi offriremo più tappeti giuntati";
      return;
    }
  }
  // calcolo finale prezzo (cambiare il prezzo del listino)
  //         quantita|altezzaTessuto-->prezzo
  var listini = {0:{100:40,150:60},
                 10:{100:30,150:45}};
  var prezzo;
  if(ml<10) { // sconto quantita
    prezzo = ml*listini[0][altezzaTessuto];
  } else {
    prezzo = ml*listini[10][altezzaTessuto];
  }
  
  document.getElementById("prezzo").getElementsByTagName("span")[0].innerHTML  = "Tot: "+prezzo.toFixed(2)+"€ + iva";
}
// if (document.getElementsByClassName('prezzo_select') != undefined) {
//   document.getElementsByClassName('prezzo_select')[0].addEventListener("click", function () {
//     document.getElementsByClassName('prezzo_select')[0].classList.add('clicked');
//     document.getElementsByClassName('prezzo_select')[1].classList.add('clicked');
//   });
// }
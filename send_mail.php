<?php
if( $_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST) ){
    $nostraEmail = "info@bandieregrigolini.it";
    //form validation vars
    $ref_page = $_SERVER["HTTP_REFERER"];
    $formok = true;
    $errors = array();
    $priceInput = array("prodotto","modello", "altezza", "larghezza", "misura", "tessuto", "finitura", "struttura", "base", "borsa", "spedizione", "quantita", "prezzo");

    //submission data
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    $date = date('d/m/Y');
    $time = date('H:i:s');

    //form data
    $name = ucfirst($_POST['name']);
    $company = ucfirst($_POST['company']);
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
	  //$captcha = $_POST['captcha'];
	  $agree = $_POST['agree'];

    //Validation
    // controllo campo nascosto per stanare i bot
    if(!empty($_POST['bott'])){
        $formok = false;
        $errors[] = 'Compilazione automatica non ammessa';
    }
    //nome
    if(empty($name)){
        $formok = false;
        $errors[] = 'name';// Array('name' => "Non hai inserito un nome");
    } elseif(strlen($message) < 3) {
        $formok = false;
        $errors[] = 'message';// Array('message' => "Scrivi un messaggio con pi&ugrave; di 3 caratteri");
    }
    //email
    if(empty($email)){
        $formok = false;
        $errors[] = 'email';// Array('email' => "Non hai inserito una email");
    //validate email address is valid
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $formok = false;
        $errors[] = 'email';// Array('email' => "Non hai inserito una email corretta");
    }
    // telefono
    if(!empty($telephone) && !filter_var($telephone, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^[+]?[0-9 ]*$/")))) {
        $formok = false;
        $errors[] = 'telephone';// Array('telephone' => "Non hai inserito un numero corretto");
    }
    //message
    if(empty($message)){
        $formok = false;
        $errors[] = 'message';// Array('message' => "Non hai inserito il messaggio");
    //validate message length
    } elseif(strlen($message) < 20) {
        $formok = false;
        $errors[] = 'message';// Array('message' => "Scrivi un messaggio con pi&ugrave; di 20 caratteri");
    }
    // accetto termini e condizioni
    if(!$agree){
        $formok = false;
        $errors[] = 'agree';// Array('name' => "Non hai inserito un nome");
    }
	//recaptcha
	// if($captcha == false){
	// 	$formok = false;
	// 	$errors[] = 'captcha' => "Per favore controlla il captcha.";
	// }
	// $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LetxOMSAAAAAIFqxOd5Cqy6EZpE50yMHe6hFkbW&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
  //  	if($response.success==false){
	// 	$formok = false;
  //     	$errors[] = 'captcha' => "Per favore controlla il captcha.";
	// }

    //send mail if ok
    $inviata = false;
    if($formok) {
    	$preventivo = "";
      $preventivoDaInviare = "";
      foreach ($priceInput as $value) {
        if($_POST[$value] && $_POST[$value] != "")
          if($value != "prezzo" || $preventivo != "") {
      		  $preventivo .= "<p><strong>{$value}:</strong> {$_POST[$value]}</p>";
            $preventivoDaInviare .= rowTable($value, $_POST[$value]);
          }
      }
    	if($preventivo != "") {
    		$preventivo = "</br><p><strong>Preventivo online:</p> ".$preventivo."</br>";
        $preventivoDaInviare = '<hr/><table align="center" class="container" style="Margin: 0 auto; background: rgba(244,244,244,1); border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 580px;">
<tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;"><table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 274px;">
<table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><strong>Preventivo generato online</strong></th></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table>'
.$preventivoDaInviare.
'<table align="center" class="container" style="Margin: 0 auto; background: rgba(244,244,244,1); border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 580px;">
<tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;"><table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 274px;">
<table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">* NB. i prezzi generati online non sono garantiti, ci riserviamo di correggere eventuali errori di listino involontari.</th></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table>';
      }

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type:text/html;charset=utf-8" . "\r\n";
        $headers .= "From: $email" . "\r\n";

        $emailbody = "
                     <html>
                     <head>
                     <title>Contatto dal tuo sito</title>
                     </head>
                     <body>
                     <p><strong>Nome:</strong> {$name}</p>
                     <p><strong>Email:</strong> {$email}</p>
                     <p><strong>Azienda:</strong> {$company}</p>
                     <p><strong>Telefono:</strong> {$telephone}</p>
                     <p><strong>Messaggio:</strong> {$message}</p>
                     </br>
		     {$preventivo}
                     </body>
                     </html>";

        $inviata = mail($nostraEmail,"Contatto dal tuo sito",$emailbody,$headers);

// email recap al cliente
    	if($inviata) {
    		$headers = "MIME-Version: 1.0" . "\r\n";
            	$headers .= "Content-Type:text/html;charset=utf-8" . "\r\n";
            	$headers .= "From: $nostraEmail" . "\r\n";

            	$emailbody = testoEmail($name, $email, $company, $telephone, $message, $preventivoDaInviare);

            	if(!mail($email,"Grazie di averci contattato",$emailbody,$headers)) {
                // avviso in azienda dell'errore
                mail($nostraEmail,"Errore dal tuo sito","Errore nel mandare la mail di risposta automatica al cliente.",$headers);
              }
    	 }
    }

    //what we neet to return back to our form
    $returndata = array(
      'inviata' => $inviata,
      'form_ok' => $formok,
      'errors' => $errors
    );

    // rispondo alla richiesta
    echo json_encode($returndata);

    // if(empty($_SERVER['HTTP_X_REQUEST_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
    //
    // //set session variables
    // session_start();
    // $_SESSION['cf_returndata'] = $returndata;
    //
    // //redirect back to form
    // header('location: ' . $_SERVER['HTTP_REFERER']);
    // }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
}

function rowTable($key, $value) {
  $key = ucfirst($key);
  return '<table align="center" class="container" style="Margin: 0 auto; background: rgba(244,244,244,1); border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 580px;">
    <tbody>
      <tr style="padding: 0; text-align: left; vertical-align: top;">
        <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
          <table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
            <tbody>
              <tr style="padding: 0; text-align: left; vertical-align: top;">
                <th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 274px;">
                  <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                    <tbody>
                      <tr style="padding: 0; text-align: left; vertical-align: top;">
                        <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><strong>'.$key.'</strong></th>
                      </tr>
                    </tbody>
                  </table>
                </th>
                <th class="small-6 large-6 columns last" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; text-align: left; width: 274px;">
                  <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                    <tbody>
                      <tr style="padding: 0; text-align: left; vertical-align: top;">
                        <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">'.$value.'</th>
                      </tr>
                    </tbody>
                  </table>
                </th>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>';
}
function testoEmail($name, $email, $company, $telephone, $message, $preventivo) {
  return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Title</title>

  </head>

  <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; Margin: 0; box-sizing: border-box; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; min-width: 100%; padding: 0; text-align: left; width: 100% !important;">
    <style>
      @media only screen {
        html {
          min-height: 100%;
          background: rgba(244, 244, 244, 1);
        }
      }

      @media only screen and (max-width: 596px) {
        .small-float-center {
          margin: 0 auto !important;
          float: none !important;
          text-align: center !important;
        }
        .small-text-center {
          text-align: center !important;
        }
        .small-text-left {
          text-align: left !important;
        }
        .small-text-right {
          text-align: right !important;
        }
      }

      @media only screen and (max-width: 596px) {
        .hide-for-large {
          display: block !important;
          width: auto !important;
          overflow: visible !important;
          max-height: none !important;
          font-size: inherit !important;
          line-height: inherit !important;
        }
      }

      @media only screen and (max-width: 596px) {
        table.body table.container .hide-for-large,
        table.body table.container .row.hide-for-large {
          display: table !important;
          width: 100% !important;
        }
      }

      @media only screen and (max-width: 596px) {
        table.body table.container .callout-inner.hide-for-large {
          display: table-cell !important;
          width: 100% !important;
        }
      }

      @media only screen and (max-width: 596px) {
        table.body table.container .show-for-large {
          display: none !important;
          width: 0;
          mso-hide: all;
          overflow: hidden;
        }
      }

      @media only screen and (max-width: 596px) {
        table.body img {
          width: auto;
          height: auto;
        }
        table.body center {
          min-width: 0 !important;
        }
        table.body .container {
          width: 95% !important;
        }
        table.body .columns,
        table.body .column {
          height: auto !important;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
        table.body .columns .column,
        table.body .columns .columns,
        table.body .column .column,
        table.body .column .columns {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        table.body .collapse .columns,
        table.body .collapse .column {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        td.small-1,
        th.small-1 {
          display: inline-block !important;
          width: 8.33333% !important;
        }
        td.small-2,
        th.small-2 {
          display: inline-block !important;
          width: 16.66667% !important;
        }
        td.small-3,
        th.small-3 {
          display: inline-block !important;
          width: 25% !important;
        }
        td.small-4,
        th.small-4 {
          display: inline-block !important;
          width: 33.33333% !important;
        }
        td.small-5,
        th.small-5 {
          display: inline-block !important;
          width: 41.66667% !important;
        }
        td.small-6,
        th.small-6 {
          display: inline-block !important;
          width: 50% !important;
        }
        td.small-7,
        th.small-7 {
          display: inline-block !important;
          width: 58.33333% !important;
        }
        td.small-8,
        th.small-8 {
          display: inline-block !important;
          width: 66.66667% !important;
        }
        td.small-9,
        th.small-9 {
          display: inline-block !important;
          width: 75% !important;
        }
        td.small-10,
        th.small-10 {
          display: inline-block !important;
          width: 83.33333% !important;
        }
        td.small-11,
        th.small-11 {
          display: inline-block !important;
          width: 91.66667% !important;
        }
        td.small-12,
        th.small-12 {
          display: inline-block !important;
          width: 100% !important;
        }
        .columns td.small-12,
        .column td.small-12,
        .columns th.small-12,
        .column th.small-12 {
          display: block !important;
          width: 100% !important;
        }
        table.body td.small-offset-1,
        table.body th.small-offset-1 {
          margin-left: 8.33333% !important;
          Margin-left: 8.33333% !important;
        }
        table.body td.small-offset-2,
        table.body th.small-offset-2 {
          margin-left: 16.66667% !important;
          Margin-left: 16.66667% !important;
        }
        table.body td.small-offset-3,
        table.body th.small-offset-3 {
          margin-left: 25% !important;
          Margin-left: 25% !important;
        }
        table.body td.small-offset-4,
        table.body th.small-offset-4 {
          margin-left: 33.33333% !important;
          Margin-left: 33.33333% !important;
        }
        table.body td.small-offset-5,
        table.body th.small-offset-5 {
          margin-left: 41.66667% !important;
          Margin-left: 41.66667% !important;
        }
        table.body td.small-offset-6,
        table.body th.small-offset-6 {
          margin-left: 50% !important;
          Margin-left: 50% !important;
        }
        table.body td.small-offset-7,
        table.body th.small-offset-7 {
          margin-left: 58.33333% !important;
          Margin-left: 58.33333% !important;
        }
        table.body td.small-offset-8,
        table.body th.small-offset-8 {
          margin-left: 66.66667% !important;
          Margin-left: 66.66667% !important;
        }
        table.body td.small-offset-9,
        table.body th.small-offset-9 {
          margin-left: 75% !important;
          Margin-left: 75% !important;
        }
        table.body td.small-offset-10,
        table.body th.small-offset-10 {
          margin-left: 83.33333% !important;
          Margin-left: 83.33333% !important;
        }
        table.body td.small-offset-11,
        table.body th.small-offset-11 {
          margin-left: 91.66667% !important;
          Margin-left: 91.66667% !important;
        }
        table.body table.columns td.expander,
        table.body table.columns th.expander {
          display: none !important;
        }
        table.body .right-text-pad,
        table.body .text-pad-right {
          padding-left: 10px !important;
        }
        table.body .left-text-pad,
        table.body .text-pad-left {
          padding-right: 10px !important;
        }
        table.menu {
          width: 100% !important;
        }
        table.menu td,
        table.menu th {
          width: auto !important;
          display: inline-block !important;
        }
        table.menu.vertical td,
        table.menu.vertical th,
        table.menu.small-vertical td,
        table.menu.small-vertical th {
          display: block !important;
        }
        table.menu[align="center"] {
          width: auto !important;
        }
        table.button.small-expand,
        table.button.small-expanded {
          width: 100% !important;
        }
        table.button.small-expand table,
        table.button.small-expanded table {
          width: 100%;
        }
        table.button.small-expand table a,
        table.button.small-expanded table a {
          text-align: center !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        table.button.small-expand center,
        table.button.small-expanded center {
          min-width: 0;
        }
      }
    </style>
    <!-- <style> -->
    <table class="body" data-made-with-foundation="" style="Margin: 0; background: rgba(244,244,244,1); border-collapse: collapse; border-spacing: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; height: 100%; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
      <tbody>
        <tr style="padding: 0; text-align: left; vertical-align: top;">
          <td class="float-center" align="center" valign="top" style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #29353B; float: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding: 0; text-align: center; vertical-align: top; word-wrap: break-word;">
            <center style="min-width: 580px; width: 100%;">
              <table class="container" style="Margin: 0 auto; background: rgba(244,244,244,1); border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 580px;">
                <tbody>
                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                      <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                        <tbody>
                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                            <th class="small-12 large-12 first columns" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 564px;">
                              <img src="http://grigoprint.it/assets/images/logo.png" alt=" Logo Grigopring" style="-ms-interpolation-mode: bicubic; clear: both; display: block; margin: auto; max-width: 100%; outline: none; padding-top: 20px; text-decoration: none; width: 250px;">
                            </th>

                            <th class="expander" style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th>
                          </tr>
                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                            <th class="small-12 large-12 " style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 8px; padding-right: 8px; text-align: left; width: 564px;">
                              <h3 style="Margin: 0; Margin-bottom: 10px; color: inherit; font-family: Helvetica, Arial, sans-serif; font-size: 28px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">Gentile <strong>'.$name.'</strong> grazie per averci contattato</h3>
                              <hr>
                            </th>
                            <th class="expander" style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th>
                          </tr>

                        </tbody>
                      </table>
                      <table align="center" class="container" style="Margin: 0 auto; background: rgba(244,244,244,1); border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 580px;">
                        <tbody>
                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                            <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                              <table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><strong>Nome</strong></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                    <th class="small-6 large-6 columns last" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">'.$name.'</th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><strong>e-mail</strong></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                    <th class="small-6 large-6 columns last" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">'.$email.'</th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><strong>Azienda</strong></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                    <th class="small-6 large-6 columns last" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">'.$company.'</th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-6 large-6 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><strong>Telefono</strong></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                    <th class="small-6 large-6 columns last" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; text-align: left; width: 274px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">'.$telephone.'</th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-12 large-12 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 564px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><strong>Messaggio</strong></th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="row preventivo" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <th class="small-12 large-12 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 564px;">
                                      <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">'.$message.'</th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                              '.$preventivo.'
                              <!-- FOOTER -->
                              <table class="wrapper secondary" align="center" style="background: #29353B; border-collapse: collapse; border-spacing: 0; color: rgba(244,244,244,1); padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                <tbody>
                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                    <td class="wrapper-inner" style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                                      <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <td height="16px" style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">&amp;nbsp;</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th class="small-12 large-12 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 564px;">
                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                                                      <p style="Margin: 0; Margin-bottom: 10px; color: rgba(244,244,244,1); font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Cogliamo l\'occasione per inviarele il nostro listino prezzi:</p>
                                                    </td>
                                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                                                      <table class="button" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0 0 16px 0; padding: 0; text-align: left; vertical-align: top; width: auto;">
                                                        <tbody>
                                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                            <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                                <tbody>
                                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; background: #29353B; border: 2px solid #2199e8; border-collapse: collapse !important; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;"><a href="https://www.grigoprint.it/listini/catalogo_4.pdf" style="Margin: 0; border: 0 solid #2199e8; border-radius: 3px; color: #fefefe; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">Scarica</a></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <hr>
                                      <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;">
                                        <tbody>
                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                            <th class="small-12 large-12 columns first" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 564px;">
                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                                                      <h5 style="Margin: 0; Margin-bottom: 10px; color: rgba(244,244,244,1); font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">Social:</h5>
                                                      <table align="left" class="menu vertical" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                        <tbody>
                                                          <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                            <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                                <tbody>
                                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #29353B; display: block; float: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding: 10px; padding-right: 0; text-align: left; vertical-align: top; word-wrap: break-word;"
                                                                      class="menu-item float-center"><a href="#" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none; width: 100%;">Twitter</a></td>
                                                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #29353B; display: block; float: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding: 10px; padding-right: 0; text-align: left; vertical-align: top; word-wrap: break-word;"
                                                                      class="menu-item float-center"><a href="#" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none; width: 100%;">Facebook</a></td>
                                                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #29353B; display: block; float: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding: 10px; padding-right: 0; text-align: left; vertical-align: top; word-wrap: break-word;"
                                                                      class="menu-item float-center"><a href="#" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none; width: 100%;">Instagram</a></td>
                                                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #29353B; display: block; float: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding: 10px; padding-right: 0; text-align: left; vertical-align: top; word-wrap: break-word;"
                                                                      class="menu-item float-center"><a href="#" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none; width: 100%;">Pinterest</a></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                            <th class="small-12 large-6 columns last" style="Margin: 0 auto; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; text-align: left; width: 274px;">
                                              <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;">
                                                <tbody>
                                                  <tr style="padding: 0; text-align: left; vertical-align: top;">
                                                    <th style="Margin: 0; color: #29353B; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                                                      <h5 style="Margin: 0; Margin-bottom: 10px; color: rgba(244,244,244,1); font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">Informazioni di contatto:</h5>
                                                      <p style="Margin: 0; Margin-bottom: 10px; color: rgba(244,244,244,1); font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Tel: +39 045 7834054</p>
                                                      <p style="Margin: 0; Margin-bottom: 10px; color: rgba(244,244,244,1); font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Email: <a href="mailto:info@bandieregrigolini.it" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">info@bandieregrigolini.it</a></p>
                                                    </th>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </td>
        </tr>
      </tbody>
    </table>



  </body>

  </html>';
}
?>

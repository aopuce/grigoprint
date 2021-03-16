<?php
if( $_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST) ){
    $nostraEmail = "info@bandieregrigolini.it";
    //form validation vars
    $ref_page = $_SERVER["HTTP_REFERER"];
    $formok = true;
    $errors = array();
    $priceInput = array("modello", "altezza", "larghezza", "misura", "tessuto", "finitura", "struttura", "base", "borsa", "spedizione", "quantita", "prezzo");

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
      foreach ($priceInput as $value) {
        if($_POST[$value] && $_POST[$value] != "")
          if($value != "prezzo" || $preventivo != "")
      		  $preventivo .= "<p><strong>{$value}:</strong> {$_POST[$value]}</p>";
      }
    	if($preventivo != "")
    		$preventivo = "</br><p><strong>Preventivo online per:</strong>".$_POST["prodotto"]."</p> ".$preventivo."</br>* NB. i prezzi generati online non sono garantiti, ci riserviamo di correggere eventuali errori di listino involontari.";


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

            	$emailbody = "
                         <html>
                         <head>
                         <title>Grazie di averci contattato</title>
                         </head>
                         <body>
                         <p>Gentile {$name}, </br>grazie per averci conttattato, le risponderemo al più presto!</p>
                         <p>Ecco una copia del suo messaggio:</br> {$message}</p>
                         </br>
    		                   {$preventivo}
                         </br>
                         <p>Colgliamo l'occasione per mandarle il nostro listino prezzi, che può scaricare da qui:<br>
                         <a href='http://www.grigoprint.it/listini/catalogo_4.pdf'>http://www.grigoprint.it/listini/catalogo_4.pdf</a></p>
                         <br>
                         <p>Cordiali saluti</p>
                         <p>Ombrellificio Grigolini di Grigolini Marcello</p>
                          <img src=\"https://www.grigoprint.it/assets/images/logo.png\" alt=\"\" width=\"250\" height=\"60\" style=\"margin-left: 15px;\"><br>
                          <p style=\"font-family: sans-serif; margin: 0; margin-left: 30px; font-size: 14px; padding-top: 3px;\"><b>Ombrellificio Grigolini</b><em style=\"font-size: 12px;\"> di Grigolini Marcello</em></p>
                          <p style=\"font-family: sans-serif; margin: 0; margin-left: 30px; font-size: 14px; padding-top: 3px;\">Loc. Sant'Antonio, 2 <br>
                          37031 Illasi (VR)
                          </p>

                          <p style=\"font-family: sans-serif; margin: 0; margin-top: 12px; margin-left: 30px; font-size: 14px;\"><strong style=\"font-size:  15px;\">Tel:</strong> +39 045 7834054</p>

                          <p style=\"font-family: sans-serif; margin: 0; margin-top: 12px; margin-left: 30px; font-size: 14px;\"><strong style=\"font-size:  15px;\">e-mail:</strong><a href=\"mailto:info@bandieregrigolini.it\"> info@bandieregrigolini.it</a></p>
                          <p style=\"font-family: sans-serif; margin: 0; margin-left: 30px; font-size: 14px; padding-top: 3px;\"><strong style=\"font-size:  15px;\">Web:</strong><a href=\"https://www.grigoprint.it\"> www.grigoprint.it</a></p>

                          <p style=\"font-family: sans-serif; margin: 0; margin-top: 12px; margin-left: 30px; font-size: 14px;\"><strong style=\"font-size:  15px;\">Dati Azienda:</strong><a href=\"https://www.grigoprint.it/contatti.html\"> www.grigoprint.it/contatti</a></p>

                         </body>
                         </html>";

            	mail($email,"Grazie di averci contattato",$emailbody,$headers);
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
?>

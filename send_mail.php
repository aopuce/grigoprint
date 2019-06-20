<?php
if( $_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST) ){
    $nostraEmail = "info@bandieregrigolini.it";
    //form validation vars
    $formok = true;
    $errors = array();

    //submission data
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    $date = date('d/m/Y');
    $time = date('H:i:s');

    //form data
    $name = $_POST['name'];
    $company = $_POST['company'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
	  //$captcha = $_POST['captcha'];
	  $agree = $_POST['agree'];

    //Validation
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
    if($formok){
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
                     <p></p>
                     <p><strong>Indirizzo IP:</strong> {$ipaddress} in {$date} alle {$time}</p>
                     </body>
                     </html>";

        $inviata = mail($nostraEmail,"Contatto dal tuo sito",$emailbody,$headers);
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

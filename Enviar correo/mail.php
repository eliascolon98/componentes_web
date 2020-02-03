<?php
	if (!isset($_SESSION)) session_start();		
	if(!$_POST) exit;
	
	//PHP Mailer
	require_once(dirname(__FILE__)."/tools/phpmailer/PHPMailerAutoload.php");
	//Captura los campos requeridos
    $email = $_POST['email'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $comentario = $_POST['mensaje'];

 
        
        $toName = "Inscripciones Aunar";//Nombre de quien recibe
		$toAddress = "inscripciones@aunarcartagena.edu.co";//Correo de quien recibe
        $email = $email;//Correo de quien envía
        $toName2 =$nombre;//Nombre de quien envía
        if (!strlen($error)) {
			if(get_magic_quotes_gpc()) {
				$message = stripslashes($message);
			}
			
			$email_subject = "Contacto Aunar";
			
			$email_body = "<fieldset><center>
			<p>La persona: <b>".$nombre."</b> se contactó mediante la página</p>
			<p>Email: <b>".$email.".</b></p> 
			<p> Telefono: <b>".$telefono.".</b></p>
			<p> Mensaje: <b>".$comentario.".</b></p>
			
			
			</p></center></fieldset>";
							
			
			$objmail = new PHPMailer();
			
			//Usar esta linea si tu quieres usar la funcion mail de PHP
			$objmail->IsMail();
			
			//Usar el siguiente codigo si quieres usar el metodo  SMTP  para enviar el mail
			/*			
			$objmail->IsSMTP();		
			$objmail->SMTPAuth = true;
			$objmail->Host = "mail.yourdomain.com";
			$objmail->Port = 587;	// Puedes remover esta linea sino necesitas establecer un puerto smtp
			$objmail->Username = "example@yourdomain.com";
			$objmail->Password = "email_address_password";
			*/
			$objmail->From = $email;
			$objmail->FromName = $toName2;
			$objmail->AddAddress($toAddress, $toName);	
			$objmail->AddReplyTo($email, $name);
			$objmail->Subject = $email_subject;
			$objmail->MsgHTML($email_body);
			if(!$objmail->Send()) {
				$error = "Error al enviar el mensaje : ".$objmail->ErrorInfo;
								echo $error;

			}	
		}

		//Result
		if ($error!="") {
		echo $error."<script>notificationReady('fail');</script>";
		} else {
		echo 1;
		}
	
	    //Verifica la dirección de correo electrónico
	    function isEmail($value) {
	    	return preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/", $value);
	    }


?>


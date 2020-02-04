<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


$mail = new PHPMailer(true);

    require("conexion.php");
    $con=con();

    $email = $_POST['email'];
    $sel="SELECT * FROM datos_contacto where email = '$email'";
    $res=mysqli_query($con,$sel) or die(mysqli_error($con));
    $row = mysqli_fetch_array($res);

    $sql="SELECT * FROM usuarios where id_usuario = '$row[1]'";
    $res2=mysqli_query($con,$sql) or die(mysqli_error($con));
    $row2 = mysqli_fetch_array($res2);

    if (mysqli_num_rows($res) > 0){
        try {
            //Server settings
            $mail->SMTPDebug = 0;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'dantecolon98@gmail.com';                     // SMTP username
            $mail->Password   = '3135813422';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;                                    // TCP port to connect to
            $mail->CharSet = 'UTF-8';

            //Recipients
            $mail->setFrom('dantecolon98@gmail.com', 'ELias colon');
            $mail->addAddress($email, $row[4]);     // Add a recipient
            // Content
            $mail->isHTML(true);   
            $mail->Subject = $asunto = 'Pin para reestablecer clave';
            $Subject = "=?ISO-8859-1?B?".base64_encode($asunto)."=?="; 
            $mail->Body    = '<html>
            <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Correo de recuperación de contraseña</title>
             <link rel="stylesheet" href="" />
            </head>
            <body>
                <h2>Hemos oído que usted perdió su contraseña, ¡Lo sentimos por eso!</h4> 
                <h4>¡Pero no se preocupe! Puede utilizar el siguiente enlace para restablecer la contraseña:<h4>
                <a href="http://localhost/Globalconsulting/global-admin/cambiarPass.html#'. $row2['pin'].'">
                http://localhost/Globalconsulting/global-admin/cambiarPass.html#'. $row2['pin'].'
                </a>
            </div>
            </body>
            </html>';
        
            $mail->send();
            
            echo 1;

        } catch (Exception $e) {
            echo 3;
        }
    }else{
        echo 2;
    }




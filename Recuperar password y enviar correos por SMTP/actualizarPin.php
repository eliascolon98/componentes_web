<?php
require("conexion.php");
$con=con();
/*Recuperamos los dato enviados*/
// $res = $_POST['request'];
$res = "send";
$email = $_POST['email'];

/*Validamos que si el dato enviado es SEND el PIN del
usuario que ingresó su correo se le actualizará*/
if($res == "send"){

    $sel="SELECT * FROM datos_contacto where email = '$email'";
    $res=mysqli_query($con,$sel) or die(mysqli_error($con));
    $row = mysqli_fetch_array($res);
    $id = $row[1];

    $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
    function generate_string($input, $strength = 16) {
    $input_length = strlen($input);
    $random_string = '';
    for($i = 0; $i < $strength; $i++) {
        $random_character = $input[mt_rand(0, $input_length - 1)];
        $random_string .= $random_character;
    }
    return $random_string;
    }

    $pinRand = generate_string($permitted_chars, 50);
    $sql="UPDATE usuarios set pin = '$pinRand' where id_usuario = '$id'";
    $res=mysqli_query($con,$sql) or die(mysqli_error($con));
}






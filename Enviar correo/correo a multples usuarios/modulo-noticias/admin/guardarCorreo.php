<?php
require_once 'conexion.php';
$con = Conect();

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$cat = $_POST["cat"];


$sql = "SELECT * from correos WHERE id = " . $cat;
    
    $res = mysqli_query($con, $sql);
    
    $registros = mysqli_fetch_array($res);
    
    $mail_list = json_decode($registros['email'], true);

    $new_mail_item = array("nombre"=>$nombre,"email"=>$email);
    array_push($mail_list, $new_mail_item);
    
    
    $encoded_mail_list = json_encode($mail_list);
    $id = $registros['id'];

$guardar = "UPDATE `correos` SET `email` = '$encoded_mail_list' WHERE `correos`.`id` = $id;";
$res = mysqli_query($con, $guardar);
header("location: correos.php");
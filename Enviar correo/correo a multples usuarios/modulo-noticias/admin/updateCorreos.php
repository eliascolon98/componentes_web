<?php
require_once 'conexion.php';
$con = Conect();

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$emailold = $_POST["emailold"];
$categ = $_POST["catg"];


$sql = "SELECT * from correos WHERE id=$categ;";
$res = mysqli_query($con, $sql);


$selected_item = false;
$selected_cat = false;
while($registro = mysqli_fetch_array($res)){
   $mail_list = json_decode($registro['email']);
   for($i=0; $i < count($mail_list);$i++){
         if($mail_list[$i]->email == $emailold){
           $mail_list[$i]->nombre = $nombre;
           $mail_list[$i]->email = $email;

           break;
         }
   } 

} 

print_r($mail_list);

$encoded_mail_list = json_encode($mail_list);
echo $encoded_mail_list;
$id = $categ;

$actualiza = "UPDATE `correos` SET `email` = '$encoded_mail_list' WHERE `correos`.`id` = $id;";
$res = mysqli_query($con, $actualiza);
header("location: correos.php");


?>
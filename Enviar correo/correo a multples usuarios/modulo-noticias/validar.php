<?php

require("admin/conexion.php");

$con=conect();


$nombre=$_REQUEST["user"];
$password=$_REQUEST["pass"];

$qry="SELECT usuario FROM usuarios WHERE usuario ='$nombre' and password ='$password' ";
$sql=mysqli_query($con,$qry);

$row = mysqli_fetch_row($sql);

if (mysqli_num_rows($sql) > 0) {
    // output data of each row
    session_start(); 
      //Guardamos dos variables de sesión que nos auxiliará para saber si se está o no "logueado" un usuario 
      $_SESSION["autentica"] = "SIP"; 
      $_SESSION["usuarioactual"] =  $row[0]; 
     header ("Location: admin/index.php");
      //nombre del usuario logueado. 
      //Direccionamos a nuestra página principal del sistema. 

     
} else {
        
 header ("Location: index.html");


}
?>
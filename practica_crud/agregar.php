<?php
include("conexion.php");

$nombre = $_REQUEST["nombre"];
$apellido = $_REQUEST["apellido"];

$con = con();

mysqli_query($con, "insert into datos_p (nombre, apellido) values ('$nombre', '$apellido')");
// echo "<script>alert('usuario guardado'); location.reload();</script>";
header("location: google.com.co");

?>
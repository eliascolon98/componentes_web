<?php
require_once 'conexion.php';
$id=$_REQUEST["id"];
$usuario=$_REQUEST["usuario"];
$pass=$_REQUEST["pass"];
$nombre=$_REQUEST["nombre"];
$telefono=$_REQUEST["telefono"];
$cargo=$_REQUEST["cargo"];
$dependencia=$_REQUEST["dependencia"];
$foto=$_FILES["imagen"]["name"];
$ruta=$_FILES["imagen"]["tmp_name"];
$destino="images/".$foto;
$comparador="images/";

if($destino == $comparador){
    $con = Conect();
    $qry=mysqli_query($con,"update usuarios set usuario='$usuario', password='$pass', nombre='$nombre', telefono='$telefono', cargo='$cargo', dependencia='$dependencia' where id='$id'");   
    
}else{
    $con = Conect();
    copy($ruta,$destino); 
    $qry=mysqli_query($con,"update usuarios set usuario='$usuario', password='$pass', nombre='$nombre', telefono='$telefono', cargo='$cargo', dependencia='$dependencia', imagen='$destino' where id='$id '");
    
}
if(!$qry){
    echo 'No se logro actualizar';
    
}else{
    header("Location: perfil.php");
}

?>
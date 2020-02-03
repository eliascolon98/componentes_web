<?php
require_once 'conexion.php';
// ini_set('upload_max_filesize', '150M');
// ini_set('post_max_size', '150M');

$nombre=$_REQUEST["titulo"];
$descripcion=$_REQUEST["descripcion"];
$fecha=$_REQUEST["fecha"];
$noticia=$_POST["noticia"];

$foto=$_FILES["imagen"]["name"];
$ruta=$_FILES["imagen"]["tmp_name"];
$nombre_foto = str_replace(" ","",$foto);
$destino_img="fotos/".$nombre_foto;

//$con = Conect();
copy($ruta,$destino_img);

$nombre_ar = $_FILES['archivo']['name'];
$tipo = $_FILES['archivo']['type'];
$tamanio = $_FILES['archivo']['size'];
$rutas = $_FILES['archivo']['tmp_name'];
$nombre_archivo = str_replace(" ","-",$nombre_ar);
$destino_arc="archivos/".$nombre_archivo; 
copy($rutas,$destino_arc);

$video=$_FILES["video"]["name"];
$ruta_video=$_FILES["video"]["tmp_name"];
$nombre_video = str_replace(" ","",$video);
$destino_vid="videos/".$nombre_video;
copy($ruta_video,$destino_vid);


$con = Conect();
    

    

    
    if($nombre_ar!=""){

    mysqli_query($con, "insert into noticias (nombre,descripcion,imagen,archivo, video, noticia,fecha) values('$nombre','$descripcion','$destino_img','$destino_arc', '$destino_vid','$noticia','$fecha')");
    header("Location: noticias.php");
    }else{
         mysqli_query($con, "insert into noticias (nombre,descripcion,imagen, noticia,fecha) values('$nombre','$descripcion','$destino_img','$noticia','$fecha')");
    header("Location: noticias.php");
    }
?>
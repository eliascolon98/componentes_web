<?php
require_once ('conexion.php');
$id=$_REQUEST["id"];
$nombre=$_REQUEST["titulo"];
$descripcion=$_REQUEST["descripcion"];
$noticia=$_REQUEST["noticia"];
$foto=$_FILES["imagen"]["name"];
$ruta=$_FILES["imagen"]["tmp_name"];
$nombre_foto = str_replace(" ","",$foto);
$destino="fotos/".$nombre_foto;
$comparador="fotos/";

if($destino == $comparador){
    $con1 = Conect();
     $qry1="SELECT * FROM noticias where id ='$id'";
            $sql1=mysqli_query($con1,$qry1);
            $res=  mysqli_fetch_array($sql1) ;
            
            $destino = $res[3];
    $con = Conect();
    $qry=("update noticias set nombre='$nombre', descripcion='$descripcion', imagen='$destino',noticia='$noticia' where id='$id '");
    $sql=mysqli_query($con,$qry);
        if(!$sql){
        echo 'No se logro actualizar';
    }else{
        header("Location: noticias.php");
    }
}else{
    copy($ruta,$destino);
    $con = Conect();
    $qry=("update noticias set nombre='$nombre', descripcion='$descripcion', imagen='$destino',noticia='$noticia' where id='$id '");
    $sql=mysqli_query($con,$qry);  

    if(!$sql){
        echo 'No se logro actualizar';
    }else{
        header("Location: noticias.php");
    }
}

?>
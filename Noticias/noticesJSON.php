<?php

header('Access-Control-Allow-Origin: *'); 

require_once("bd_function.php");

$link = Conect();
$array = array();

    $sql = "SELECT * FROM noticias  order by id desc";
    $result = mysqli_query($link, $sql) or die(mysqli_error($link));
    while ($field = mysqli_fetch_array($result)) {
        $nombre = $field['nombre'];
        $id = $field['id'];
        $descripcion = $field['descripcion'];
        $imagen = $field['imagen'];
        $noticia = $field['noticia'];
        $fecha = $field['fecha'];
        $array[] = array(
            'titulo' => $nombre,
            'id' => $id,
            'descripcion' => $descripcion,
            'imagen' => $imagen,
            'noticia' => $noticia,
            'fecha' => $fecha
        );
    }
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
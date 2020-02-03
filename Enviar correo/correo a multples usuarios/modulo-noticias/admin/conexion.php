<?php

function Conect()
{
    # code...
   
    $echo = mysqli_connect("localhost","root","","modulo_noticias");
    $echo -> set_charset("utf8");
    return $echo;
}

?>

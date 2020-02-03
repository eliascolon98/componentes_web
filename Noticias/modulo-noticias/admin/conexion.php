<?php

function Conect()
{
    # code...

    $echo = mysqli_connect("localhost","root","","noticias");

    return $echo;
}

?>

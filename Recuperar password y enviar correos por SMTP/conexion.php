<?php
/*Funcion que nos permite crear la conexión a la base de datos*/
function con()
{ 
    $con = mysqli_connect("localhost", "root", "", "globalconsulting");

    return $con;
}

?>

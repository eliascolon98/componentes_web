<?php


require_once 'conexion.php';
$con = Conect();
$array = array();

$desc = $_POST['desc'];
$asunto = $_POST['asunto'];
$categoria = $_POST['cat'];
$fecha = $_REQUEST['fecha'];

$foto=$_FILES["imagen"]["name"];
$ruta=$_FILES["imagen"]["tmp_name"];
$nombre_foto = str_replace(" ","",$foto);
$destino_img="fotos/".$nombre_foto;
copy($ruta,$destino_img);


$nombre_ar = $_FILES['archivo']['name'];
$tipo = $_FILES['archivo']['type'];
$tamanio = $_FILES['archivo']['size'];
$rutas = $_FILES['archivo']['tmp_name'];
$nombre_archivo = str_replace(" ","-",$nombre_ar);
$destino_arc="archivos/".$nombre_archivo; 
copy($rutas,$destino_arc);



if($foto !="" && $nombre_ar ==""){
	mysqli_query($con, "insert into archivos (imagen, fecha) values('$destino_img','$fecha')");
}else if ($foto =="" && $nombre_ar !=""){
	mysqli_query($con, "insert into archivos (archivo, fecha) values('$destino_arc' ,'$fecha')");
}else if ($foto !="" && $nombre_ar !=""){
	mysqli_query($con, "insert into archivos (imagen, archivo, fecha) values('$destino_img','$destino_arc' ,'$fecha')");
}else{
	mysqli_query($con, "insert into archivos (fecha) values('$fecha')");
}

$docs = "SELECT * from archivos order by id asc";
$resd = mysqli_query($con, $docs) or die (mysqli_error($con));
while($datos = mysqli_fetch_array($resd)){
	$img = $datos['imagen'];
	$arc = $datos['archivo'];
	$array[] = array(
		'images' => $img,
		'archivo' => $arc
	);
	
}


if(@$img != "" && $arc == ""){
	$img2 = "<img src='".$img."' alt='central' class='img img-fluid img-correo'>";
	$arc2 = "<div class='sin_contenido'></div>";
}else if(@$img == "" && $arc != ""){
	$img2 = "<div class='sin_contenido'></div>";
	$arc2 = "<a href='".$arc."' target='h_blank' class='arch' class='center'>Archivo</a>";
}else if(@$img == "" && $arc == ""){
	$arc2 = "<div class='sin_contenido'></div>";
	$img2 = "<div class='sin_contenido'></div>";
}else{
	$arc2 = "<a href='".$arc."' target='h_blank' class='arch' class='center'>Archivo</a>";
	$img2 = "<img src='".$img."' alt='central' class='img img-fluid img-correo'>";
}

if($categoria == 4){
	$sql = "SELECT * from correos";
}else {
	$sql = "SELECT * from correos WHERE id= $categoria ";
}
$res = mysqli_query($con, $sql);
$cola_correos="";
$loop_index = 0;
while($registro = mysqli_fetch_array($res)){                      
	if($loop_index > 0){
		$cola_correos.=",";
	}
	$mail_list = json_decode($registro['email']);
	for($i=0; $i < count($mail_list);$i++){
		$cola_correos.=  $mail_list[$i]->email;
		if($i < count($mail_list)-1){
			$cola_correos.=",";
		}
	}
	$loop_index++;
}

echo "<pre>";
echo $cola_correos;
echo "</pre>";

$email_from = "ecolon@biinyu.com.co";
$email_to = $cola_correos;


$message = '<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title> CENTRAL</title>
  </head>
  <body>
      <fieldset style="border:1px solid #aaa; width: 50%; text-align:center;">
			<h3 class="center">Central</h3>
			<p class="center"><b>Asunto:</b>'. $asunto .'</p>
            <p class="center"><b>Mensaje: <br><br>
			</b style="text-align:justify;">'. $desc .'</p>
			'.$img2.'
			<br><br>
			'.$arc2.'
			<style>
			.img-correo{
				padding: 0px 160px;
				}
              .arch{
                border: 1px solid #031661;
                color: #000;
                padding: 8px 25px;
                text-decoration: none;
              }
              .arch:hover{
                background: #031661;
                color: #fff;
                text-decoration: none;
			  }
			  .center{
				  text-align:center !important;
			  }
            </style>
            <br><br>
	</fieldset>  
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	
	</body>
</html>';

// create email headers
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n".
			'Reply-To:'. $email_from . "\r\n" .
			'From:' . $email_from . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
$email = @mail($email_to, $asunto, wordwrap($message), $headers);
if ($email) {
	$email =  1;
	header("location:enviarCorreos.php?salida=$email");
} else {
	// $email =  2;
	// header("location: enviarCorreos.php?salida=$email");
	echo $message;
	
}

?>
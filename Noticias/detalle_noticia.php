<?php
require_once("assets/js/bd_function.php");


$codigo = $_GET["codigo"];

$link = Conect();

    $sql = "SELECT * FROM noticias WHERE id = $codigo";
    $result = mysqli_query($link, $sql) or die(mysqli_error($link));
    while ($field = mysqli_fetch_array($result)) {
        $nombre = $field['nombre'];
        $id = $field['id'];
        $descripcion = $field['descripcion'];
        $imagen = $field['imagen'];
        $archivo = $field['archivo'];
        $video = $field['video'];
        $noticia = $field['noticia'];
        $fecha_complete = strtotime($field['fecha']);
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Detalle noticias</title>
    <meta name="description" content="Home Square is a responsive realestate template."><!-- Add your Company short description -->
    <meta name="keywords" content="Responsive,HTML5,CSS3,XML,JavaScript"><!-- Add some Keywords based on your Company and your business and separate them by comma -->
    <meta name="author" content="Joseph a, QodeArk@gmail.com">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
     integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

     <link rel="shortcut icon" href="assets/img/logo_inversiones_y_construcciones.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Scada:400,700|Open+Sans:400,300,700" rel="stylesheet" type="text/css">
    <link id="main-style-file-css" rel="stylesheet" href="assets/css/style.css" />
    <link id="main-style-file-css" rel="stylesheet" href="assets/css/bootstrap-select.css" />
    <link id="main-style-file-css" rel="stylesheet" href="assets/css/bootstrap-select.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous">
 
</head>

<body class="contact-us">
        <header id="main-header">
                <header class="top-header hidden-xs top">
                    <div class="container">
                        <div class="row sub_menu"></div>
                    </div>
                </header>
                <div class="main-header-cont container menu-ppal" ></div>
                <div id="mobile-menu-container" style="width: 100%;" class="hidden-md hidden-lg"></div>
            </header>

    

    <br><br> <br> <br>
	<section id="noticias" style="height: 1000px;">
        <div class="c-noticias" id="detalle-noti">
          
            
        </div>
        <div>


        </div>
        
    </section>
    <br> <br> <br>

    <footer id="main-footer">
        <div class="inner-container container">


            <div class="bott-section clearfix">
                <div class="col-md-12 col-sm-12" class="copy">
                    <div class="row">
                        <div class="col-4">
                            <img class="logo-f" src="assets/img/logo_inversiones_y_construcciones.png" alt="">
                        </div>
                        <div class="col-4">
                            <h1 class="t-c">Contacto</h1>
                            <ul class="c-footer">
                                <li><i class="fas fa-map-marker-alt"></i> Cra 15 No 45 – 07 Ofc 201</li>
                                <li><i style="" class="fa fa-mobile-alt"></i>
                                    <a href="tel:3105582787">3105582787</a>
                                    <a href="tel:3022396172">3022396172</a>
                                </li>
                                <li>
                                    <a href="mailto:icmarketingsas@gmail.com" style="">
                                        <i class="fa fa-envelope"></i> icmarketingsas@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <h1>Enlaces</h1>
                            <ul class="c-footer2">
                                <li> <a href="http://www.lonjadebogota.org.co/"><i class="fas fa-greater-than"></i> Lonja de Bogotá</a></li>
                                <li> <a href="http://www.ellibertador.com.co/"><i class="fas fa-greater-than"></i> El Libertador </a></li>
                                <li> <a href="https://www.segurosbolivar.com/ "><i class="fas fa-greater-than"></i> Seguros Bolivar </a></li>
                                <li> <a href="http://www.shd.gov.co/shd/"><i class="fas fa-greater-than"></i> Secretaria de Haciendo Distrital </a></li>
                                <li> <a href="http://www.habitatbogota.gov.co/sdht/index.php "><i class="fas fa-greater-than"></i> Secretaria Distrital de Habitad </a></li>
                                <li> <a href="http://www.dian.gov.co/ "><i class="fas fa-greater-than"></i> Dian </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cyr">
                            &copy;Copyright 2019 <a href="https://www.dexcondigital.com/" target="_blank">Dexcon Digital</a>.
                            Todos los
                            derechos reservados.
                    </div>
                </div>
            </div>
        </div>


    </footer>

    <a id="subir" href="#main-header"><img src="assets/img/subir.png" alt=""></a>
    <style>
        #subir{
		 padding: 9px;
		 background: #024959;
		 font-size: 9px;
		 color: #fff;
		 cursor: pointer;
		 position: fixed;
		 bottom: 24px;
		 border-radius: 21px;
		 right: 20px;
		 display: none;
		}
		
		</style>


    <!-- JS Include Section -->
    <script type="text/javascript" src="assets/js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="assets/js/subir.js"></script>
    <script type="text/javascript" src="assets/js/notices.js"></script>
    <script type="text/javascript" src="assets/js/helper.js"></script>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="assets/js/template.js"></script>
    <script type="text/javascript" src="assets/js/menu.js"></script>
    
    <!-- End of JS Include Section -->
    <?php echo "<script>var titulo =' " . $nombre . "'</script>"; ?>
    <?php echo "<script>var id =' " . $id . "'</script>"; ?>
    <?php echo "<script>var descripcion =' " . $descripcion . "'</script>"; ?>
    <?php echo "<script>var imagen ='" . $imagen . "'</script>"; ?>
    <?php echo "<script>var noticia =' " . $noticia . "'</script>"; ?>
    <?php echo "<script>var video =' " . $video . "'</script>"; ?>
    <?php echo "<script>var archivo =' ".str_replace(" ","",$archivo) ."'</script>"; ?>
    <?php echo "<script> var anio = ".date('Y', $fecha_complete)."</script>";?>
    <?php echo "<script> var mes = ".date('m', $fecha_complete)."</script>";?>
    <?php echo "<script> var dia = ".date('d', $fecha_complete)."</script>";?>
    <script>
    
        var imagen = 'http://localhost/inversionesconstrucciones/icm-noticias/admin/'+imagen+'';
        var archivo = 'http://localhost/inversionesconstrucciones/icm-noticias/admin/'+archivo+'';
        var video = 'http://localhost/inversionesconstrucciones/icm-noticias/admin/'+video+'';

        imagen = imagen.replace(/\s/g, '');
        archivo = archivo.replace(/\s/g, '');
        video = video.replace(/\s/g, '');

        var noti = '<div class="row">'+
                '<article class="post-item">'+
                '<div class="shadow-bottom-items">'+
                '<div class="img-noticias" style="margin-top: 10%;">'+
                '<img id="img-d-c" style="width: 56%;" src="'+imagen+'" alt="Featured">'+
                '</div>'+
                '</div>	'+
                '<div class="post-inner">'+
                '<div class="post-content">'+
                '<div class="post-title">'+
                '<h5>'+
                '<a href="#">'+titulo+'</a>'+
                '</h5>'+
                '</div>'+
                '<div class="post-entry">'+
                '<i class="fa fa-calendar">  '+dia+'/'+mes+'/'+anio+'</i>'+
                '<p>'+descripcion+'</p>';
                if(archivo !== "http://localhost/icm-noticias/admin/"){
                     noti+='<a download="" href="'+archivo+'"> archivo adjunto</a>'
                 '<p>'+noticia+'</p>'+
                '</div>  '+
                '</div> '+
                '</div> '+
                '</article> ';
                '</div> ';
                    
                }else{
                noti+='<p>'+noticia+'</p>'+
                '</div>   '+
                '</div> '+
                '</div> '+
                '</article> ';
                '</div> ';
                }
                if(video !== "http://localhost/icm-noticias/admin/"){
                noti+=
                '<div>'+
                '<video id="cover-video" class="tam-video" width="440" height="280" preload="metadata" autoplay="" controls="" loop="">'+
                '<source src="'+video+'" type="video/mp4">'+
                '</video>'+

                '</div> ';
                    
                }
        $("#detalle-noti").html(noti);
        
    </script>

   

</body>

<!-- Mirrored from ravistheme.com/home-square/html/pages/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 11 Feb 2019 19:57:20 GMT -->

</html>
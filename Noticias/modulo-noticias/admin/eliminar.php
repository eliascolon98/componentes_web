
     <?php
     require_once("conexion.php");
    $id=$_GET["id"];
    $con=Conect();
      
$qry="DELETE FROM noticias WHERE id ='$id'  ";
$sql=mysqli_query($con,$qry);
                              
  if(!$sql){
      echo 'No se logro realizar la peticion';
      
  }else
  {
      header("Location: noticias.php");
  }
    
                 
        
        
        ?>
    
    

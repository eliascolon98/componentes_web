
<?php
     require_once("conexion.php");

    $con=Conect();

    $categ = $_GET["id"];
    $email = $_GET["email"];
    
    $sql = "SELECT * from correos where id = $categ";
    $res = mysqli_query($con, $sql);

    
    $selected_item = false;
    $selected_cat = false;
    
    while($registro = mysqli_fetch_array($res)){
      $mail_list = json_decode($registro['email']);
      for($i=0; $i < count($mail_list);$i++){
            if($mail_list[$i]->email == $email){
              $selected_cat = $registro['id'];
              unset($mail_list[$i]);
              $mail_list = array_values($mail_list);
              break;
            }
      } 
      if($selected_cat){ break;}
  }
    
    
    $encoded_mail_list = json_encode($mail_list);
echo $encoded_mail_list;
    $id = $categ;
  
    $borrar = "UPDATE correos set email = '$encoded_mail_list' where `correos`.`id` = '$id'";
    $res = mysqli_query($con, $borrar) or die (mysqli_error($con));
    echo $res;
    header("location: correos.php");
    
                 
        
        
?>
    
    

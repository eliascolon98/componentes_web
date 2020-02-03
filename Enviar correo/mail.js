function enviar() {

    var email = $("#email").val();
    var name = $("#nombre").val();
    var telefono = $("#telefono").val();
    var asunto = $("#asunto").val();  
    var mensaje = $("#mensaje").val();


    $.ajax({
        url: "php/mailServicios.php",
        type: "POST",
        data: {
            email: email,
            name: name,
            telefono: telefono,
            asunto: asunto,
            mensaje: mensaje,

        
        },
        dataType: "html",
        success: function (data) {
            console.log(data),
            console.log("sending...");
            if (data == 1) {
               alert("Mensaje enviado");
                setTimeout(() => {
                console.log(1)
                redirect();
            }, 1000);
       
             function redirect(){
		   location.reload();
	   }

            }
        }
    });
    return false;
}

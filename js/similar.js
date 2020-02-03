setTimeout(function () {
    $.ajax({
        url: 'http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/0/total/12/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/desc/banios/0/alcobas/0/garajes/0',
        type: 'GET',
        cache: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Basic ' + btoa('Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588'));
        },
        'dataType': "json",
        success: function (data) {
            console.log(data)
            var res = "";
            var nInmb = 0;
            var j = 0;
            
            for (var i = 0; i < data.Inmuebles.length; i++) {
                
                if (data.Inmuebles[i].Codigo_Inmueble != localStorage.codigo) {
                    
                    // if (data.Inmuebles[i].Gestion == localStorage.gestion) {
                        res += '<div class="media">' +
                        '<div class="media-left">' +
                        '<a href="detalle_inmueble.php?dt=' + data.Inmuebles[i].Codigo_Inmueble + '">';

                     if(data.Inmuebles[i].foto1 ==""){
                        res+='<img src="images/no_image.png" class="img-responsive" alt="" style="width: 100%;height:40px">';    
                    }else{
                        res+='<img class="img-responsive" src="' + data.Inmuebles[i].foto1 + '" alt="" style="width: 100%;height:40px">';
                    }

                    
                        res+='</a>' +
                        '</div>' +
                        '<div class="media-body media-middle">' +
                        '<a href="detalle_inmueble.php?dt=' + data.Inmuebles[i].Codigo_Inmueble + '">' +
                        '<h5 class="blogTitle">' + data.Inmuebles[i].Codigo_Inmueble + '</h5>' +
                        '</a>' +
                        '</div>' +
                        '</div>';
                        j++;
                        
                    // } else {
                    //     nInmb++;
                    // }
                    if (j > 4) {
                        break;
                    }
                }
               
            }


            if (j == 0) {

                res += '<div class="media feature-item">' +
                    '<div class="title-widget">No hay Propiedades Similares</div>' +
                    '</div>';
                $(".similarListing").append(res);
                return;
            }
            
            $(".similarListing").append(res);
        }

    });
});



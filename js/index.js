setTimeout(function () {
    $.ajax({
        url: 'http://simi-api.com/ApiSimiweb/response/v21/inmueblesDestacados/total/10/limit/10',
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
            if (data == "Sin resultados") {
                res += '<br><br><h3 style="margin-left: 15px;"> No hay Inmuebles destacados </h3>';
                $(".filtr-container").html(res);
                return;

            } else {
                var j = 0;
                for (var i = 0; i < data.infoAdd.totalInmuebles; i++) {
                    res += '';
                    if (data[i].Gestion == "Arriendo") {
                        res +='<div class="property-price">$ ' + data[i].Canon + '</div>';
                    } else if (data[i].Gestion == "Arriendo/Venta") {
                        res +='<div class="property-price">$' + data[i].Venta + '"<br> $"' + data[i].Canon + '</div>';
                    }else{
                        res +='<div class="property-price">$ ' + data[i].Venta + '</div>';
                    }

                    if (data[i].foto1 != "") {
                        res += '<img src="' + data[i].foto1 + '"  alt="fp" class="" style="height: 200px;" > ';
                    }else{
                        res += '<img src="img/no_image.png"alt="fp" class="img-responsive" style=""';
                    }
                    res += ''+
                        
                    i++;
                    if (i > 3) {
                        break;
                    }
                }
            }
            console.log(res);
            $(".filtr-container").html(res);

        }

    }
    );

});


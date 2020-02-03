function paginator(actual) {

    let position = 0;
    if (position != 0) {
        position = localStorage.getItem("total");
    }
    var count = localStorage.getItem("count");

    if (actual == 'ant') {
        count--;
        localStorage.setItem("count", count);
        imprimir(count);
    }
    if (actual == 'sig') {
        count++;
        localStorage.setItem("count", count);
        imprimir(count);
    }

}

function imprimir(count) {
    localStorage.setItem("count", count);


    if (localStorage.getItem("gestion") == 0 && localStorage.getItem("ciudad") == 0 && localStorage.getItem("tipo") == 0 && localStorage.getItem("barrio") == 0 && localStorage.getItem("precio") == 0  && localStorage.getItem("precio1") == 0) {
        $.ajax({
            url: 'http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/' + count + '/total/12/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/desc/banios/0/alcobas/0/garajes/0',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    'Authorization',
                    'Basic ' + btoa('Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588'));
            },
            'dataType': "json",
            success: function (data) {
                console.log(data)
                
                if (data == "Sin resultados") {
                    res += '<div class="alert alert-danger"><h4>No hay Inmuebles </h4></div>';
                    $("#inmb").append(res);
                    return;

                } else {


                    localStorage.setItem("total", data.datosGrales.fin - 1);
                  
                    var res = " ";
                   
                     res += '<div class="total-inm"><h4>Se han econtrado '+data.Inmuebles.length+' Inmuebles de '+  data.datosGrales.totalInmuebles +'</h4></div>';
                            
                    for (var pos = 0; pos < data.Inmuebles.length; pos++) {
                    
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


                    res += '';


                    }

                    
                    $(".pagina").html("pagina "+data.datosGrales.pagina_actual+ " de "+localStorage.getItem("total"));
                }
                $("#inmb").html(res)

            }

        });
        validar()
    } else {        

        $.ajax({
            url: 'http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/' + count + '/total/12/departamento/0/ciudad/' + localStorage.getItem("ciudad") + '/zona/0/barrio/' + localStorage.getItem("barrio") + '/tipoInm/' + localStorage.getItem("tipo") + '/tipOper/' + localStorage.getItem("gestion") + '/areamin/0/areamax/0/valmin/' + localStorage.getItem("precio") + '/valmax/' + localStorage.getItem("precio1") + '/campo/0/order/0/banios/0/alcobas/0/garajes/0',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    'Authorization',
                    'Basic ' + btoa('Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588'));
            },
            'dataType': "json",
            success: function (data) {
                console.log(data)
                console.log('http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/' + count + '/total/12/departamento/0/ciudad/' + localStorage.getItem("ciudad") + '/zona/0/barrio/' + localStorage.getItem("barrio") + '/tipoInm/' + localStorage.getItem("tipo") + '/tipOper/' + localStorage.getItem("gestion") + '/areamin/0/areamax/0/valmin/' + localStorage.getItem("precio") + '/valmax/' + localStorage.getItem("precio1") + '/campo/0/order/0/banios/0/alcobas/0/garajes/0')
                var res = " ";
                if (data == "Sin resultados") {
                    res += '<div class="alert alert-danger"><h4>No hay Inmuebles </h4></div>';
                    $("#inmb").append(res);
                    $("#siguiente").css("display", "none");
                    return;

                } else {
                    localStorage.setItem("total", data.datosGrales.fin);
                                      
                    for (var pos = 0; pos < (data.Inmuebles.length); pos++) {
                        if (data.Inmuebles[pos].Codigo_Inmueble != undefined) {

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

                    res += '';


                           
                        }
                    }
                    if (localStorage.getItem("total") == 0) {
                        $(".pagina").html("pagina " + data.datosGrales.pagina_actual + " de 1")
                    } else {
                        $(".pagina").html("pagina " + data.datosGrales.pagina_actual + " de " + localStorage.getItem("total"))
                    }
                }

                $("#inmb").html(res)

            }

        });
        validar()
    }
}

function paginator(actual) {

    let position = 0;
    if (position != 0) {
        position = localStorage.getItem("total");
    }
    var count = localStorage.getItem("count");

    if (actual == 'ant') {
        count--;
        localStorage.setItem("count", count);
        imprimir(count);
    }
    if (actual == 'sig') {
        count++;
        localStorage.setItem("count", count);
        imprimir(count);
    }

}

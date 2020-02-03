$(document).ready(function () {
    //guarda el id de los departamentos
    var res = new Array();

    //peticion departamentos
    $.ajax({
        url: "http://www.simi-api.com/ApiSimiweb/response/v2/departamento/",
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " +
                btoa("Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588")
            );
        },
        dataType: "html",
        success: function (data) {
            var datos = data.trim();

            if (datos.localeCompare('"Sin resultados"') == 0) {
                res += "No hay Inmuebles destacados";
            } else {
                var informacion = JSON.parse(data);
                for (var i = 0; i < informacion.length; i++) {
                    //peticion ciudades
                    $.ajax({
                        url: "http://www.simi-api.com/ApiSimiweb/response/v2/ciudad/idDepartamento/" + informacion[i].id + "",
                        type: "GET",
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader(
                                "Authorization",
                                "Basic " +
                                btoa("Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588")
                            );
                        },
                        dataType: "json",
                        success: function (data) {
                            var resultado = '<option class="bs-title-option"  value="0">Ciudad</option>';;
                            var informacion = (data);
                            var ciudad = localStorage.getItem("ciudad");
                            for (var i = 0; i < informacion.length; i++) {
                                if (ciudad == informacion[i].id) {
                                    resultado += '<option selected value="' +
                                        informacion[i].id +
                                        '">' +
                                        informacion[i].nombre +
                                        "</option>";
                                }
                                else {
                                    resultado += '<option value="' +
                                        informacion[i].id +
                                        '">' +
                                        informacion[i].nombre +
                                        "</option>";

                                }
                            }
                            $(".ciudad").append(resultado);
                        }
                    });
                }
            }
        }
    });


    $(".ciudad").change(function () {
        var res_ciudad = $(".ciudad option:selected").val();

        $.ajax({
            url: "http://www.simi-api.com/ApiSimiweb/response/v2/zonas/idCiudad/" +
                res_ciudad +
                "",
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    "Basic " +
                    btoa("Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588")
                );
            },
            dataType: "json",
            success: function (data) {
                var resultado = '<option class="bs-title-option"  value="0">Zona</option>';
                var informacion = data;
                for (var i = 0; i < informacion.length; i++) {
                    resultado += '<option value="' + informacion[i].id + '">' +
                        informacion[i].nombre +
                        "</option>";
                }

                $(".zona").append("");
                $(".zona").html(resultado);
            }
        });
    });

    $(".zona").change(function () {
        var res_zona = $(".zona option:selected").val();
        var res_ciudad = $(".ciudad option:selected").val();

        $.ajax({
            url: "http://simi-api.com/ApiSimiweb/response/v2/barrios/idCiudad/"+res_ciudad +"/idZona/"+res_zona+"",
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    "Basic " +
                    btoa("Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588")
                );
            },
            dataType: "json",
            success: function (data) {
                var resultado = '<option class="bs-title-option"  value="0">Barrio</option>';
                var informacion = data;
                for (var i = 0; i < informacion.length; i++) {
                    resultado += '<option value="' + informacion[i].id + '">' +
                        informacion[i].nombre +
                        "</option>";
                }

                $(".barrio").append("");
                $(".barrio").html(resultado);
            }
        });
    });

    //get list of properties
    $.ajax({
        url: "http://www.simi-api.com/ApiSimiweb/response/tipoInmuebles/",
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " +
                btoa("Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588")
            );
        },
        dataType: "json",
        success: function (data) {
            var resultado = '<option class="bs-title-option" value="0">Tipo de Inmueble</option>';
            var informacion = (data);
            var tipo = localStorage.getItem("tipo");

            for (var i = 0; i < informacion.length; i++) {
                if (tipo == informacion[i].idTipoInm) {

                    resultado +=
                        '<option selected value="' +
                        informacion[i].idTipoInm + '" >' +
                        informacion[i].Nombre +
                        "</option>";
                }
                else {


                    resultado +=
                        '<option value="' +
                        informacion[i].idTipoInm + '">' +
                        informacion[i].Nombre +
                        "</option>";
                }

            }
            $(".inmueble").html(resultado);
        }
    });

    //get list of the transactions
    $.ajax({
        url: "http://www.simi-api.com/ApiSimiweb/response/gestion/",
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " +
                btoa("Authorization:Q94xlnPYlac2ISgyseVDjIZGzxRcvhrtfo9D0pEf-588")
            );
        },
        dataType: "json",
        success: function (data) {
            var resultado = '<option class="bs-title-option" value="0">Gestión</option>';
            var operacion = localStorage.getItem("gestion");
            for (var i = 0; i < data.length; i++) {
                    if (operacion == data[i].idGestion) {

                        resultado += '<option selected value="' +
                            data[i].idGestion + '">' +
                            data[i].Nombre +
                            "</option>";
                    }
                    else {
                        resultado += '<option value="' +
                            data[i].idGestion + '">' +
                            data[i].Nombre +
                            "</option>";
                    }
            }
            $(".operacion").html(resultado);
        }
    });

    

    var cuidad, inmueble, operacion, zona;
    $(".search").click(function (e) {
        e.preventDefault();
        zona = $(".zona option:selected").val();
        inmueble = $(".inmueble option:selected").val();
        ciudad = $(".ciudad option:selected").val();
        barrio = $(".barrio option:selected").val();
        operacion = $(".operacion option:selected").val();
        var code = $(".codeInm").val();
        var precio1 = $(".precio-1").val();
        var precio2 = $(".precio-2").val();
        var alcobas = $("#alcobas").val();
      
        if (code !== "") {
            window.location.href = 'detalle_inmueble.php?dt=588-' + code + '';
        } else {
            window.location.href = 'inmuebles.php?gs=' + operacion 
            + '&&ti=' + inmueble + '&&ci=' + ciudad + '&&zo=' + zona +  '&&ba=' + barrio +
            '&&pre=' + precio1 + '&&pre1=' + precio2 + '&&alc=' + alcobas;
        }

    });

    
    



});